export const BUSINESS = {
  nameEn: 'Phachara 1972 Co., Ltd.',
  name: 'บริษัท พชร 1972 จำกัด',
  displayName: 'phachara.com',
  email: 'phachara.elearning@gmail.com',
  taxId: '0405558002219',
  url: 'https://phachara.com',
  address: '',
  phone: '',
} as const

export const INSTRUCTOR = {
  name: 'พชร',
  title: 'ผู้เชี่ยวชาญการเขียนคำขาย',
  bio: 'ประสบการณ์เขียนคำขายกว่า 3 ปี ผ่านโพสต์มาแล้วกว่า 500 ชิ้น ช่วยเพิ่ม Conversion 2–5 เท่าให้แบรนด์ไทย',
} as const

export const COURSE = {
  title: 'แค่เปลี่ยนคำ ก็ทำเงิน',
  subtitle: 'บทเรียนเขียนคำขายของออนไลน์ให้คนกดซื้อ',
  price: 890,
  anchorPrice: 2490,
  currency: 'THB',
} as const

const LINE_BASE = 'https://lin.ee/oMmZLf7Z'
export type LinePosition = 'hero' | 's3' | 's4' | 's5' | 's7' | 's10' | 'sticky' | 'nav' | 'offer'

export function lineUrl(position: LinePosition): string {
  return `${LINE_BASE}?utm_source=sp&utm_medium=sp_${position}`
}
