/**
 * POST /api/webhooks/omise
 * DEBUG MODE — inspect secret bytes + test clean variants
 */

import crypto from 'crypto'

export async function POST(request: Request) {
  const sigHeader = request.headers.get('omise-signature') || ''
  const timestamp = request.headers.get('omise-signature-timestamp') || ''
  const rawBody = await request.text()
  const sigs = sigHeader.split(',').map(s => s.trim())

  const rawSecret = process.env.OMISE_WEBHOOK_SECRET || ''
  const trimmedSecret = rawSecret.trim()
  const cleanSecret = rawSecret.replace(/\s+/g, '')

  console.log('Timestamp:', timestamp)
  console.log('Sig #1:', sigs[0])
  console.log('Sig #2:', sigs[1])

  console.log('Raw secret length:', rawSecret.length)
  console.log('Raw secret hex:', Buffer.from(rawSecret).toString('hex'))
  console.log('Trimmed length:', trimmedSecret.length)
  console.log('Has newline:', rawSecret.includes('\n'))
  console.log('Has carriage return:', rawSecret.includes('\r'))
  console.log('Has tab:', rawSecret.includes('\t'))
  console.log('Has space:', rawSecret.includes(' '))

  const sBytes_raw = Buffer.from(rawSecret, 'base64')
  const sBytes_trim = Buffer.from(trimmedSecret, 'base64')
  const sBytes_clean = Buffer.from(cleanSecret, 'base64')

  console.log('Decoded raw bytes length:', sBytes_raw.length)
  console.log('Decoded trim bytes length:', sBytes_trim.length)
  console.log('Decoded clean bytes length:', sBytes_clean.length)
  console.log('Decoded raw hex:', sBytes_raw.toString('hex'))
  console.log('Decoded trim hex:', sBytes_trim.toString('hex'))
  console.log('Decoded clean hex:', sBytes_clean.toString('hex'))

  const signedPayload = `${timestamp}.${rawBody}`

  const variants: Record<string, string> = {
    'X1: official with raw':
      crypto.createHmac('sha256', sBytes_raw).update(signedPayload).digest('hex'),
    'X2: official with trimmed':
      crypto.createHmac('sha256', sBytes_trim).update(signedPayload).digest('hex'),
    'X3: official with clean (no whitespace)':
      crypto.createHmac('sha256', sBytes_clean).update(signedPayload).digest('hex'),
    'X4: official with trimmed timestamp':
      crypto.createHmac('sha256', sBytes_trim).update(`${timestamp.trim()}.${rawBody}`).digest('hex'),
  }

  for (const [label, computed] of Object.entries(variants)) {
    const m1 = computed === sigs[0]
    const m2 = computed === sigs[1]
    console.log(`${m1 || m2 ? '✅' : '❌'} ${label}${m1 ? ' =Sig#1' : m2 ? ' =Sig#2' : ''}`)
    console.log(`     ${computed}`)
  }

  // Bonus: hardcode exact secret to eliminate env issue
  const HARDCODED = 'mKBMc+b6zCp6IVHRem+8iuMm6gdgj3iiidJClgxCv20='
  const hardBytes = Buffer.from(HARDCODED, 'base64')
  const hardSig = crypto.createHmac('sha256', hardBytes).update(signedPayload).digest('hex')
  console.log('Y1: HARDCODED secret:', hardSig)
  console.log('Y1 match Sig#1:', hardSig === sigs[0])
  console.log('Y1 match Sig#2:', hardSig === sigs[1])

  console.log('=== END DEBUG ===')

  return new Response('debug mode - all events accepted', { status: 200 })
}
