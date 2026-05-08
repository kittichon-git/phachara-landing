import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว | phachara.com',
  description: 'นโยบายความเป็นส่วนตัว (PDPA) ของ phachara.com การเก็บรวบรวมและใช้งานข้อมูลส่วนบุคคล',
  alternates: { canonical: 'https://phachara.com/legal/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">นโยบายความเป็นส่วนตัว</h1>
          <p className="text-gray-400 mt-2 text-sm">อัปเดตล่าสุด: 8 พฤษภาคม 2568</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">
            <span>🔒</span> เป็นไปตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ. 2562
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {BUSINESS.nameEn} (&ldquo;บริษัท&rdquo;, &ldquo;เรา&rdquo;) ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
          นโยบายนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของท่าน
          ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
        </p>

        {/* Section 1 */}
        <section className="mb-10" aria-labelledby="data-controller">
          <h2 id="data-controller" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
          </h2>
          <address className="not-italic text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-5 space-y-1">
            <p className="font-semibold text-gray-900">{BUSINESS.nameEn}</p>
            <p>{BUSINESS.address}</p>
            <p>เลขประจำตัวผู้เสียภาษี: {BUSINESS.taxId}</p>
            <p>อีเมล: <a href={`mailto:${BUSINESS.email}`} className="text-yellow-600 hover:underline">{BUSINESS.email}</a></p>
            <p>โทร: {BUSINESS.phone}</p>
          </address>
        </section>

        {/* Section 2 */}
        <section className="mb-10" aria-labelledby="data-collected">
          <h2 id="data-collected" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            ข้อมูลที่เราเก็บรวบรวม
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ข้อมูลระบุตัวตน: ชื่อ, อีเมล, เบอร์โทรศัพท์</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ข้อมูลการชำระเงิน: ประวัติการซื้อ (ไม่เก็บข้อมูลบัตรเครดิตโดยตรง)</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ข้อมูลการใช้งาน: หน้าที่เข้าชม, ระยะเวลาการใช้งาน, ความคืบหน้าการเรียน</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ข้อมูลเทคนิค: IP address, ประเภทอุปกรณ์, เบราว์เซอร์</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10" aria-labelledby="purpose">
          <h2 id="purpose" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            วัตถุประสงค์การใช้ข้อมูล
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>จัดให้บริการคอร์สเรียนและฟีเจอร์ต่างๆ</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ส่งการยืนยันการสั่งซื้อและใบเสร็จ</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>แจ้งเตือนคอร์สใหม่และโปรโมชั่น (ด้วยความยินยอมของท่าน)</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ปรับปรุงคุณภาพบริการและประสบการณ์ผู้ใช้</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>ปฏิบัติตามข้อกำหนดทางกฎหมาย</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10" aria-labelledby="legal-basis">
          <h2 id="legal-basis" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            ฐานทางกฎหมายในการประมวลผลข้อมูล
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span><strong>การปฏิบัติตามสัญญา:</strong> เพื่อให้บริการที่ท่านซื้อ</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span><strong>ความยินยอม:</strong> การส่งอีเมลการตลาด</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span><strong>ประโยชน์โดยชอบด้วยกฎหมาย:</strong> การพัฒนาบริการและความปลอดภัย</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span><strong>พันธกรณีทางกฎหมาย:</strong> การปฏิบัติตามกฎหมายภาษีและระเบียบที่เกี่ยวข้อง</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10" aria-labelledby="data-sharing">
          <h2 id="data-sharing" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
            การเปิดเผยข้อมูลแก่บุคคลที่สาม
          </h2>
          <p className="text-gray-600 leading-relaxed">
            เราไม่ขายข้อมูลส่วนบุคคลของท่านแก่บุคคลที่สาม เราอาจเปิดเผยข้อมูลแก่:
            ผู้ให้บริการชำระเงิน (Omise/2C2P), ผู้ให้บริการโฮสติ้ง (Vercel), และบริการวิเคราะห์ (Google Analytics)
            ซึ่งล้วนผ่านการทำสัญญาคุ้มครองข้อมูลแล้ว
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10" aria-labelledby="retention">
          <h2 id="retention" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
            ระยะเวลาการเก็บรักษาข้อมูล
          </h2>
          <p className="text-gray-600 leading-relaxed">
            เราเก็บข้อมูลส่วนบุคคลตลอดระยะเวลาที่ท่านมีบัญชีผู้ใช้กับเรา และต่ออีก 3 ปีหลังจากนั้น
            เพื่อวัตถุประสงค์ทางกฎหมายและภาษี ข้อมูลทางการเงินเก็บไว้ 7 ปีตามกฎหมายบัญชี
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10" aria-labelledby="rights">
          <h2 id="rights" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
            สิทธิ์ของท่านตาม PDPA
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>สิทธิ์เข้าถึงและได้รับสำเนาข้อมูลส่วนบุคคล</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>สิทธิ์แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>สิทธิ์ลบข้อมูล (right to erasure)</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>สิทธิ์คัดค้านการประมวลผล</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0 mt-1">•</span>สิทธิ์ถอนความยินยอมได้ตลอดเวลา</li>
          </ul>
          <p className="text-gray-600 mt-4">
            ยื่นคำขอใช้สิทธิ์ได้ที่{' '}
            <a href={`mailto:${BUSINESS.email}`} className="text-yellow-600 font-semibold hover:underline">
              {BUSINESS.email}
            </a>{' '}
            เราจะตอบกลับภายใน 30 วัน
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10" aria-labelledby="security">
          <h2 id="security" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
            ความปลอดภัยของข้อมูล
          </h2>
          <p className="text-gray-600 leading-relaxed">
            เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมทั้งด้านเทคนิคและการจัดการ รวมถึงการเข้ารหัส SSL/TLS
            การจำกัดการเข้าถึงข้อมูล และการตรวจสอบความปลอดภัยเป็นระยะ
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10" aria-labelledby="policy-changes">
          <h2 id="policy-changes" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
            การเปลี่ยนแปลงนโยบาย
          </h2>
          <p className="text-gray-600 leading-relaxed">
            เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงสำคัญจะแจ้งให้ท่านทราบผ่านอีเมล
            หรือประกาศบนเว็บไซต์ก่อนมีผลบังคับใช้อย่างน้อย 30 วัน
            วันที่ &ldquo;อัปเดตล่าสุด&rdquo; ด้านบนจะแสดงวันที่นโยบายมีผลบังคับใช้ล่าสุด
          </p>
        </section>
      </main>

      {/* Footer nav */}
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/legal/refund" className="text-gray-500 hover:text-gray-700">คืนเงิน</a>
          <a href="/legal/terms" className="text-gray-500 hover:text-gray-700">ข้อกำหนด</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">ติดต่อ</a>
        </div>
      </div>
    </div>
  )
}
