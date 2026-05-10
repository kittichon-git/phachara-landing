import LineCTAButton from '@/components/LineCTAButton'
import { COURSE } from '@/lib/constants'

const recapItems = [
  '24 บท + ภาคผนวก 5 ส่วน — ใช้ได้ตลอดชีพ',
  'คืนเงินภายใน 7 วัน ไม่ถามเหตุผล',
  'เริ่มจาก 2 บทฟรีก่อน — แอด LINE',
]

export default function S9FinalCTA() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="final-cta-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Blue callout box */}
        <div
          className="rounded-[10px] p-7 sm:p-9"
          style={{ background: 'var(--blue-bg)' }}
        >
          <h2
            id="final-cta-headline"
            className="font-bold leading-snug mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--blue-fg)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            พร้อมเริ่มหรือยัง?
          </h2>

          {/* Recap list */}
          <ul className="list-none p-0 mt-4 mb-5 flex flex-col gap-1.5">
            {recapItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 py-1"
                style={{ fontSize: 15.5, color: 'var(--blue-fg)' }}
              >
                <span
                  className="font-bold shrink-0"
                  style={{ color: 'var(--line-green-d)' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Price block */}
          <div className="mb-5">
            <p
              className="line-through text-[17px] mb-0.5"
              style={{ color: 'var(--blue-fg)', opacity: 0.55 }}
            >
              {COURSE.anchorPrice.toLocaleString()}฿
            </p>
            <p
              className="font-black leading-none mb-1"
              style={{
                color: 'var(--blue-fg)',
                fontFamily: 'var(--font-serif)',
                fontSize: 52,
              }}
            >
              {COURSE.price.toLocaleString()}฿
            </p>
            <p className="text-sm" style={{ color: 'var(--blue-fg)', opacity: 0.65 }}>
              ราคา soft launch — ไม่จำกัดเวลา
            </p>
          </div>

          {/* CTA button */}
          <LineCTAButton
            position="s10"
            label="เรียนฟรี 2 บทเรียน"
            size="lg"
            className="w-full max-w-[380px] mt-5"
          />

          {/* Guarantee box */}
          <div
            className="flex gap-3 items-start rounded-lg p-4 mt-5"
            style={{ background: 'rgba(255,255,255,0.6)' }}
          >
            <span className="text-[28px] leading-none shrink-0" aria-hidden="true">🛡</span>
            <div>
              <h4
                className="font-bold text-[16px] mb-1"
                style={{ color: 'var(--blue-fg)' }}
              >
                ถ้าไม่คุ้ม คืนเงินเต็ม {COURSE.price.toLocaleString()} บาท
              </h4>
              <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--blue-fg)', opacity: 0.8 }}>
                แค่ส่งคำว่า <strong>&ldquo;คืนเงิน&rdquo;</strong> ใน LINE — ไม่ต้องอธิบายเหตุผล
                โอนคืนภายใน 24 ชั่วโมง ภายใน 7 วันแรกของการสั่งซื้อ
              </p>
            </div>
          </div>

          {/* Trust footer */}
          <p
            className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-4"
            style={{ color: 'var(--blue-fg)', opacity: 0.75 }}
          >
            <span>📚 24 บท + ภาคผนวก 5 ส่วน</span>
            <span>🛡 การันตี 7 วัน</span>
            <span>🔒 Stripe TH</span>
          </p>
        </div>

      </div>
    </section>
  )
}
