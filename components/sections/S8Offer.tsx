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
    <section className="px-5 py-14" style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        <span className="section-label">ข้อเสนอ</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px,5vw,28px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 8 }}>
          ทั้งหมดที่ได้ใน {COURSE.price.toLocaleString()} บาท
        </h2>
        <p className="mb-8 text-[15px]" style={{ color: 'var(--ink-soft)' }}>
          ไม่ใช่แค่บทเรียนอ่านอย่างเดียว แต่เป็นชุดสูตร + template + prompt ที่หยิบไปใช้ตอนเขียนโพสต์จริงได้
        </p>

        {/* Value stack */}
        <div className="card mb-5">
          <div className="flex flex-col divide-y" style={{ borderColor: 'var(--rule)' }}>
            {valueStack.map(item => (
              <div key={item.label} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <p className="text-[14px]" style={{ color: 'var(--ink-soft)' }}>{item.label}</p>
                <p className="text-[13px] shrink-0" style={{ color: 'var(--ink-mute)' }}>{item.value.toLocaleString()} ฿</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid var(--rule)' }}>
            <span className="text-[13px]" style={{ color: 'var(--ink-mute)' }}>มูลค่าทั้งหมด</span>
            <span className="text-[16px] font-semibold" style={{ color: 'var(--ink-mute)', textDecoration: 'line-through' }}>{COURSE.anchorPrice.toLocaleString()} ฿</span>
          </div>
        </div>

        {/* Price card */}
        <div className="rounded-xl p-6 text-center mb-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}>
          <p className="text-[13px] mb-1" style={{ color: 'var(--ink-mute)' }}>ราคาวันนี้</p>
          <p className="font-black" style={{ fontFamily: 'var(--font-heading)', fontSize: 52, lineHeight: 1, color: 'var(--amber)' }}>
            {COURSE.price.toLocaleString()}
            <span className="text-[22px] ml-1">฿</span>
          </p>
          <p className="text-[13px] mt-2 mb-6" style={{ color: 'var(--ink-mute)' }}>
            จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่
          </p>
          <LineCTAButton position="offer" label="เริ่มอ่านฟรี 2 บทแรกใน LINE" sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน" className="w-full" />
        </div>

        <p className="text-center text-[13px]" style={{ color: 'var(--ink-mute)' }}>
          🛡 รับประกันคืนเงิน 7 วัน — ไม่มีคำถาม ไม่มีเงื่อนไข
        </p>
      </div>
    </section>
  )
}
