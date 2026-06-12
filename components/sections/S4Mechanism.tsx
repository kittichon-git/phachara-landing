const steps = [
  {
    n: '01',
    title: 'ทำให้คนหยุดอ่าน',
    body: 'เปลี่ยนประโยคเปิดให้ชัดพอที่คนจะไม่เลื่อนผ่านทันที',
    before: '"โปรเดือนนี้"',
    after: '"ลูกค้าถามบ่อยสุดว่า…"',
  },
  {
    n: '02',
    title: 'ทำให้คนเข้าใจและเชื่อ',
    body: 'ใช้คำที่อธิบายสินค้าให้เห็นภาพ ลดความลังเล และเพิ่มความน่าเชื่อถือ',
    before: '"วัตถุดิบพรีเมียม"',
    after: '"ตัวเดียวกับที่ร้านดังใช้"',
  },
  {
    n: '03',
    title: 'ทำให้คนรู้ว่าต้องทำอะไรต่อ',
    body: 'วาง CTA / ข้อเสนอ / ประโยคปิดให้ชัด โดยไม่ต้องยัดเยียด',
    before: '"สนใจทักแชท"',
    after: '"พิมพ์ \'1\' เดี๋ยวส่งวิธีสั่งให้"',
  },
]

export default function S4Mechanism() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">กลไก 3 ขั้นตอน</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          นี่คือกลไก 3 ขั้นตอนที่คุณจะทำตามได้
        </h2>

        <div className="flex flex-col gap-5 mt-8">
          {steps.map((s) => (
            <div key={s.n} className="card flex gap-5">
              <div className="step-num">{s.n}</div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-bold text-[17px] mb-2"
                  style={{ color: 'var(--teal)', fontFamily: 'var(--font-heading)' }}
                >
                  {s.title}
                </p>
                <p className="text-[15px] mb-4" style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                  {s.body}
                </p>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid var(--rule)' }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2.5"
                    style={{ borderBottom: '1px solid var(--rule)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--rust)' }}>
                      ❌ ก่อน
                    </span>
                    <span className="text-[13px]" style={{ color: 'var(--ink-mute)' }}>
                      {s.before}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--teal)' }}>
                      ✅ หลัง
                    </span>
                    <span className="text-[13px]" style={{ color: 'var(--ink-soft)' }}>
                      {s.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[14.5px]" style={{ color: 'var(--ink-mute)' }}>
          นี่คือหลักคิด — สูตรเต็มคำต่อคำอยู่ในเล่ม
        </p>
      </div>
    </section>
  )
}
