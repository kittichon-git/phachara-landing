import type { Metadata } from 'next'
import { Kanit, Bai_Jamjuree } from 'next/font/google'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { MetaPixel } from '@/components/analytics/MetaPixel'
import { TikTokPixel } from '@/components/analytics/TikTokPixel'
import { MicrosoftClarity } from '@/components/analytics/MicrosoftClarity'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bai',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'แค่เปลี่ยนคำ ก็ทำเงิน — หลักสูตรการใช้คำเพิ่มยอดขาย | phachara.com',
  description: 'เปลี่ยนคำในโพสต์ขายของให้คนหยุดดูและตัดสินใจซื้อ — บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" 7 ภาค 24 บท เพิ่มยอดขายบน Facebook, IG, TikTok, LINE โดยไม่ต้องเป็นนักเขียน',
  metadataBase: new URL('https://phachara.com'),
  openGraph: {
    title: 'แค่เปลี่ยนคำ ก็ทำเงิน | phachara.com',
    description: 'บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" 7 ภาค 24 บท — เพิ่มยอดขายออนไลน์',
    url: 'https://phachara.com',
    siteName: 'phachara.com',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'แค่เปลี่ยนคำ ก็ทำเงิน', description: 'หลักสูตรการใช้คำเพิ่มยอดขายออนไลน์' },
  alternates: { canonical: 'https://phachara.com' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${kanit.variable} ${baiJamjuree.variable}`}>
      <head>
        {/* GA4 stub — inline, runs before hydration so window.gtag is ready for useEffect events */}
        {GA_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
            }}
          />
        )}
      </head>
      <body className="antialiased">
        <a href="#hero" className="skip-link">ข้ามไปยังเนื้อหา</a>
        {children}
        <GoogleAnalytics />
        <MetaPixel />
        <TikTokPixel />
        <MicrosoftClarity />
      </body>
    </html>
  )
}
