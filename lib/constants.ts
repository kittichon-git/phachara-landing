export const BUSINESS = {
  type: "juristic",
  name: "กิตติชน สนิทเชื้อ",
  nameEn: "Phachara 1972 Co., Ltd.",
  displayName: "phachara.com",
  address: "999/58 หมู่ 9 pshome2 ต.บ้านเป้ด อ.เมือง จ.ขอนแก่น 40000",
  email: "phachara.elearning@gmail.com",
  phone: "0911096554",
  taxId: "0405558002219",
  vatRegistered: true,
  url: "https://phachara.com",
} as const

export const COURSE = {
  title: "แค่เปลี่ยนคำ ก็ทำเงิน",
  subtitle: "บทเรียนเขียนคำขายของออนไลน์ให้คนกดซื้อ",
  price: 990,
  anchorPrice: 1990,
  currency: "THB",
  status: "coming_soon",
} as const

export const INSTRUCTOR = {
  name: "พชร",
  title: "นักเขียนคำขายของออนไลน์",
  bio: "ผู้เชี่ยวชาญด้านการเขียนคำขายของออนไลน์ มีประสบการณ์ช่วยให้ธุรกิจออนไลน์เพิ่ม conversion ด้วยพลังของคำพูดที่ถูกต้อง",
} as const

/** LINE OA deep link — append UTM per call-to-action position */
const LINE_BASE = "https://lin.ee/049vlbwy"

export type LinePosition = "hero" | "s3" | "s4" | "s9" | "sticky" | "curriculum"

export function lineUrl(position: LinePosition): string {
  return `${LINE_BASE}?utm_source=sp&utm_medium=sp_${position}`
}
