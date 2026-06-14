const pains = [
  {
    id: 'p1',
    bold: 'ยิงแอดแพง แต่คนเลื่อนผ่านใน 1 วิ',
    rest: ' — เพราะคำเปิดโพสต์ ไม่เกี่ยวอะไรกับเขา',
  },
  {
    id: 'p2',
    bold: 'คนหยุดอ่าน แต่จบแล้วก็เงียบ',
    rest: ' — เพราะคำที่คุณใช้ แค่ "อธิบาย" แต่ไม่ได้ทำให้ "อยากซื้อ"',
  },
  {
    id: 'p3',
    bold: <>อธิบายจนเหนื่อย แต่ลูกค้าตอบ <span className="thai-nowrap">&ldquo;ขอดูก่อน&rdquo;</span></>,
    rest: <> — เพราะไม่มีคำที่ช่วย<span className="thai-nowrap">ตัดความลังเล</span></>,
  },
  {
    id: 'p4',
    bold: 'สินค้าดีกว่าคู่แข่ง แต่ไม่มีใครถาม',
    rest: ' — เพราะคุณไม่ได้เปิดช่องให้เขาเริ่มคุย',
  },
]

export default function S3Relevance() {
  return (
    <section id="problem" style={{ padding: '80px 24px', background: '#F4EFEA' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        <div className="text-center">
          <span className="section-label">ปัญหา</span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}
          >
            ถ้าโพสต์ยังเงียบ...<br />ปัญหาไม่ได้อยู่ที่สินค้า
          </h2>
          <p
            className="thai-pretty"
            style={{
              fontSize: 17,
              color: '#666666',
              marginBottom: 32,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
            }}
          >
            คุณขยันโพสต์ทุกวัน สินค้าก็ดีจริง แต่ยอดขายกลับลดลงเรื่อยๆ<br />
            ไม่ใช่เพราะคุณขายไม่เก่ง แต่เพราะตลาดเปลี่ยนไป และ{' '}
            <strong>&ldquo;คำเดิม&rdquo;</strong> ไม่ทำงานอีกแล้ว:
          </p>
        </div>

        {/* Problem cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {pains.map((p) => (
            <div
              key={p.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 12,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              }}
            >
              <div className="problem-icon">✕</div>
              <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0 }}>
                <strong>{p.bold}</strong>{p.rest}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          style={{
            background: '#FFF0E6',
            border: '1.5px solid #F5C9A8',
            borderRadius: 12,
            padding: '20px 28px',
            textAlign: 'center',
            fontSize: 17,
            fontWeight: 600,
            lineHeight: 1.6,
          }}
        >
          💡 คุณคุมตลาดและคู่แข่งไม่ได้{' '}
          <span style={{ whiteSpace: 'nowrap' }}>แต่คุณเปลี่ยน{' '}
          <em style={{ fontStyle: 'normal', color: '#E87A3D', fontWeight: 800 }}>&ldquo;คำ&rdquo;</em></span>{' '}
          ในโพสต์ของคุณได้ และนี่คือวิธีแก้
        </div>
      </div>
    </section>
  )
}
