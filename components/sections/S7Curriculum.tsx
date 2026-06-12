const chapters = [
  { n: 1, title: '"สนใจแต่ไม่ทัก" เพราะ "คำ" ไหนในโพสต์ที่ทำให้เขาลังเล?', body: '4 ปมในใจที่ทำให้คนยอมจ่าย + ปมที่ 5 ที่ต้องผ่านก่อนอีก 4 ปมจะทำงาน' },
  { n: 2, title: 'รู้ได้ยังไงว่า "คำไหน" ขายได้ ก่อนเสียเงินดันโพสต์ผิดตัว?', body: 'ใบรายงานผลของคำ 4 ตัวเลข (หยุด/ดูต่อ/เซฟ/ทัก) ตัวไหนตก บอกชัดว่าต้องแก้ตรงไหน' },
  { n: 3, title: 'ประโยคแรกแบบไหนที่ทำให้นิ้วหยุด แทนที่จะปัดผ่าน?', body: 'Hook 12 ตระกูล + "ประโยคที่ 2" ที่คนมองข้าม ตัวจริงที่ลากสายตาให้อ่านจนจบ' },
  { n: 4, title: 'ทำไมบางโพสต์อ่านเพลินถึงปุ่มซื้อ แต่บางโพสต์คนหลุดกลางทาง?', body: '8 โครงโพสต์สะกดจิต ที่พาคนอ่านจบแล้วทำตาม' },
  { n: 5, title: 'คำว่า "ดี" กับคำที่ทำให้คน "อยากได้" ต่างกันตรงไหน?', body: '50+ คำ Call-out + ภาษา Premium ที่อัปราคาให้แพง แต่คนแย่งกันจ่าย' },
  { n: 6, title: 'บอกให้ซื้อยังไง ด้วย "คำ" ที่ไม่ทำให้รู้สึกโดนยัดเยียด?', body: '12 ประโยคปิดที่ทำให้คน "ทัก" เอง โดยไม่ต้องพูดคำว่า "ซื้อเลย" สักครั้ง' },
  { n: 7, title: 'สั่ง AI ยังไงให้เขียนด้วย "คำ" แบบคุณ ไม่ใช่สำเนาแข็งๆ?', body: 'สูตร Prompt 5 ขั้น (CAGCO) ที่เปลี่ยน AI จากตอบจืดเป็นมือโปร' },
]

const bonuses = [
  { id: 'A', title: 'เช็กลิสต์ตรวจงานก่อนปล่อย', desc: 'Hook / Proof / CTA' },
  { id: 'B', title: '100+ Template ครบทุกฟอร์แมต', desc: 'ครอบคลุม 10+ ธุรกิจหลัก' },
  { id: 'C', title: '50+ Hook Formulas', desc: 'พร้อมตัวอย่างไทย' },
  { id: 'D', title: 'Prompt Library 30 ชุด', desc: 'พร้อมตัวอย่างใช้จริง' },
  { id: 'E', title: 'ตารางคำต้องห้าม vs คำที่ควรใช้', desc: 'อ้างอิงเร็วขณะเขียน' },
]

export default function S7Curriculum() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">เนื้อหา 7 ภาค 24 บท</span>
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
          หยิบใช้ตามงานได้ทันที
        </h2>
        <p className="mb-8 text-[15px]" style={{ color: 'var(--ink-soft)' }}>
          ไม่ต้องอ่านรวดเดียว เลือกบทที่ตรงกับโพสต์ที่กำลังเขียน แล้วเอาไปปรับใช้ได้ทันที
        </p>

        {/* Chapter list */}
        <div className="flex flex-col gap-3 mb-8">
          {chapters.map((c) => (
            <div key={c.n} className="card flex gap-4">
              <div
                className="shrink-0 w-8 h-8 rounded-full grid place-items-center text-[12px] font-black mt-0.5"
                style={{
                  background: 'var(--teal-bg)',
                  border: '1px solid rgba(61,165,169,0.5)',
                  color: 'var(--teal)',
                  fontFamily: 'var(--font-heading)',
                  minWidth: 32,
                }}
              >
                {c.n}
              </div>
              <div>
                <p
                  className="font-semibold text-[15px] mb-1.5"
                  style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}
                >
                  {c.title}
                </p>
                <p className="text-[13.5px]" style={{ color: 'var(--ink-mute)', lineHeight: 1.6 }}>
                  → {c.body}
                </p>
              </div>
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
                <div>
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
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px]" style={{ color: 'var(--ink-soft)' }}>
            จบ 7 ภาค → หยิบ 100+ Template ไทยไปใช้กับโพสต์ / แคปชัน / DM / เซลเพจได้เลย
          </p>
        </div>
      </div>
    </section>
  )
}
