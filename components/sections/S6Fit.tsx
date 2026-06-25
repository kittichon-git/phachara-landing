const forItems = [
  'มีสินค้าดี แต่โพสต์ขายแล้วยอดขายไม่นิ่ง',
  'ทำคอนเทนต์วิดีโอ/คลิปสั้น แต่อยากให้ "คำ" ในคลิปและแคปชั่นขายได้ขึ้น',
  <>ขยันโพสต์ แต่รู้สึกว่าตัวเองกำลัง<br /><span className="thai-nowrap">&ldquo;อธิบายสินค้า&rdquo;</span>{' '}มากกว่า{' '}<span className="thai-nowrap">&ldquo;ทำให้อยากซื้อ&rdquo;</span></>,
  'อยากได้สูตรและ Template ไปปรับใช้ทันที ไม่อยากเริ่มจากกระดาษเปล่า',
  'อยากให้ลูกค้าทักมาด้วยความอยากได้ ไม่ใช่ทักมาเพราะโดนตื๊อ',
]
const notForItems = [
  'แค่อยากก๊อปปี้วาง โดยไม่คิดจะปรับให้เข้ากับสินค้าของตัวเอง',
  'หวังสูตรรวยทางลัด หรือต้องการการันตียอดขายข้ามคืนโดยไม่ลงมือทำ',
  'ไม่สนใจว่าทำไมลูกค้าถึงซื้อ ขอแค่ตั้งหน้าตั้งตาขายอย่างเดียว',
  'ไม่อยากลงมือแก้โพสต์ หรือไม่ชอบทดลองปรับคำ',
]

export default function S6Fit() {
  return (
    <section id="fit" style={{ padding: '80px 24px', background: '#F4EFEA' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* No section-label — reference doesn't have one for fit */}
        <div className="text-center">
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}
          >
            เช็คก่อนว่าบทเรียนนี้เหมาะกับคุณไหม?
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginTop: 36,
          }}
        >
          {/* Yes box */}
          <div
            style={{
              background: '#EAF7EE',
              border: '1.5px solid #A8D8B9',
              borderRadius: 12,
              padding: '28px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 16,
                fontWeight: 800,
                padding: '10px 16px',
                borderRadius: 8,
                marginBottom: 20,
                background: '#3A9E5F',
                color: '#fff',
              }}
            >
              ✅ เหมาะมาก ถ้าคุณ:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {forItems.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15 }}
                >
                  <span style={{ fontSize: 16, marginTop: 2, flexShrink: 0 }}>✅</span>
                  <span style={{ flex: 1, minWidth: 0, overflowWrap: 'anywhere', wordBreak: 'break-word', lineHeight: 1.65 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* No box */}
          <div
            style={{
              background: '#FDEAEA',
              border: '1.5px solid #F0AAAA',
              borderRadius: 12,
              padding: '28px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 16,
                fontWeight: 800,
                padding: '10px 16px',
                borderRadius: 8,
                marginBottom: 20,
                background: '#D94040',
                color: '#fff',
              }}
            >
              ❌ ไม่เหมาะเลย ถ้าคุณ:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {notForItems.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15 }}
                >
                  <span style={{ fontSize: 16, marginTop: 2, flexShrink: 0 }}>❌</span>
                  <span style={{ flex: 1, minWidth: 0, overflowWrap: 'anywhere', wordBreak: 'break-word', lineHeight: 1.65 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
