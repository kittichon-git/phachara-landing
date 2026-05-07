import Omise from 'omise'
import { readFileSync } from 'fs'

// โหลด .env.local
const env = readFileSync('.env.local', 'utf-8')
  .split('\n')
  .filter(l => l.includes('='))
  .reduce((acc, l) => {
    const [k, ...v] = l.split('=')
    acc[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '')
    return acc
  }, {} as Record<string, string>)

const omise = Omise({ secretKey: env.OMISE_SECRET_KEY, publicKey: env.OMISE_PUBLIC_KEY })

async function main() {
  // 1. สร้าง PromptPay source
  console.log('🔵 Creating PromptPay source...')
  const source = await omise.sources.create({
    amount: 99000,        // 990 บาท
    currency: 'THB',
    type: 'promptpay',
  })
  console.log('Source ID:', source.id)

  // 2. สร้าง charge จาก source
  console.log('\n🔵 Creating charge...')
  const charge = await omise.charges.create({
    amount: 99000,
    currency: 'THB',
    source: source.id,
    return_uri: 'https://phachara.com/success',
    description: 'Test charge for webhook',
  })
  console.log('Charge ID:', charge.id)
  console.log('Status:', charge.status)
  console.log('Authorize URI:', charge.authorize_uri)
  console.log('\n✅ เปิด Authorize URI ในเบราว์เซอร์เพื่อ simulate payment')
}

main().catch(console.error)
