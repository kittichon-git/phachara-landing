import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'แค่เปลี่ยนคำ ก็ทำเงิน | phachara.com',
  description: 'คอร์สเขียนคำขายของออนไลน์ให้คนกดซื้อ เพิ่ม conversion rate 2-5 เท่า ด้วยเทคนิค copywriting ที่ใช้ได้จริง',
  metadataBase: new URL('https://phachara.com'),
  openGraph: {
    title: 'แค่เปลี่ยนคำ ก็ทำเงิน | phachara.com',
    description: 'คอร์สเขียนคำขายของออนไลน์ให้คนกดซื้อ',
    url: 'https://phachara.com',
    siteName: 'phachara.com',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'แค่เปลี่ยนคำ ก็ทำเงิน',
    description: 'คอร์สเขียนคำขายของออนไลน์ให้คนกดซื้อ',
  },
  alternates: { canonical: 'https://phachara.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="font-[family-name:var(--font-noto)] bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
