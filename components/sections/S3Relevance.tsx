const pains = [
  {
    id: 'p1',
    bold: 'โพสต์ทุกวัน แต่คนเลื่อนผ่าน — ไลค์ก็แทบไม่มี',
    rest: '',
  },
  {
    id: 'p2',
    bold: 'มีคนทักมาถามราคา... พอตอบไป ก็เงียบหาย',
    rest: '',
  },
  {
    id: 'p3',
    bold: 'มีแต่ "ขอดูก่อนนะคะ" แล้วไม่กลับมาอีก',
    rest: '',
  },
  {
    id: 'p4',
    bold: 'ลดราคาจนแทบไม่เหลือกำไร ก็ยังสู้ร้านอื่นไม่ได้',
    rest: '',
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
            ถ้าโพสต์ยังเงียบ...<br />ปัญหาอาจไม่ได้อยู่ที่สินค้า
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
            คุณขยันโพสต์ทุกวัน สินค้าคุณก็ดี แต่ยอดกลับเงียบลงเรื่อยๆ
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

        {/* บรรทัดเฉลย */}
        <p
          className="thai-pretty"
          style={{
            fontSize: 16,
            color: '#666666',
            marginBottom: 28,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.65,
            textAlign: 'center',
          }}
        >
          สังเกตไหม — ทั้งหมดนี้ไม่ได้แปลว่าสินค้าไม่ดี หรือคุณขายไม่เก่ง<br />
          ปัญหาอาจอยู่ที่{' '}
          <em style={{ fontStyle: 'normal', color: '#E87A3D', fontWeight: 800 }}>&ldquo;คำ&rdquo;</em>
          {' '}ในโพสต์ — ยังไม่ทำให้ลูกค้า <strong>หยุดอ่าน เข้าใจ และอยากถามต่อ</strong>
        </p>

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
          คุณอาจคุมตลาดหรือร้านอื่นไม่ได้ — แต่เปลี่ยน{' '}
          <em style={{ fontStyle: 'normal', color: '#E87A3D', fontWeight: 800 }}>&ldquo;คำ&rdquo;</em>
          {' '}ในโพสต์ของตัวเองได้<br />และนี่คือวิธีแก้
        </div>
      </div>
    </section>
  )
}
