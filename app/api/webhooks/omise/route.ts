/**
 * POST /api/webhooks/omise
 * DEBUG MODE — arrayBuffer vs text, node crypto vs subtle
 */

import crypto from 'crypto'

declare const EdgeRuntime: string | undefined

export async function POST(request: Request) {
  // ใช้ arrayBuffer แทน text — ได้ raw bytes ตรงจาก wire
  const arrayBuf = await request.arrayBuffer()
  const bodyBuffer = Buffer.from(arrayBuf)

  const sigHeader = request.headers.get('omise-signature') || ''
  const timestamp = request.headers.get('omise-signature-timestamp') || ''
  const sigs = sigHeader.split(',').map(s => s.trim())

  const secretBytes = Buffer.from(process.env.OMISE_WEBHOOK_SECRET!, 'base64')

  // วิธี 1: text() แบบเดิม (เพื่อเทียบ)
  const bodyString = bodyBuffer.toString('utf8')
  const sig_text = crypto.createHmac('sha256', secretBytes)
    .update(`${timestamp}.${bodyString}`)
    .digest('hex')

  // วิธี 2: ใช้ Buffer concat ทั้งหมด — ไม่มี string conversion เลย
  const prefix = Buffer.from(`${timestamp}.`, 'utf8')
  const signedPayloadBuffer = Buffer.concat([prefix, bodyBuffer])
  const sig_buffer = crypto.createHmac('sha256', secretBytes)
    .update(signedPayloadBuffer)
    .digest('hex')

  // วิธี 3: เปรียบเทียบ body string vs buffer
  const stringBytes = Buffer.from(bodyString, 'utf8')
  const bytesMatch = stringBytes.equals(bodyBuffer)

  console.log('=== ARRAYBUFFER DEBUG ===')
  console.log('arrayBuffer length:', bodyBuffer.length)
  console.log('toString utf8 → re-encode length:', stringBytes.length)
  console.log('Body bytes identical after roundtrip?:', bytesMatch)
  console.log('Body first 60 hex (raw):', bodyBuffer.slice(0, 60).toString('hex'))
  console.log('Body last 60 hex (raw):', bodyBuffer.slice(-60).toString('hex'))
  console.log()
  console.log('Sig#1:', sigs[0])
  console.log('Sig#2:', sigs[1])
  console.log()
  console.log('Method 1 (text):  ', sig_text, sig_text === sigs[0] ? '=Sig#1' : sig_text === sigs[1] ? '=Sig#2' : '❌')
  console.log('Method 2 (buffer):', sig_buffer, sig_buffer === sigs[0] ? '=Sig#1' : sig_buffer === sigs[1] ? '=Sig#2' : '❌')

  // วิธี 4: Web Crypto API (ถ้า runtime เป็น edge)
  try {
    const cryptoSubtle = globalThis.crypto.subtle
    const key = await cryptoSubtle.importKey(
      'raw', secretBytes,
      { name: 'HMAC', hash: 'SHA-256' },
      false, ['sign']
    )
    const signature = await cryptoSubtle.sign('HMAC', key, signedPayloadBuffer)
    const sig_subtle = Buffer.from(signature).toString('hex')
    console.log('Method 3 (subtle):', sig_subtle, sig_subtle === sigs[0] ? '=Sig#1' : sig_subtle === sigs[1] ? '=Sig#2' : '❌')
  } catch (e) {
    console.log('Subtle error:', e)
  }

  console.log('Runtime:', typeof EdgeRuntime !== 'undefined' ? 'edge' : 'nodejs')
  console.log('=== END ===')

  return new Response('ok', { status: 200 })
}
