/**
 * POST /api/webhooks/omise
 * Event Verification pattern — ดึง charge จาก Omise API โดยตรง ไม่ verify signature
 * https://docs.opn.ooo/webhook-events#verifying-webhook-events
 */

import { retrieveCharge } from '@/lib/payments/omise'
import {
  getOrderByChargeId,
  getOrderById,
  recordPaymentEvent,
  saveOrderPaid,
} from '@/lib/db/store-client'

export async function POST(request: Request) {
  console.log('[webhook/omise] env check:', {
    hasUrl:           !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    urlPrefix:        process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 30),
    hasServiceKey:    !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    serviceKeyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 12),
    hasOmiseSecret:   !!process.env.OMISE_SECRET_KEY,
    nodeEnv:          process.env.NODE_ENV,
  })

  try {
    const event = JSON.parse(await request.text())
    console.log('[webhook/omise] event.key:', event.key, '| event.id:', event.id)

    // ต้องเป็น charge event เท่านั้น
    const chargeId: string = event.data?.id ?? ''
    if (!chargeId.startsWith('chrg_')) {
      return new Response('skipped: not a charge event', { status: 200 })
    }

    // Event Verification: ดึงสถานะจริงจาก Omise (ไม่เชื่อ body)
    const realCharge = await retrieveCharge(chargeId)
    console.log('[webhook/omise] realCharge.status:', realCharge.status)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metadata = (realCharge as any).metadata as Record<string, unknown> | null
    console.log('[webhook/omise] charge metadata:', JSON.stringify(metadata))
    console.log('[webhook/omise] full charge keys:', Object.keys(realCharge))

    // หา order: ลองจาก omise_charge_id ก่อน → fallback metadata.order_id
    let order = await getOrderByChargeId(chargeId)
    if (!order && metadata?.order_id) {
      order = await getOrderById(String(metadata.order_id))
    }
    console.log('[webhook/omise] order found:', !!order, '| order.id:', order?.id)

    // บันทึก event (idempotency via UNIQUE omise_event_id)
    const result = await recordPaymentEvent({
      omise_event_id: event.id,
      event_type:     event.key,
      order_id:       order?.id ?? null,
      raw_payload:    realCharge,
    })
    console.log('[webhook/omise] recordPaymentEvent:', result)

    if (result.duplicate) {
      return new Response('already processed', { status: 200 })
    }

    // Process: successful → enroll (ทั้ง card 1-step และ PromptPay 2-step)
    if (order && realCharge.status === 'successful') {
      await saveOrderPaid(order, chargeId)
      console.log('[webhook/omise] saveOrderPaid done')
    }

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('[webhook/omise] error:', err)
    return new Response('error', { status: 500 })
  }
}
