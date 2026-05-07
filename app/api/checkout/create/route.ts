/**
 * POST /api/checkout/create
 * สร้าง order และ charge ผ่าน Omise
 */

import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import {
  getBookById, getCouponByCode, createOrder,
  getOrderByIdempotencyKey, updateOrderStatus,
} from '@/lib/db/store-client'
import {
  createCharge, createPromptPaySource,
} from '@/lib/payments/omise'
import { COURSE } from '@/lib/constants'

// ── Input validation ──────────────────────────────────────────

interface CheckoutBody {
  bookId: number
  profileId: string
  couponCode?: string
  paymentMethod: 'promptpay' | 'card'
  source?: string   // OmiseJS token สำหรับ card
  returnUri?: string
}

function isValidBody(b: unknown): b is CheckoutBody {
  if (!b || typeof b !== 'object') return false
  const body = b as Record<string, unknown>
  return (
    typeof body.bookId === 'number' &&
    typeof body.profileId === 'string' &&
    (body.paymentMethod === 'promptpay' || body.paymentMethod === 'card')
  )
}

// ── Handler ───────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!isValidBody(body)) {
    return NextResponse.json(
      { error: 'Required: bookId, profileId, paymentMethod' },
      { status: 400 }
    )
  }

  const { bookId, profileId, couponCode, paymentMethod, source, returnUri } = body

  try {
    // 1. ตรวจสอบหนังสือ
    const book = await getBookById(bookId)
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    // 2. คำนวณราคา (ใช้ COURSE.price เป็น default ถ้า book ไม่มีราคา)
    let amountSatang = COURSE.price * 100  // 990 บาท = 99000 satang
    let couponId: string | undefined

    if (couponCode) {
      const coupon = await getCouponByCode(couponCode)
      if (!coupon) {
        return NextResponse.json({ error: 'Invalid or expired coupon' }, { status: 400 })
      }
      if (coupon.max_uses !== null && coupon.used_count >= coupon.max_uses) {
        return NextResponse.json({ error: 'Coupon usage limit reached' }, { status: 400 })
      }
      if (coupon.expires_at && new Date(coupon.expires_at) < new Date()) {
        return NextResponse.json({ error: 'Coupon has expired' }, { status: 400 })
      }
      amountSatang = Math.max(0, amountSatang - coupon.discount_satang)
      couponId = coupon.id
    }

    // 3. idempotency key — ใช้ profileId + bookId + method เพื่อป้องกัน double charge
    const idempotencyKey = `${profileId}:${bookId}:${paymentMethod}:${randomUUID()}`

    // 4. ตรวจ duplicate (ถ้ามี pending order อยู่แล้ว ให้ return ซ้ำ)
    const existing = await getOrderByIdempotencyKey(idempotencyKey)
    if (existing && existing.status === 'pending' && existing.omise_charge_id) {
      return NextResponse.json({
        orderId:      existing.id,
        chargeId:     existing.omise_charge_id,
        authorizeUri: null,
      })
    }

    // 5. สร้าง order (status = pending)
    const order = await createOrder({
      profile_id:      profileId,
      book_id:         bookId,
      amount_satang:   amountSatang,
      idempotency_key: idempotencyKey,
      payment_method:  paymentMethod,
      coupon_id:       couponId,
      expires_at:      new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 นาที
      metadata:        { book_title: book.title },
    })

    // 6. สร้าง Omise charge
    let chargeSource = source
    let authorizeUri: string | null = null

    if (paymentMethod === 'promptpay') {
      // PromptPay: ต้องสร้าง source ก่อน
      const ppSource = await createPromptPaySource(amountSatang)
      chargeSource = ppSource.id
    }

    const charge = await createCharge({
      amount:      amountSatang,
      source:      chargeSource,
      returnUri:   returnUri ?? `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/complete`,
      description: `${book.title} — order ${order.id}`,
      metadata:    { order_id: order.id, profile_id: profileId },
    })

    authorizeUri = charge.authorize_uri

    // 7. บันทึก charge id กลับเข้า order
    await updateOrderStatus(order.id, 'pending', {
      omise_charge_id: charge.id,
    })

    return NextResponse.json({
      orderId:      order.id,
      chargeId:     charge.id,
      authorizeUri,
      amountSatang,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error'
    console.error('[checkout/create]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
