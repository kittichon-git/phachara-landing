/**
 * POST /api/webhooks/omise
 * รับ webhook จาก Omise — verify signature → process event
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/payments/omise'
import {
  getOrderByChargeId, updateOrderStatus,
  insertPaymentEvent, createEnrollment, addOutboxEvent,
} from '@/lib/db/store-client'

// ── Omise Event Shape ─────────────────────────────────────────

interface OmiseEvent {
  id: string
  object: 'event'
  key: string
  data: {
    id: string
    object: string
    status?: string
    amount?: number
    metadata?: Record<string, unknown>
  }
}

// ── Handler ───────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. อ่าน raw body ครั้งเดียว
  const rawBody = await req.text()

  // 2. Verify JWS detached signature (Omise-Signature header)
  const signatureHeader = req.headers.get('omise-signature') ?? ''
  try {
    const valid = verifyWebhookSignature(rawBody, signatureHeader)
    if (!valid) {
      console.warn('[webhook/omise] Invalid signature', signatureHeader.slice(0, 60))
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }
  } catch (err) {
    console.error('[webhook/omise] Signature error:', err)
    return NextResponse.json({ error: 'Signature check failed' }, { status: 500 })
  }

  // 3. Parse event
  let event: OmiseEvent
  try {
    event = JSON.parse(rawBody) as OmiseEvent
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // 4. หา order จาก charge id
  const chargeId = event.data?.id
  if (!chargeId) {
    return NextResponse.json({ ok: true, skipped: 'no charge id' })
  }

  const order = await getOrderByChargeId(chargeId).catch(() => null)
  if (!order) {
    // charge นี้ไม่ใช่ของเรา — return 200 ทันที
    return NextResponse.json({ ok: true, skipped: 'order not found' })
  }

  // 5. Dedupe: INSERT payment_event (ถ้า duplicate → ข้าม)
  const inserted = await insertPaymentEvent({
    order_id:       order.id,
    event_type:     event.key,
    omise_event_id: event.id,
    raw_payload:    event as unknown as Record<string, unknown>,
  }).catch(() => false)

  if (!inserted) {
    // duplicate event — idempotent response
    return NextResponse.json({ ok: true, skipped: 'duplicate event' })
  }

  // 6. Process event
  try {
    if (event.key === 'charge.complete' && event.data.status === 'successful') {
      // 6a. อัปเดต order → paid
      await updateOrderStatus(order.id, 'paid', {
        paid_at: new Date().toISOString(),
      })

      // 6b. สร้าง enrollment
      await createEnrollment({
        profile_id: order.profile_id,
        book_id:    order.book_id,
        order_id:   order.id,
      }).catch(err => {
        // UNIQUE constraint — enrolled แล้ว ไม่ error
        if ((err as Error).message.includes('23505')) return
        throw err
      })

      // 6c. เพิ่ม outbox event สำหรับ downstream (LINE notify, email ฯลฯ)
      await addOutboxEvent({
        order_id:   order.id,
        event_type: 'order.paid',
        payload:    {
          profile_id: order.profile_id,
          book_id:    order.book_id,
          amount:     order.amount_satang,
          charge_id:  chargeId,
        },
      })
    } else if (event.key === 'charge.complete' && event.data.status === 'failed') {
      await updateOrderStatus(order.id, 'failed')
    } else if (event.key === 'charge.expire') {
      await updateOrderStatus(order.id, 'expired')
    }
  } catch (err) {
    console.error('[webhook/omise] Processing error:', err)
    // ยัง return 200 เพื่อไม่ให้ Omise retry ซ้ำ
    // error log ไว้ใน payment_events แล้ว
  }

  // 7. Return 200 ทันที
  return NextResponse.json({ ok: true })
}
