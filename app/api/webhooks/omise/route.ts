/**
 * POST /api/webhooks/omise
 * DEBUG MODE — test timestamp-based signing variants
 */

import crypto from 'crypto'

export async function POST(request: Request) {
  const sigHeader = request.headers.get('omise-signature') || ''
  const timestamp = request.headers.get('omise-signature-timestamp') || ''
  const rawBody = await request.text()
  const sigs = sigHeader.split(',').map(s => s.trim())
  const secret = process.env.OMISE_WEBHOOK_SECRET!
  const secretBytes = Buffer.from(secret, 'base64')

  console.log('Timestamp:', timestamp)
  console.log('Sig #1:', sigs[0])
  console.log('Sig #2:', sigs[1])

  const variants: Record<string, string> = {
    // === timestamp + body combinations with string secret ===
    'T1: secret + timestamp+body':
      crypto.createHmac('sha256', secret).update(timestamp + rawBody).digest('hex'),
    'T2: secret + timestamp.body':
      crypto.createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex'),
    'T3: secret + timestamp\\n+body':
      crypto.createHmac('sha256', secret).update(`${timestamp}\n${rawBody}`).digest('hex'),
    'T4: secret + timestamp:body':
      crypto.createHmac('sha256', secret).update(`${timestamp}:${rawBody}`).digest('hex'),
    'T5: secret + body+timestamp':
      crypto.createHmac('sha256', secret).update(rawBody + timestamp).digest('hex'),

    // === timestamp + body with decoded secret ===
    'U1: decoded + timestamp+body':
      crypto.createHmac('sha256', secretBytes).update(timestamp + rawBody).digest('hex'),
    'U2: decoded + timestamp.body':
      crypto.createHmac('sha256', secretBytes).update(`${timestamp}.${rawBody}`).digest('hex'),
    'U3: decoded + timestamp\\n+body':
      crypto.createHmac('sha256', secretBytes).update(`${timestamp}\n${rawBody}`).digest('hex'),
    'U4: decoded + timestamp:body':
      crypto.createHmac('sha256', secretBytes).update(`${timestamp}:${rawBody}`).digest('hex'),

    // === Stripe-like: signed_payload = timestamp + . + body ===
    'V1: secret + signed_payload (string)':
      crypto.createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex'),
    'V2: decoded + signed_payload (decoded)':
      crypto.createHmac('sha256', secretBytes).update(`${timestamp}.${rawBody}`).digest('hex'),
  }

  for (const [label, computed] of Object.entries(variants)) {
    const m1 = computed === sigs[0]
    const m2 = computed === sigs[1]
    console.log(`${m1 || m2 ? '✅' : '❌'} ${label}${m1 ? ' =Sig#1' : m2 ? ' =Sig#2' : ''}`)
    console.log(`     ${computed}`)
  }

  console.log('=== END DEBUG ===')

  return new Response('debug mode - all events accepted', { status: 200 })
}
