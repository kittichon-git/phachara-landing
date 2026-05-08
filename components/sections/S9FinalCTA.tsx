import LineCTAButton from '@/components/LineCTAButton'
import { COURSE } from '@/lib/constants'

export default function S9FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 px-5 text-center relative"
      style={{ background: 'var(--ink)', color: 'var(--paper)' }}
      aria-labelledby="final-cta-headline"
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto">
        <span
          className="eyebrow mb-4 block justify-center"
          style={{ color: 'var(--accent-soft)' }}
        >
          พร้อมแล้วใช่ไหม
        </span>

        <h2
          id="final-cta-headline"
          className="text-[clamp(32px,5vw,48px)] font-bold leading-snug mb-7"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--paper)' }}
        >
          พร้อมเริ่มหรือยัง?
        </h2>

        {/* Recap */}
        <ul className="space-y-3.5 max-w-[520px] mx-auto mb-9 text-left">
          {[
            '24 บท + ภาคผนวก 5 ส่วน — ใช้ได้ตลอดชีพ',
            'คืนเงินภายใน 7 วัน ไม่ถามเหตุผล',
            'เริ่มจาก 3 บทฟรีก่อน — แอด LINE',
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[16px] px-4 py-3.5 rounded-[12px] border"
              style={{
                color: 'rgba(246,239,227,0.85)',
                background: 'rgba(246,239,227,0.06)',
                borderColor: 'rgba(246,239,227,0.1)',
              }}
            >
              <span className="font-bold text-[18px]" style={{ color: 'var(--line-green)' }} aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Price block */}
        <div className="mb-9">
          <p
            className="text-xl mb-1 line-through"
            style={{ color: 'rgba(246,239,227,0.45)' }}
          >
            {COURSE.anchorPrice.toLocaleString()}฿
          </p>
          <p
            className="text-[5rem] font-black leading-none mb-1"
            style={{ color: 'var(--paper)', fontFamily: 'var(--font-serif)' }}
          >
            {COURSE.price.toLocaleString()}฿
          </p>
          <p className="text-sm" style={{ color: 'rgba(246,239,227,0.55)' }}>
            ราคา soft launch — ไม่จำกัดเวลา
          </p>
        </div>

        {/* Big CTA */}
        <div className="flex justify-center mb-9">
          <LineCTAButton
            position="s10"
            label="แอด LINE รับ 3 บทฟรี"
            size="lg"
            className="w-full sm:w-auto max-w-[420px]"
          />
        </div>

        {/* Guarantee box */}
        <div
          className="rounded-[18px] px-6 py-7 text-left flex gap-4 items-start max-w-[580px] mx-auto mb-9"
          style={{
            background: 'rgba(246,239,227,0.06)',
            border: '1px solid rgba(246,239,227,0.14)',
          }}
        >
          <span className="text-[32px] leading-none shrink-0" aria-hidden="true">🛡</span>
          <div>
            <h4
              className="font-bold text-[18px] mb-1.5"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--paper)' }}
            >
              การันตี — ถ้าไม่คุ้ม คืนเงินเต็ม {COURSE.price.toLocaleString()} บาท
            </h4>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: 'rgba(246,239,227,0.72)' }}>
              แค่ส่งคำว่า <strong style={{ color: 'var(--paper)' }}>&ldquo;คืนเงิน&rdquo;</strong> ใน LINE — ไม่ต้องอธิบายเหตุผล
              โอนคืนภายใน 24 ชั่วโมง ภายใน 7 วันแรกของการสั่งซื้อ
            </p>
          </div>
        </div>

        {/* Trust footer */}
        <p
          className="text-sm flex flex-wrap justify-center gap-x-4 gap-y-1"
          style={{ color: 'rgba(246,239,227,0.4)' }}
        >
          <span>📚 24 บท + ภาคผนวก 5 ส่วน</span>
          <span>🛡 การันตี 7 วัน</span>
          <span>🔒 Stripe TH</span>
        </p>
      </div>
    </section>
  )
}
