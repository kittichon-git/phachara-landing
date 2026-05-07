import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน | phachara.com',
  description: 'ข้อกำหนดและเงื่อนไขการใช้งานบริการของ phachara.com โปรดอ่านก่อนใช้บริการ',
  alternates: { canonical: 'https://phachara.com/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">ข้อกำหนดการใช้งาน</h1>
          <p className="text-gray-400 mt-2 text-sm">อัปเดตล่าสุด: 8 พฤษภาคม 2568</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          กรุณาอ่านข้อกำหนดและเงื่อนไขต่อไปนี้อย่างละเอียดก่อนใช้บริการของ {BUSINESS.nameEn}
          (&ldquo;บริษัท&rdquo;, &ldquo;เรา&rdquo;) การเข้าถึงหรือใช้บริการของเราถือว่าท่านยอมรับข้อกำหนดเหล่านี้แล้ว
        </p>

        {/* Section 1 - Acceptance */}
        <section className="mb-10" aria-labelledby="acceptance">
          <h2 id="acceptance" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            การยอมรับข้อกำหนด (Acceptance of Terms)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            การสมัครสมาชิก ซื้อสินค้า หรือใช้บริการใดๆ ของ {BUSINESS.displayName} ถือว่าท่านได้อ่าน
            ทำความเข้าใจ และยอมรับข้อกำหนดการใช้งานฉบับนี้ทุกประการ หากท่านไม่เห็นด้วยกับข้อกำหนดใดๆ
            กรุณาหยุดใช้บริการทันที
          </p>
        </section>

        {/* Section 2 - Account */}
        <section className="mb-10" aria-labelledby="account">
          <h2 id="account" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            บัญชีผู้ใช้ (Account)
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3">
            <p>
              ผู้ใช้บริการต้องมีอายุ <strong>18 ปีบริบูรณ์ขึ้นไป</strong> หรือได้รับความยินยอมจากผู้ปกครองตามกฎหมาย
            </p>
            <p>
              ท่านรับผิดชอบในการรักษาความปลอดภัยของบัญชีและรหัสผ่าน บริษัทจะไม่รับผิดชอบต่อความเสียหาย
              ที่เกิดจากการที่บัญชีของท่านถูกเข้าถึงโดยไม่ได้รับอนุญาต
            </p>
          </div>
        </section>

        {/* Section 3 - License */}
        <section className="mb-10" aria-labelledby="license">
          <h2 id="license" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            สิทธิ์การใช้งาน (License)
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3">
            <p>
              เมื่อซื้อคอร์สเรียน ท่านได้รับสิทธิ์การใช้งาน<strong>ส่วนตัวที่ไม่สามารถโอนได้</strong> (non-transferable personal license)
              ในการเข้าถึงเนื้อหาคอร์สเพื่อการศึกษาส่วนตัวเท่านั้น
            </p>
            <p>ท่านไม่มีสิทธิ์:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>แชร์ ขายต่อ หรือแจกจ่ายเนื้อหาคอร์สให้บุคคลอื่น</li>
              <li>บันทึกหน้าจอหรือดาวน์โหลดวิดีโอโดยไม่ได้รับอนุญาต</li>
              <li>นำเนื้อหาไปใช้เพื่อการค้าหรือสร้างงานดัดแปลง</li>
            </ul>
          </div>
        </section>

        {/* Section 4 - Payment */}
        <section className="mb-10" aria-labelledby="payment">
          <h2 id="payment" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            การชำระเงิน (Payment)
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3">
            <p>
              ราคาสินค้าและบริการทั้งหมดแสดงในสกุลเงิน <strong>บาทไทย (THB)</strong> และ
              <strong>รวมภาษีมูลค่าเพิ่ม (VAT) 7%</strong> แล้ว
            </p>
            <p>
              บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาได้ตลอดเวลา โดยราคาที่ใช้จะเป็นราคา
              ณ วันที่ทำรายการซื้อขาย
            </p>
          </div>
        </section>

        {/* Section 5 - Refund */}
        <section className="mb-10" aria-labelledby="refund-terms">
          <h2 id="refund-terms" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
            นโยบายการคืนเงิน (Refund Policy)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            นโยบายการคืนเงินของเรากำหนดให้ท่านสามารถขอคืนเงินได้ภายใน 7 วันนับจากวันซื้อ
            ตามเงื่อนไขที่กำหนด ดูรายละเอียดเพิ่มเติมได้ที่{' '}
            <a href="/refund" className="text-yellow-600 font-semibold hover:underline">
              นโยบายการคืนเงิน →
            </a>
          </p>
        </section>

        {/* Section 6 - Limitation */}
        <section className="mb-10" aria-labelledby="limitation">
          <h2 id="limitation" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
            การจำกัดความรับผิด (Limitation of Liability)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            บริษัทไม่รับประกันว่าผลลัพธ์ที่ได้จากการใช้ความรู้ในคอร์สจะตรงกับที่คาดหวังในทุกกรณี
            ผลลัพธ์ขึ้นอยู่กับปัจจัยหลายประการรวมถึงความพยายามและบริบทของแต่ละบุคคล
            ความรับผิดของบริษัทจะถูกจำกัดไม่เกินจำนวนเงินที่ท่านชำระสำหรับบริการนั้นๆ
          </p>
        </section>

        {/* Section 7 - Governing Law */}
        <section className="mb-10" aria-labelledby="governing-law">
          <h2 id="governing-law" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
            กฎหมายที่บังคับใช้และการระงับข้อพิพาท
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3">
            <p>
              ข้อกำหนดฉบับนี้อยู่ภายใต้บังคับและตีความตาม<strong>กฎหมายไทย</strong>
              ข้อพิพาทใดๆ ที่เกิดขึ้นจะถูกนำเสนอต่อศาลที่มีเขตอำนาจในประเทศไทย
            </p>
            <p>
              หากมีคำถามเกี่ยวกับข้อกำหนดนี้ กรุณาติดต่อเราที่{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-yellow-600 font-semibold hover:underline">
                {BUSINESS.email}
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer nav */}
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/refund" className="text-gray-500 hover:text-gray-700">คืนเงิน</a>
          <a href="/privacy" className="text-gray-500 hover:text-gray-700">ความเป็นส่วนตัว</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">ติดต่อ</a>
        </div>
      </div>
    </div>
  )
}
