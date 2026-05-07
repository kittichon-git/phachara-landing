/**
 * lib/payments/omise.ts — Omise payment wrapper
 * Server-side only — ใช้ OMISE_SECRET_KEY
 */


// ── Types ─────────────────────────────────────────────────────

export interface OmiseCharge {
  id: string
  object: 'charge'
  status: 'pending' | 'successful' | 'failed' | 'reversed' | 'expired'
  amount: number
  currency: string
  authorize_uri: string | null
  return_uri: string | null
  source: OmiseSource | null
  metadata: Record<string, unknown>
  created_at: string
}

export interface OmiseSource {
  id: string
  object: 'source'
  type: string
  amount: number
  currency: string
  scannable_code?: { image: { download_uri: string } }
}

export interface CreateChargeInput {
  amount: number        // satang
  currency?: string     // default 'thb'
  source?: string       // token id หรือ source id
  returnUri?: string
  metadata?: Record<string, unknown>
  description?: string
}

// ── Client ────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-require-imports
const OmiseLib = require('omise')

function createOmiseClient() {
  const secretKey = process.env.OMISE_SECRET_KEY
  const publicKey = process.env.OMISE_PUBLIC_KEY
  if (!secretKey) throw new Error('Missing OMISE_SECRET_KEY')
  // publicKey จำเป็นสำหรับ sources.create (Source resource ใช้ publicKey)
  return OmiseLib({ secretKey, publicKey, omiseVersion: '2019-05-29' }) as Record<string, Record<string, (...args: unknown[]) => unknown>>
}

// ── Promisify helper ──────────────────────────────────────────

function call<T>(fn: (...args: unknown[]) => unknown, ...args: unknown[]): Promise<T> {
  return new Promise((resolve, reject) => {
    fn(...args, (err: Error | null, data: T) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

// ── Source (PromptPay) ────────────────────────────────────────

export async function createPromptPaySource(amount: number): Promise<OmiseSource> {
  const omise = createOmiseClient()
  return call<OmiseSource>(
    omise.sources.create.bind(omise.sources),
    { type: 'promptpay', amount, currency: 'thb' }
  )
}

// ── Charge ────────────────────────────────────────────────────

export async function createCharge(input: CreateChargeInput): Promise<OmiseCharge> {
  const omise = createOmiseClient()
  return call<OmiseCharge>(
    omise.charges.create.bind(omise.charges),
    {
      amount:      input.amount,
      currency:    input.currency ?? 'thb',
      source:      input.source,
      return_uri:  input.returnUri,
      metadata:    input.metadata ?? {},
      description: input.description,
    }
  )
}

export async function retrieveCharge(chargeId: string): Promise<OmiseCharge> {
  const omise = createOmiseClient()
  return call<OmiseCharge>(
    omise.charges.retrieve.bind(omise.charges),
    chargeId
  )
}
