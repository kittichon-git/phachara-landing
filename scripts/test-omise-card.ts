import 'dotenv/config'
import Omise from 'omise'

const orderId = process.argv[2]
if (!orderId) {
  console.error('Usage: npx tsx scripts/test-omise-card.ts <order_uuid>')
  process.exit(1)
}

const omise = Omise({
  publicKey: process.env.OMISE_PUBLIC_KEY!,
  secretKey: process.env.OMISE_SECRET_KEY!,
})

async function main() {
  // 1. Create card token (test card)
  const token = await omise.tokens.create({
    card: {
      name: 'Test User',
      number: '4242424242424242',
      expiration_month: 12,
      expiration_year: 2030,
      security_code: '123',
    },
  })
  console.log('Token:', token.id)

  // 2. Create charge with card → จะ successful ทันที
  const charge = await omise.charges.create({
    amount: 99000,
    currency: 'thb',
    card: token.id,
    return_uri: 'https://www.phachara.com/success',
    metadata: { order_id: orderId },
  })
  console.log('Charge:', charge.id)
  console.log('Status:', charge.status)
  console.log('Paid:', charge.paid)
  console.log('Metadata:', JSON.stringify(charge.metadata))
}

main().catch(err => {
  console.error('Error:', err.message)
  if (err.code) console.error('Code:', err.code)
  process.exit(1)
})
