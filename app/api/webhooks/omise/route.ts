/**
 * POST /api/webhooks/omise
 * DEBUG MODE — log ทุกอย่างเพื่อหา verify method ที่ถูก
 */

import crypto from 'crypto'

export async function POST(request: Request) {
  const rawBody = await request.text()
  const sigHeader = request.headers.get('omise-signature') || ''
  const secret = process.env.OMISE_WEBHOOK_SECRET || ''

  console.log('=== WEBHOOK DEBUG ===')
  console.log('Header (Omise-Signature):', sigHeader)
  console.log('Header length:', sigHeader.length)
  console.log('Raw body length:', rawBody.length)
  console.log('Raw body first 200:', rawBody.slice(0, 200))
  console.log('Secret length:', secret.length)
  console.log('Secret first 4:', secret.slice(0, 4))
  console.log('Secret last 4:', secret.slice(-4))

  // วิธี 1: JWS detached (header..signature)
  const jwsParts = sigHeader.split('.')
  console.log('JWS parts count:', jwsParts.length)
  if (jwsParts.length === 3) {
    const [protectedHeader, , signature] = jwsParts
    const bodyB64 = Buffer.from(rawBody).toString('base64url')
    const signingInput = `${protectedHeader}.${bodyB64}`
    const expected1 = crypto.createHmac('sha256', secret).update(signingInput).digest('base64url')
    console.log('JWS expected (base64url):', expected1)
    console.log('JWS received signature:', signature)
    console.log('JWS match:', expected1 === signature)
  }

  // วิธี 2: HMAC SHA256 hex ตรง ๆ บน raw body
  const expected2 = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')
  console.log('Plain HMAC hex:', expected2)

  // วิธี 3: HMAC SHA256 base64 ตรง ๆ
  const expected3 = crypto.createHmac('sha256', secret).update(rawBody).digest('base64')
  console.log('Plain HMAC base64:', expected3)

  // วิธี 4: decode secret จาก base64 ก่อนใช้ (secret มี = ลงท้าย → น่าจะเป็น base64)
  try {
    const secretBytes = Buffer.from(secret, 'base64')
    const expected4 = crypto.createHmac('sha256', secretBytes).update(rawBody).digest('hex')
    console.log('Decoded secret HMAC hex:', expected4)

    if (jwsParts.length === 3) {
      const [protectedHeader, , signature] = jwsParts
      const bodyB64 = Buffer.from(rawBody).toString('base64url')
      const signingInput = `${protectedHeader}.${bodyB64}`
      const expected5 = crypto.createHmac('sha256', secretBytes).update(signingInput).digest('base64url')
      console.log('JWS+decoded secret expected:', expected5)
      console.log('JWS+decoded match:', expected5 === signature)
    }
  } catch (e) {
    console.log('Decode secret failed:', e)
  }

  console.log('=== END DEBUG ===')

  return new Response('debug mode - all events accepted', { status: 200 })
}
