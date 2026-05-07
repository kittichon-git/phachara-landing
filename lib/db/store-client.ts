/**
 * lib/db/store-client.ts — Server-side Supabase helpers (service_role)
 * ห้าม import ใน client component เด็ดขาด
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'

// ── Types ─────────────────────────────────────────────────────

export type OrderStatus =
  | 'pending' | 'paid' | 'failed' | 'refunded' | 'cancelled' | 'expired'

export interface StoreOrder {
  id: string
  profile_id: string
  book_id: number
  status: OrderStatus
  amount_satang: number
  idempotency_key: string
  omise_charge_id: string | null
  payment_method: string | null
  coupon_id: string | null
  metadata: Record<string, unknown>
  created_at: string
  paid_at: string | null
  expires_at: string | null
}

export interface StoreEnrollment {
  id: string
  profile_id: string
  book_id: number
  order_id: string | null
  enrollment_token: string
  line_user_id: string | null
  granted_at: string
  revoked_at: string | null
}

export interface StoreCoupon {
  id: string
  code: string
  discount_satang: number
  max_uses: number | null
  used_count: number
  expires_at: string | null
  is_active: boolean
}

// ── Service Role Client ───────────────────────────────────────

function getServiceClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    const missing = []
    if (!url) missing.push('NEXT_PUBLIC_SUPABASE_URL')
    if (!key) missing.push('SUPABASE_SERVICE_ROLE_KEY')
    throw new Error(`Missing Supabase env vars: ${missing.join(', ')}`)
  }
  return createClient(url, key, { auth: { persistSession: false } })
}

// ── Books ─────────────────────────────────────────────────────

export async function getBookById(bookId: number) {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('elearning_books')
    .select('id, title, buy_url')
    .eq('id', bookId)
    .eq('is_active', true)
    .maybeSingle()
  if (error) throw new Error(`getBookById: ${error.message}`)
  return data as { id: number; title: string; buy_url: string | null } | null
}

// ── Coupons ───────────────────────────────────────────────────

export async function getCouponByCode(code: string): Promise<StoreCoupon | null> {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('store_coupons')
    .select('*')
    .eq('code', code.toUpperCase())
    .eq('is_active', true)
    .maybeSingle()
  if (error) throw new Error(`getCouponByCode: ${error.message}`)
  return data as StoreCoupon | null
}

export async function incrementCouponUsage(couponId: string): Promise<void> {
  const sb = getServiceClient()
  const { error } = await sb.rpc('increment_coupon_usage', { coupon_id: couponId })
  if (error) {
    // fallback ถ้าไม่มี RPC function
    await sb.from('store_coupons')
      .update({ used_count: sb.rpc('used_count + 1') as unknown as number })
      .eq('id', couponId)
  }
}

// ── Orders ────────────────────────────────────────────────────

export async function createOrder(input: {
  profile_id: string
  book_id: number
  amount_satang: number
  idempotency_key: string
  payment_method?: string
  coupon_id?: string
  metadata?: Record<string, unknown>
  expires_at?: string
}): Promise<StoreOrder> {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('store_orders')
    .insert({
      profile_id:      input.profile_id,
      book_id:         input.book_id,
      amount_satang:   input.amount_satang,
      idempotency_key: input.idempotency_key,
      payment_method:  input.payment_method ?? null,
      coupon_id:       input.coupon_id ?? null,
      metadata:        input.metadata ?? {},
      expires_at:      input.expires_at ?? null,
    })
    .select()
    .single()
  if (error) throw new Error(`createOrder: ${error.message}`)
  return data as StoreOrder
}

export async function getOrderByIdempotencyKey(key: string): Promise<StoreOrder | null> {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('store_orders')
    .select('*')
    .eq('idempotency_key', key)
    .maybeSingle()
  if (error) throw new Error(`getOrderByIdempotencyKey: ${error.message}`)
  return data as StoreOrder | null
}

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus,
  extra?: { omise_charge_id?: string; paid_at?: string }
): Promise<void> {
  const sb = getServiceClient()
  const { error } = await sb
    .from('store_orders')
    .update({
      status,
      ...(extra?.omise_charge_id ? { omise_charge_id: extra.omise_charge_id } : {}),
      ...(extra?.paid_at ? { paid_at: extra.paid_at } : {}),
    })
    .eq('id', orderId)
  if (error) throw new Error(`updateOrderStatus: ${error.message}`)
}

export async function getOrderByChargeId(chargeId: string): Promise<StoreOrder | null> {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('store_orders')
    .select('*')
    .eq('omise_charge_id', chargeId)
    .maybeSingle()
  if (error) throw new Error(`getOrderByChargeId: ${error.message}`)
  return data as StoreOrder | null
}

// ── Payment Events ────────────────────────────────────────────

export async function insertPaymentEvent(input: {
  order_id: string
  event_type: string
  omise_event_id: string
  raw_payload: Record<string, unknown>
}): Promise<boolean> {
  const sb = getServiceClient()
  const { error } = await sb
    .from('store_payment_events')
    .insert({
      order_id:       input.order_id,
      event_type:     input.event_type,
      omise_event_id: input.omise_event_id,
      raw_payload:    input.raw_payload,
    })
  // duplicate omise_event_id = UNIQUE constraint error → dedupe
  if (error?.code === '23505') return false
  if (error) throw new Error(`insertPaymentEvent: ${error.message}`)
  return true
}

// ── Enrollments ───────────────────────────────────────────────

export async function createEnrollment(input: {
  profile_id: string
  book_id: number
  order_id: string
}): Promise<StoreEnrollment> {
  const sb = getServiceClient()
  const { data, error } = await sb
    .from('store_enrollments')
    .insert({
      profile_id: input.profile_id,
      book_id:    input.book_id,
      order_id:   input.order_id,
    })
    .select()
    .single()
  if (error) throw new Error(`createEnrollment: ${error.message}`)
  return data as StoreEnrollment
}

// ── Save Order Paid (update + enroll + outbox) ────────────────

export async function saveOrderPaid(
  order: StoreOrder,
  chargeId: string,
): Promise<void> {
  const sb = getServiceClient()

  // 1. mark paid
  const { error: e1 } = await sb
    .from('store_orders')
    .update({ status: 'paid', paid_at: new Date().toISOString() })
    .eq('id', order.id)
  if (e1) throw new Error(`saveOrderPaid/update: ${e1.message}`)

  // 2. enroll (ignore duplicate)
  const { error: e2 } = await sb
    .from('store_enrollments')
    .insert({ profile_id: order.profile_id, book_id: order.book_id, order_id: order.id })
  if (e2 && e2.code !== '23505') throw new Error(`saveOrderPaid/enroll: ${e2.message}`)

  // 3. outbox
  const { error: e3 } = await sb
    .from('store_outbox')
    .insert({
      order_id:   order.id,
      event_type: 'order.paid',
      payload: { profile_id: order.profile_id, book_id: order.book_id, charge_id: chargeId },
    })
  if (e3) throw new Error(`saveOrderPaid/outbox: ${e3.message}`)
}

// ── Outbox ────────────────────────────────────────────────────

export async function addOutboxEvent(input: {
  order_id: string
  event_type: string
  payload: Record<string, unknown>
}): Promise<void> {
  const sb = getServiceClient()
  const { error } = await sb
    .from('store_outbox')
    .insert({
      order_id:   input.order_id,
      event_type: input.event_type,
      payload:    input.payload,
    })
  if (error) throw new Error(`addOutboxEvent: ${error.message}`)
}
