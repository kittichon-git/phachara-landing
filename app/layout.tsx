import type { Metadata } from 'next'
import { Noto_Sans_Thai_Looped, Noto_Serif_Thai } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_Thai_Looped({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'แค่เปลี่ยนคำ ก็ทำเงิน — คอร์ส Copywriting 24 บท | phachara.com',
  description: 'เรียนรู้ framework เขียนขายออนไลน์ให้คนกดซื้อ 24 บท + Swipe File + Template แอด LINE รับ 3 บทแรกฟรี',
  metadataBase: new URL('https://phachara.com'),
  openGraph: {
    title: 'แค่เปลี่ยนคำ ก็ทำเงิน | phachara.com',
    description: 'เรียนรู้ framework เขียนขายออนไลน์ให้คนกดซื้อ 24 บท + Swipe File + Template',
    url: 'https://phachara.com',
    siteName: 'phachara.com',
    locale: 'th_TH',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'แค่เปลี่ยนคำ ก็ทำเงิน',
    description: 'เรียนรู้ framework เขียนขายออนไลน์ให้คนกดซื้อ',
  },
  alternates: { canonical: 'https://phachara.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-[family-name:var(--font-sans)] bg-white text-gray-900 antialiased text-base">
        {children}
      </body>
    </html>
  )
}
