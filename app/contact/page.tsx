import type { Metadata } from 'next'
import { BUSINESS, COURSE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ติดต่อเรา | phachara.com',
  description: 'ติดต่อทีมงาน phachara.com สำหรับคำถามเกี่ยวกับคอร์สเรียนหรือบริการต่างๆ',
  alternates: { canonical: 'https://phachara.com/contact' },
}

export default function ContactPage() {
  const subject = encodeURIComponent(`สอบถามข้อมูลคอร์ส ${COURSE.title}`)
  const href = `mailto:${BUSINESS.email}?subject=${subject}`

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">ติดต่อเรา</h1>
          <p className="text-gray-400 mt-2">เราพร้อมช่วยเหลือทุกคำถาม ตอบกลับภายใน 1 วันทำการ</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <section aria-labelledby="company-info">
            <h2 id="company-info" className="text-xl font-bold text-gray-900 mb-6">ข้อมูลบริษัท</h2>
            <address className="not-italic space-y-5">
              {/* Company Name */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                  🏢
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">ชื่อบริษัท</p>
                  <p className="text-gray-900 font-semibold">{BUSINESS.nameEn}</p>
                  <p className="text-gray-500 text-sm">{BUSINESS.name}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">ที่อยู่</p>
                  <p className="text-gray-700 leading-relaxed">{BUSINESS.address}</p>
                </div>
              </div>

              {/* Tax ID */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                  🧾
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">เลขผู้เสียภาษี</p>
                  <p className="text-gray-700 font-mono">{BUSINESS.taxId}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">อีเมล</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline transition-colors"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 text-xl" aria-hidden="true">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">โทรศัพท์</p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </address>
          </section>

          {/* Contact CTA */}
          <section aria-labelledby="contact-cta">
            <h2 id="contact-cta" className="text-xl font-bold text-gray-900 mb-6">ส่งข้อความหาเรา</h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">สอบถามเรื่องคอร์สเรียน</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                มีคำถามเกี่ยวกับคอร์ส &ldquo;{COURSE.title}&rdquo; หรือต้องการข้อมูลเพิ่มเติม
                ส่งอีเมลมาหาเราได้เลย
              </p>
              <a
                href={href}
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <span aria-hidden="true">✉️</span>
                ส่งอีเมล
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">เวลาทำการ</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex justify-between">
                  <span>จันทร์ – ศุกร์</span>
                  <span className="font-medium">09:00 – 18:00 น.</span>
                </li>
                <li className="flex justify-between">
                  <span>เสาร์ – อาทิตย์</span>
                  <span className="font-medium text-gray-400">ปิดทำการ</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-4">
                * ตอบกลับอีเมลภายใน 1 วันทำการ
              </p>
            </div>
          </section>
        </div>

        {/* Response time notice */}
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
          <span className="text-2xl flex-shrink-0" aria-hidden="true">💡</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">เคล็ดลับ</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              หากต้องการคำตอบเร็วขึ้น กรุณาระบุชื่อ, อีเมลที่ซื้อ, และรายละเอียดคำถามให้ชัดเจน
              ทีมงานจะสามารถช่วยเหลือท่านได้รวดเร็วยิ่งขึ้น
            </p>
          </div>
        </div>
      </main>

      {/* Footer nav */}
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/refund" className="text-gray-500 hover:text-gray-700">คืนเงิน</a>
          <a href="/terms" className="text-gray-500 hover:text-gray-700">ข้อกำหนด</a>
          <a href="/privacy" className="text-gray-500 hover:text-gray-700">ความเป็นส่วนตัว</a>
        </div>
      </div>
    </div>
  )
}
