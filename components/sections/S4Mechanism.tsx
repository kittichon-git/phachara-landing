const steps = [
  {
    n: '01',
    icon: '👁️',
    title: 'สะกดสายตา (Hook)',
    body: 'เปลี่ยนประโยคแรกให้ดึงดูด จนลูกค้าไม่อยากเลื่อนผ่าน',
    before: '"โปรเดือนนี้"',
    after: '"ส่องกระจกตอนเช้าแล้วเจอจุดด่างดำที่เพิ่งโผล่?"',
  },
  {
    n: '02',
    icon: '🤝',
    title: 'สร้างความเชื่อใจ (Trust)',
    body: 'ใช้คำอธิบายที่เห็นภาพ ตัดความลังเล และทำให้ลูกค้าเชื่อมั่น',
    before: '"วัตถุดิบพรีเมียม"',
    after: '"ตัวเดียวกับที่ร้านดังใช้ — ลูกค้าสั่งซ้ำทุกเดือน"',
  },
  {
    n: '03',
    icon: '⚡',
    title: 'กระตุ้นการตัดสินใจ (Action)',
    body: 'วางประโยคปิดการขายให้เนียน จนลูกค้าโอนเงินโดยไม่ต้องยัดเยียด',
    before: '"สนใจทักแชท"',
    after: '"พิมพ์ \'1\' เดี๋ยวส่งวิธีสั่งให้"',
  },
]

export default function S4Mechanism() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: '#FDFBF7' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <span className="section-label">วิธีใหม่</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 12,
          }}
        >
          3 ขั้นตอนเปลี่ยน &ldquo;คำธรรมดา&rdquo; เป็น &ldquo;คำทำเงิน&rdquo;
        </h2>

        <div className="flex flex-col gap-5 mt-8">
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: '#FFFFFF',
                borderRadius: 12,
                padding: '18px 22px',
                display: 'flex',
                gap: 18,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              }}
            >
              <div className="step-num">{s.n}</div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-bold text-[17px] mb-2"
                  style={{ color: '#3A9E5F' }}
                >
                  {s.icon} {s.title}
                </p>
                <p className="text-[15px] mb-4" style={{ color: '#666666', lineHeight: 1.7 }}>
                  {s.body}
                </p>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid #E5DDD5' }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2.5"
                    style={{ borderBottom: '1px solid #E5DDD5', background: '#F4EFEA' }}
                  >
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#D94040' }}>
                      ❌ ก่อน
                    </span>
                    <span className="text-[13px]" style={{ color: '#666666' }}>
                      {s.before}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#FFFFFF' }}>
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#3A9E5F' }}>
                      ✅ หลัง
                    </span>
                    <span className="text-[13px]" style={{ color: '#1A1A1A' }}>
                      {s.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
