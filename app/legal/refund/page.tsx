import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'นโยบายการคืนเงิน | phachara.com',
  description: 'นโยบายการคืนเงินของ phachara.com คืนเงิน 100% ภายใน 7 วัน ตามเงื่อนไขที่กำหนด',
  alternates: { canonical: 'https://phachara.com/legal/refund' },
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">นโยบายการคืนเงิน</h1>
          <p className="text-gray-400 mt-2 text-sm">อัปเดตล่าสุด: 8 พฤษภาคม 2568</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            {BUSINESS.nameEn} (&ldquo;บริษัท&rdquo;) มุ่งมั่นที่จะมอบประสบการณ์การเรียนรู้ที่ดีที่สุด
            หากท่านไม่พอใจกับคอร์สเรียน เรามีนโยบายคืนเงินที่ชัดเจนและเป็นธรรมดังต่อไปนี้
          </p>

          {/* Section 1 */}
          <section className="mb-10" aria-labelledby="eligibility">
            <h2 id="eligibility" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              สิทธิ์ในการขอคืนเงิน (Eligibility)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ผู้ซื้อสามารถขอคืนเงินได้หากซื้อผ่านช่องทางที่บริษัทกำหนด และยังไม่ได้ละเมิดข้อกำหนดการใช้งาน
              โดยบัญชีผู้ใช้ต้องยังคงอยู่ในสถานะปกติ ไม่ถูกระงับหรือยกเลิก
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10" aria-labelledby="time-window">
            <h2 id="time-window" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              ระยะเวลาการขอคืนเงิน (Time Window)
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-gray-700 leading-relaxed font-medium">
                ท่านสามารถขอคืนเงินได้ภายใน <strong>7 วันนับจากวันที่ซื้อ</strong> เท่านั้น
                คำขอที่ยื่นหลังจากระยะเวลาดังกล่าวจะไม่ได้รับการพิจารณา
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10" aria-labelledby="conditions">
            <h2 id="conditions" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              เงื่อนไขการคืนเงิน (Conditions)
            </h2>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1 flex-shrink-0">✓</span>
                ท่านเปิดบทเรียนไม่เกิน 20% ของเนื้อหาทั้งหมด
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1 flex-shrink-0">✓</span>
                ไม่ได้ดาวน์โหลดเนื้อหาหรือ template ที่มีลิขสิทธิ์ออกไปแล้ว
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1 flex-shrink-0">✓</span>
                ยื่นคำขอพร้อมเหตุผลประกอบผ่านช่องทางอีเมลอย่างเป็นทางการ
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10" aria-labelledby="process">
            <h2 id="process" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              ขั้นตอนการขอคืนเงิน (Process)
            </h2>
            <ol className="text-gray-600 space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-bold text-gray-900 flex-shrink-0">ขั้นที่ 1:</span>
                <span>ส่งอีเมลมาที่ <a href={`mailto:${BUSINESS.email}`} className="text-yellow-600 font-semibold hover:underline">{BUSINESS.email}</a> พร้อมระบุ: ชื่อ-นามสกุล, อีเมลที่ซื้อ, วันที่ซื้อ, และเหตุผลในการขอคืนเงิน</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-gray-900 flex-shrink-0">ขั้นที่ 2:</span>
                <span>ทีมงานจะตรวจสอบและตอบกลับภายใน <strong>3 วันทำการ</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-gray-900 flex-shrink-0">ขั้นที่ 3:</span>
                <span>หากได้รับการอนุมัติ เงินจะถูกคืนเข้าบัญชีภายใน <strong>7–14 วันทำการ</strong> ตามช่องทางที่ชำระเงินเดิม</span>
              </li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="mb-10" aria-labelledby="non-refundable">
            <h2 id="non-refundable" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              กรณีที่ไม่สามารถขอคืนเงินได้ (Non-refundable)
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                สินค้าที่ซื้อในราคาส่วนลดพิเศษ (Flash Sale, โปรโมชั่นพิเศษ) ที่ระบุว่าไม่สามารถคืนเงินได้
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                เนื้อหาที่เปิดชมเกิน 20% แล้ว
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                คำขอที่ยื่นหลังจาก 7 วันนับจากวันที่ซื้อ
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10" aria-labelledby="contact-refund">
            <h2 id="contact-refund" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              ช่องทางติดต่อ
            </h2>
            <p className="text-gray-600 leading-relaxed">
              มีคำถามเพิ่มเติมหรือต้องการดำเนินการขอคืนเงิน กรุณาติดต่อเราผ่านหน้า{' '}
              <a href="/contact" className="text-yellow-600 font-semibold hover:underline">ติดต่อเรา</a>{' '}
              หรืออีเมล{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-yellow-600 font-semibold hover:underline">
                {BUSINESS.email}
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer nav */}
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/legal/terms" className="text-gray-500 hover:text-gray-700">ข้อกำหนด</a>
          <a href="/legal/privacy" className="text-gray-500 hover:text-gray-700">ความเป็นส่วนตัว</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">ติดต่อ</a>
        </div>
      </div>
    </div>
  )
}
