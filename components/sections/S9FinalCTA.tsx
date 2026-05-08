import LineCTAButton from '@/components/LineCTAButton'
import { track } from '@/lib/analytics'

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
        <ul className="text-gray-300 text-lg space-y-2 mb-10 text-left inline-block">
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            24 บท + Swipe File + Template ครบทุกหมวด
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            คืนเงิน 7 วัน ไม่ถาม
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--line-green)]" aria-hidden="true">✅</span>
            เริ่มจาก 3 บทฟรีก่อน — แอด LINE
          </li>
        </ul>

        {/* Big CTA */}
        <div
          className="flex justify-center mb-8"
          onClick={() => track('sp_cta_click', { position: 's9' })}
        >
          <LineCTAButton
            position="s9"
            label="🟢 แอด LINE รับ 3 บทฟรี"
            size="lg"
          />
        </div>

        {/* Guarantee box */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl px-6 py-5 text-gray-300 text-sm leading-relaxed">
          🛡 "ถ้าอ่านแล้วไม่คุ้ม คืนเงินเต็ม 990 ภายใน 7 วัน —
          แค่ส่งคำว่า <strong className="text-white">คืนเงิน</strong> ใน LINE"
        </div>
      </div>
    </section>
  )
}
