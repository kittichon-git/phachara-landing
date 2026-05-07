/**
 * POST /api/webhooks/omise
 * DEBUG MODE — enumerate 12 HMAC variants to find correct verify method
 */

import crypto from 'crypto'

export async function POST(request: Request) {
  const rawBody = await request.text()
  const sigHeader = request.headers.get('omise-signature') || ''
  const secret = process.env.OMISE_WEBHOOK_SECRET!
  const secretKey = process.env.OMISE_SECRET_KEY!
  const secretBytes = Buffer.from(secret, 'base64')

  const sigs = sigHeader.split(',').map(s => s.trim())

  const variants: Record<string, string> = {
    // === SECRET formats ===
    'A1: webhook_secret str + body':
      crypto.createHmac('sha256', secret).update(rawBody).digest('hex'),
    'A2: webhook_secret base64-decoded + body':
      crypto.createHmac('sha256', secretBytes).update(rawBody).digest('hex'),

    // === SECRET_KEY (skey_test_xxx) ===
    'B1: SECRET_KEY + body':
      crypto.createHmac('sha256', secretKey).update(rawBody).digest('hex'),

    // === BODY transforms with webhook_secret string ===
    'C1: secret + body.trim()':
      crypto.createHmac('sha256', secret).update(rawBody.trim()).digest('hex'),
    'C2: secret + body+\\n':
      crypto.createHmac('sha256', secret).update(rawBody + '\n').digest('hex'),
    'C3: secret + compact JSON':
      crypto.createHmac('sha256', secret).update(JSON.stringify(JSON.parse(rawBody))).digest('hex'),
    'C4: secret + body Buffer utf8':
      crypto.createHmac('sha256', secret).update(Buffer.from(rawBody, 'utf8')).digest('hex'),

    // === BODY transforms with decoded secret ===
    'D1: decoded + body.trim()':
      crypto.createHmac('sha256', secretBytes).update(rawBody.trim()).digest('hex'),
    'D2: decoded + body+\\n':
      crypto.createHmac('sha256', secretBytes).update(rawBody + '\n').digest('hex'),
    'D3: decoded + compact JSON':
      crypto.createHmac('sha256', secretBytes).update(JSON.stringify(JSON.parse(rawBody))).digest('hex'),

    // === Combination with event id ===
    'E1: secret + eventId.body': (() => {
      const eventId = JSON.parse(rawBody).id
      return crypto.createHmac('sha256', secret).update(`${eventId}.${rawBody}`).digest('hex')
    })(),

    // === SHA256 only (no HMAC) ===
    'F1: sha256(secret + body)':
      crypto.createHash('sha256').update(secret + rawBody).digest('hex'),
  }

  console.log('=== SIGNATURE COMPARISON ===')
  console.log('Sig #1:', sigs[0])
  console.log('Sig #2:', sigs[1])
  console.log()
  console.log('Body bytes (hex first 40):', Buffer.from(rawBody).toString('hex').slice(0, 40))
  console.log('Body bytes (hex last 40):', Buffer.from(rawBody).toString('hex').slice(-40))
  console.log('Body length:', rawBody.length)
  console.log()

  let matched = false
  for (const [label, computed] of Object.entries(variants)) {
    const isMatch1 = computed === sigs[0]
    const isMatch2 = computed === sigs[1]
    const mark = isMatch1 || isMatch2 ? '✅' : '❌'
    const which = isMatch1 ? ' (=Sig#1)' : isMatch2 ? ' (=Sig#2)' : ''
    console.log(`${mark} ${label}${which}`)
    console.log(`     ${computed}`)
    if (isMatch1 || isMatch2) matched = true
  }

  if (!matched) {
    console.log('❌ NO VARIANT MATCHED — likely body byte mismatch')
    console.log('All headers:', Object.fromEntries(request.headers))
  }

  console.log('=== END DEBUG ===')

  return new Response('debug mode - all events accepted', { status: 200 })
}
