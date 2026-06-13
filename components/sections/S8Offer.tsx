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
      className="px-5 py-20"
      style={{ background: '#FDFBF7' }}
    >
      <div className="mx-auto" style={{ maxWidth: 540 }}>
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">ข้อเสนอ</span>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 34px)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.25,
              letterSpacing: '-0.5px',
              marginBottom: 10,
            }}
          >
            ทั้งหมดที่ได้ใน {COURSE.price.toLocaleString()} บาท
          </h2>
          <p className="text-[15px]" style={{ color: '#666666' }}>
            ไม่ใช่แค่บทเรียนอ่านอย่างเดียว แต่เป็นชุดสูตร + template + prompt
            ที่หยิบไปใช้ตอนเขียนโพสต์จริงได้
          </p>
        </div>

        {/* Pricing card */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #E87A3D',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(232,122,61,0.15)',
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          {/* Value stack */}
          <div className="p-6 pb-2">
            <p
              className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: '#666666' }}
            >
              สิ่งที่ได้รับ
            </p>
            <div className="flex flex-col">
              {valueStack.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-3 py-3"
                  style={{
                    borderBottom: idx < valueStack.length - 1 ? '1px solid #E5DDD5' : 'none',
                  }}
                >
                  <p className="text-[14px]" style={{ color: '#444444', lineHeight: 1.5 }}>
                    {item.label}
                  </p>
                  <p className="text-[13px] shrink-0 font-medium tabular-nums" style={{ color: '#666666' }}>
                    {item.value.toLocaleString()} ฿
                  </p>
                </div>
              ))}
              {/* Total row */}
              <div
                className="flex items-center justify-between pt-4 pb-2"
                style={{ borderTop: '1px solid #E5DDD5' }}
              >
                <span className="text-[13px] font-semibold" style={{ color: '#666666' }}>
                  มูลค่าทั้งหมด
                </span>
                <span
                  className="text-[15px] font-bold tabular-nums"
                  style={{ color: '#999999', textDecoration: 'line-through' }}
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
              background: '#FFF0E6',
              borderTop: '2px dashed #E87A3D',
            }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.14em] uppercase mb-2"
              style={{ color: '#666666' }}
            >
              ราคาพิเศษวันนี้
            </p>
            <div className="flex items-end justify-center gap-2 mb-1">
              <span
                style={{
                  fontSize: 'clamp(60px, 16vw, 76px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#E87A3D',
                  letterSpacing: '-0.03em',
                }}
              >
                {COURSE.price.toLocaleString()}
              </span>
              <span className="mb-2.5 font-bold text-[24px]" style={{ color: '#E87A3D' }}>
                ฿
              </span>
            </div>
            <p className="text-[13px] mb-6" style={{ color: '#666666' }}>
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
        <p className="text-center text-[13px] mt-5" style={{ color: '#666666' }}>
          🛡 รับประกันคืนเงิน 7 วัน — ไม่มีคำถาม ไม่มีเงื่อนไข
        </p>
      </div>
    </section>
  )
}
