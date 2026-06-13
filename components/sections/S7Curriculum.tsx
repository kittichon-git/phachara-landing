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
      style={{ background: '#FDFBF7' }}
    >
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        <span className="section-label">เนื้อหา</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 8,
          }}
        >
          7 ภาค 24 บท + โบนัสชุดสูตร Template และ Prompt
          <br />
          <span style={{ color: '#E87A3D' }}>หยิบไปทำเงินได้ทันที</span>
        </h2>
        <p className="mb-8 text-[15px]" style={{ color: '#666666' }}>
          ไม่ต้องอ่านรวดเดียว เลือกบทที่ตรงกับโพสต์ที่กำลังเขียน แล้วเอาไปปรับใช้ได้ทันที
        </p>

        {/* Chapter rows */}
        <div
          className="flex flex-col mb-8"
          style={{ border: '1px solid #E5DDD5', borderRadius: 12, overflow: 'hidden' }}
        >
          {chapters.map((c, idx) => (
            <div
              key={c.n}
              className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[#FFF0E6]"
              style={{
                borderTop: idx > 0 ? '1px solid #E5DDD5' : 'none',
                background: '#FFFFFF',
                borderLeft: '4px solid transparent',
              }}
            >
              {/* Badge */}
              <div className="curriculum-badge shrink-0">{c.n}</div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[15px]" style={{ color: '#1A1A1A' }}>
                  {c.title}
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: '#666666' }}>
                  {c.desc}
                </p>
              </div>
              <span style={{ color: '#E87A3D', fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div
          className="rounded-xl p-6"
          style={{
            background: '#FFF0E6',
            border: '2px dashed #E87A3D',
          }}
        >
          <p className="font-bold text-[14px] mb-5" style={{ color: '#E87A3D' }}>
            🎁 โบนัส 5 ชุด รวมมูลค่า 1,500 ฿
          </p>
          <div className="flex flex-col gap-3">
            {bonuses.map((b) => (
              <div key={b.id} className="flex items-start gap-3">
                <span
                  className="curriculum-badge shrink-0 mt-0.5"
                  style={{ minWidth: 28, height: 28, fontSize: 12 }}
                >
                  {b.id}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-[14px] font-semibold" style={{ color: '#1A1A1A' }}>
                    {b.title}
                  </span>
                  <span className="text-[13px] ml-1.5" style={{ color: '#666666' }}>
                    — {b.desc}
                  </span>
                </div>
                <span className="text-[12px] shrink-0 tabular-nums" style={{ color: '#666666' }}>
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
