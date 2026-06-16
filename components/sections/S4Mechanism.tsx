const steps = [
  {
    n: '01',
    icon: '👁️',
    title: 'สะกดสายตา (Hook)',
    desc: 'เปลี่ยนประโยคแรกให้ดึงดูด จนลูกค้าไม่อยากเลื่อนผ่าน',
  },
  {
    n: '02',
    icon: '🤝',
    title: 'สร้างความเชื่อใจ (Trust)',
    desc: <>ใช้คำอธิบายที่เห็นภาพ <span className="thai-nowrap">ตัดความลังเล</span> และทำให้ลูกค้าเชื่อมั่น</>,
  },
  {
    n: '03',
    icon: '⚡',
    title: 'กระตุ้นการตัดสินใจ (Action)',
    desc: 'วางประโยคปิดการขายให้เนียน จนลูกค้าโอนเงินโดยไม่ต้องยัดเยียด',
  },
]

export default function S4Mechanism() {
  return (
    <section id="mechanism" style={{ padding: '80px 24px', background: '#FDFBF7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div className="text-center">
          <span className="section-label">วิธีใหม่</span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}
          >
            3 ขั้นตอนเปลี่ยน{' '}
            <span className="thai-nowrap">&ldquo;คำธรรมดา&rdquo;</span>{' '}
            <span className="thai-nowrap">เป็น &ldquo;คำทำเงิน&rdquo;</span>
          </h2>
        </div>

        {/* Steps grid — 3 columns on desktop, 1 on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            marginTop: 40,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: '#FFFFFF',
                borderRadius: 12,
                padding: '32px 24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {/* Large background number */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -10,
                  right: 10,
                  fontSize: 90,
                  fontWeight: 800,
                  color: '#E87A3D',
                  opacity: 0.08,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  fontFamily: 'Sarabun, sans-serif',
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
              <div className="step-num">{s.n}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</div>
              <p style={{ fontSize: 15, color: '#666666', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
