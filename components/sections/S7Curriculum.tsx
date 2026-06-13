const chapters = [
  { n: 'ภาค 1', title: 'แกะรอยลูกค้า', desc: 'เจาะ 4 ปมในใจ ที่ทำให้ลูกค้ายอมจ่ายเงิน' },
  { n: 'ภาค 2', title: 'วัดผลคำ', desc: 'ระบบเช็คประโยคต่อประโยค คำไหนพัง คำไหนทำเงิน' },
  { n: 'ภาค 3', title: 'ประโยคหยุดนิ้ว', desc: '12 สูตร Hook และ "ประโยคที่ 2" ที่คนมักมองข้าม' },
  { n: 'ภาค 4', title: 'โครงสร้างสะกดจิต', desc: '8 โครงสร้างโพสต์ ที่ลากสายตาให้อ่านจนจบ' },
  { n: 'ภาค 5', title: 'อัพราคาด้วยคำ', desc: '50+ คำพรีเมียม ที่ทำให้สินค้าดูแพงแต่คนแย่งกันซื้อ' },
  { n: 'ภาค 6', title: 'ปิดการขายเนียนตา', desc: '12 ประโยคปิดการขาย ที่ทำให้ลูกค้าตัดสินใจซื้อโดยไม่ต้องง้อ' },
  { n: 'ภาค 7', title: 'เร่งสปีดด้วย AI', desc: 'สูตร Prompt 5 ขั้น สั่ง AI ให้เขียนเหมือนมือโปร' },
]

const bonuses = [
  { id: 'B', title: '100+ Template ครบทุกฟอร์แมต', desc: 'กรอกคำได้ทันที', value: 490 },
  { id: 'C', title: '50+ Hook Formulas', desc: 'พร้อมตัวอย่างไทย', value: 390 },
  { id: 'D', title: 'Prompt Library 30 ชุด', desc: 'พร้อมตัวอย่างใช้จริง', value: 290 },
  { id: 'A', title: 'เช็กลิสต์ตรวจงานก่อนปล่อย', desc: 'Hook / Proof / CTA', value: 190 },
  { id: 'E', title: 'ตารางคำต้องห้าม vs คำที่ควรใช้', desc: 'อ้างอิงเร็วขณะเขียน', value: 140 },
]

export default function S7Curriculum() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">เนื้อหา</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          7 ภาค 24 บท + โบนัสชุดสูตร Template และ Prompt
          <br />
          <span style={{ color: 'var(--amber)' }}>หยิบไปทำเงินได้ทันที</span>
        </h2>
        <p className="mb-8 text-[15px]" style={{ color: 'var(--ink-soft)' }}>
          ไม่ต้องอ่านรวดเดียว เลือกบทที่ตรงกับโพสต์ที่กำลังเขียน แล้วเอาไปปรับใช้ได้ทันที
        </p>

        {/* Chapter rows — reference style */}
        <div
          className="flex flex-col mb-8"
          style={{ border: '1px solid var(--rule)', borderRadius: 16, overflow: 'hidden' }}
        >
          {chapters.map((c, idx) => (
            <div
              key={c.n}
              className="flex items-center gap-4 px-5 py-4 transition-colors"
              style={{
                borderTop: idx > 0 ? '1px solid var(--rule)' : 'none',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Badge */}
              <div
                className="shrink-0 px-3 py-1 rounded-lg text-[12px] font-bold text-center"
                style={{
                  background: 'rgba(229,190,99,0.15)',
                  border: '1px solid rgba(229,190,99,0.3)',
                  color: 'var(--amber)',
                  fontFamily: 'var(--font-heading)',
                  minWidth: 60,
                  whiteSpace: 'nowrap',
                }}
              >
                {c.n}
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-[15px]"
                  style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
                >
                  {c.title}
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: 'var(--ink-mute)' }}>
                  {c.desc}
                </p>
              </div>
              <span style={{ color: 'var(--ink-mute)', fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'var(--amber-bg)',
            border: '1px solid rgba(229,190,99,0.25)',
          }}
        >
          <p
            className="font-bold text-[14px] mb-5"
            style={{ color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}
          >
            🎁 โบนัส 5 ชุด รวมมูลค่า 1,500 ฿
          </p>
          <div className="flex flex-col gap-3">
            {bonuses.map((b) => (
              <div key={b.id} className="flex items-start gap-3">
                <span
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0"
                  style={{
                    background: 'rgba(229,190,99,0.18)',
                    color: 'var(--amber)',
                    border: '1px solid rgba(229,190,99,0.3)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {b.id}
                </span>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[14px] font-semibold"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
                  >
                    {b.title}
                  </span>
                  <span className="text-[13px] ml-1.5" style={{ color: 'var(--ink-mute)' }}>
                    — {b.desc}
                  </span>
                </div>
                <span
                  className="text-[12px] shrink-0 tabular-nums"
                  style={{ color: 'var(--ink-mute)' }}
                >
                  {b.value} ฿
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
