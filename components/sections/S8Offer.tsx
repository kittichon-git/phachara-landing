import LineCTAButton from '@/components/LineCTAButton'
import { COURSE } from '@/lib/constants'

const valueStack = [
  { label: 'บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" 7 ภาค 24 บท', value: 990 },
  { label: 'B · 100+ Template ครบทุกฟอร์แมต กรอกคำได้ทันที', value: 490 },
  { label: 'C · 50+ Hook Formulas พร้อมตัวอย่างไทย', value: 390 },
  { label: 'D · Prompt Library 30 ชุด พร้อมตัวอย่างใช้จริง', value: 290 },
  { label: 'A · เช็กลิสต์ตรวจงานก่อนปล่อย (Hook / Proof / CTA)', value: 190 },
  { label: 'E · ตารางคำต้องห้าม vs คำที่ควรใช้', value: 140 },
]

export default function S8Offer() {
  return (
    <section
      className="relative px-5 py-20 overflow-hidden"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,190,99,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto" style={{ maxWidth: 540 }}>
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">ข้อเสนอ</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px,5vw,34px)',
              fontWeight: 800,
              color: 'var(--ink)',
              lineHeight: 1.25,
              marginBottom: 10,
            }}
          >
            ทั้งหมดที่ได้ใน {COURSE.price.toLocaleString()} บาท
          </h2>
          <p className="text-[15px]" style={{ color: 'var(--ink-soft)' }}>
            ไม่ใช่แค่บทเรียนอ่านอย่างเดียว แต่เป็นชุดสูตร + template + prompt
            ที่หยิบไปใช้ตอนเขียนโพสต์จริงได้
          </p>
        </div>

        {/* Pricing card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--rule)',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Value stack */}
          <div className="p-6 pb-2">
            <p
              className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: 'var(--ink-mute)' }}
            >
              สิ่งที่ได้รับ
            </p>
            <div className="flex flex-col">
              {valueStack.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-3 py-3"
                  style={{
                    borderBottom:
                      idx < valueStack.length - 1
                        ? '1px solid var(--rule)'
                        : 'none',
                  }}
                >
                  <p
                    className="text-[14px]"
                    style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[13px] shrink-0 font-medium tabular-nums"
                    style={{ color: 'var(--ink-mute)' }}
                  >
                    {item.value.toLocaleString()} ฿
                  </p>
                </div>
              ))}
              {/* Total row */}
              <div
                className="flex items-center justify-between pt-4 pb-2"
                style={{ borderTop: '2px solid rgba(255,255,255,0.12)' }}
              >
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  มูลค่าทั้งหมด
                </span>
                <span
                  className="text-[15px] font-bold tabular-nums"
                  style={{
                    color: 'var(--ink-mute)',
                    textDecoration: 'line-through',
                  }}
                >
                  {COURSE.anchorPrice.toLocaleString()} ฿
                </span>
              </div>
            </div>
          </div>

          {/* Price focal area */}
          <div
            className="px-6 pt-6 pb-7 text-center"
            style={{
              background: 'rgba(229,190,99,0.06)',
              borderTop: '1px solid rgba(229,190,99,0.18)',
            }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.14em] uppercase mb-2"
              style={{ color: 'var(--ink-mute)' }}
            >
              ราคาพิเศษวันนี้
            </p>
            <div className="flex items-end justify-center gap-2 mb-1">
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(60px,16vw,76px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'var(--amber)',
                  letterSpacing: '-0.03em',
                }}
              >
                {COURSE.price.toLocaleString()}
              </span>
              <span
                className="mb-2.5 font-bold text-[24px]"
                style={{ color: 'var(--amber)' }}
              >
                ฿
              </span>
            </div>
            <p className="text-[13px] mb-6" style={{ color: 'var(--ink-mute)' }}>
              จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่
            </p>
            <LineCTAButton
              position="offer"
              label="เริ่มอ่านฟรี 2 บทแรกใน LINE"
              sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน"
              className="w-full"
            />
          </div>
        </div>

        {/* Risk reversal */}
        <p
          className="text-center text-[13px] mt-5"
          style={{ color: 'var(--ink-mute)' }}
        >
          🛡 รับประกันคืนเงิน 7 วัน — ไม่มีคำถาม ไม่มีเงื่อนไข
        </p>
      </div>
    </section>
  )
}
