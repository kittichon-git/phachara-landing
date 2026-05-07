/**
 * POST /api/webhooks/omise
 * Event Verification pattern — ดึง charge จาก Omise API โดยตรง ไม่ verify signature
 * https://docs.opn.ooo/webhook-events#verifying-webhook-events
 */

import { retrieveCharge } from '@/lib/payments/omise'
import {
  getOrderByChargeId,
  insertPaymentEvent,
  saveOrderPaid,
} from '@/lib/db/store-client'

export async function POST(request: Request) {
  console.log('[webhook/omise] env check:', {
    hasUrl:           !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    urlPrefix:        process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 30),
    hasServiceKey:    !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    serviceKeyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 12),
    hasAnonKey:       !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    hasOmiseSecret:   !!process.env.OMISE_SECRET_KEY,
    nodeEnv:          process.env.NODE_ENV,
  })

  try {
    const event = JSON.parse(await request.text())

    // ต้องเป็น charge event เท่านั้น
    const chargeId: string = event.data?.id ?? ''
    if (!chargeId.startsWith('chrg_')) {
      return new Response('skipped: not a charge event', { status: 200 })
    }

    // Event Verification: ดึงสถานะจริงจาก Omise (ไม่เชื่อ body)
    const realCharge = await retrieveCharge(chargeId)

    // หา order
    const order = await getOrderByChargeId(chargeId)
    if (!order) {
      return new Response('skipped: order not found', { status: 200 })
    }

    // Idempotency: บันทึก event (UNIQUE omise_event_id — duplicate คืน false)
    const inserted = await insertPaymentEvent({
      order_id:       order.id,
      event_type:     event.key,
      omise_event_id: event.id,
      raw_payload:    realCharge as unknown as Record<string, unknown>,
    })
    if (!inserted) {
      return new Response('skipped: duplicate event', { status: 200 })
    }

    // Process
    if (event.key === 'charge.complete' && realCharge.status === 'successful') {
      await saveOrderPaid(order, chargeId)
    }

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('[webhook/omise]', err)
    return new Response('error', { status: 500 })
  }
}
