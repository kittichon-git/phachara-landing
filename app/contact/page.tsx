import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/constants'
import { lineUrl } from '@/lib/constants'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ติดต่อเรา | phachara.com',
  description: 'ติดต่อทีมงาน phachara.com — แอด LINE เพื่อรับ 3 บทแรกฟรี หรืออีเมลหาเราได้ตลอด',
  alternates: { canonical: 'https://phachara.com/contact' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">ติดต่อเรา</h1>
          <p className="text-gray-400 mt-2">ตอบกลับภายใน 1 วันทำการ</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 flex-1">
        {/* Primary: LINE CTA */}
        <div className="bg-[#f0fdf4] border-2 border-[#06C755] rounded-3xl p-8 text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">💬</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">วิธีเร็วที่สุด — แอด LINE OA</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            ทักมาใน LINE ได้เลย — รับ 3 บทแรกฟรีพร้อมกัน
          </p>
          <a
            href={lineUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a547] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-150 text-lg"
          >
            🟢 แอด LINE OA →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <section aria-labelledby="company-info">
            <h2 id="company-info" className="text-xl font-bold text-gray-900 mb-6">ข้อมูลบริษัท</h2>
            <address className="not-italic space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-xl" aria-hidden="true">🏢</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">ชื่อบริษัท</p>
                  <p className="text-gray-900 font-semibold">{BUSINESS.nameEn}</p>
                </div>
              </div>
<div className="flex items-start gap-4">
                <span className="text-xl" aria-hidden="true">🧾</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">เลขผู้เสียภาษี</p>
                  <p className="text-gray-700 font-mono text-sm">{BUSINESS.taxId}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl" aria-hidden="true">✉️</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">อีเมล</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-yellow-600 font-semibold hover:underline text-sm"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </address>
          </section>

          {/* Hours + links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">เวลาทำการ</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex justify-between">
                  <span>จันทร์ – ศุกร์</span>
                  <span className="font-medium">09:00 – 16:00 น.</span>
                </li>
                <li className="flex justify-between">
                  <span>เสาร์ – อาทิตย์</span>
                  <span className="font-medium text-gray-400">ปิดทำการ</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-4">* ตอบกลับอีเมลภายใน 1 วันทำการ</p>
            </div>

            <nav aria-label="ลิงก์ที่เกี่ยวข้อง">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">ลิงก์ที่เกี่ยวข้อง</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/legal/refund', label: 'นโยบายการคืนเงิน' },
                  { href: '/legal/terms', label: 'ข้อกำหนดการใช้งาน' },
                  { href: '/legal/privacy', label: 'นโยบายความเป็นส่วนตัว' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-yellow-600 hover:underline">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
