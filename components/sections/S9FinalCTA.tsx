import LineCTAButton from '@/components/LineCTAButton'
import { COURSE } from '@/lib/constants'

export default function S9FinalCTA() {
  return (
    <section className="bg-gray-900 py-16 px-4 text-white" aria-labelledby="final-cta-headline">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          id="final-cta-headline"
          className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-black mb-8"
        >
          พร้อมเริ่มหรือยัง?
        </h2>

        {/* Recap */}
        <ul className="text-gray-300 text-lg space-y-2 mb-8 text-left inline-block">
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            24 บท + ภาคผนวก 5 ส่วน — ใช้ได้ตลอดชีพ
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            คืนเงินภายใน 7 วัน ไม่ถามเหตุผล
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            เริ่มจาก 3 บทฟรีก่อน — แอด LINE
          </li>
        </ul>

        {/* Price block */}
        <div className="mb-8">
          <p className="text-gray-400 line-through text-xl mb-1">
            {COURSE.anchorPrice.toLocaleString()}฿
          </p>
          <p className="text-white text-5xl font-black mb-1">
            {COURSE.price.toLocaleString()}฿
          </p>
          <p className="text-gray-400 text-sm">ราคา soft launch — ไม่จำกัดเวลา</p>
        </div>

        {/* Big CTA */}
        <div className="flex justify-center mb-8">
          <LineCTAButton
            position="s10"
            label="🟢 แอด LINE รับ 3 บทฟรี"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Guarantee box */}
        <div className="bg-gray-800 border border-yellow-600/30 rounded-2xl px-6 py-5 text-left mb-8">
          <p className="text-white font-bold mb-2">🛡 การันตี 7 วัน — ไม่พอใจ คืนเงินเต็มจำนวน</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            ถ้าอ่านแล้วไม่คุ้ม คืนเงินเต็ม {COURSE.price.toLocaleString()} บาท ภายใน 7 วัน
            <br />
            แค่ส่งคำว่า <strong className="text-white">&ldquo;คืนเงิน&rdquo;</strong> ใน LINE — ไม่ต้องอธิบายเหตุผล โอนคืนภายใน 24 ชั่วโมง
          </p>
        </div>

        {/* Trust footer */}
        <p className="text-sm text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>📚 24 บท + ภาคผนวก 5 ส่วน</span>
          <span>🛡 การันตี 7 วัน</span>
          <span>🔒 Stripe TH</span>
        </p>
      </div>
    </section>
  )
}
