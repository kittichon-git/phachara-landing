const forItems = [
  'มีสินค้าดี แต่โพสต์ขายแล้วยอดขายไม่นิ่ง',
  'ขยันโพสต์ แต่รู้สึกว่าตัวเองกำลัง "อธิบายสินค้า" มากกว่า "ทำให้อยากซื้อ"',
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
    <section
      className="px-5 py-20"
      style={{ background: '#F4EFEA' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <span className="section-label">เช็กก่อนตัดสินใจ</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 24,
          }}
        >
          เช็คก่อนว่าบทเรียนนี้เหมาะกับคุณไหม?
        </h2>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {/* For */}
          <div
            className="rounded-xl"
            style={{
              background: '#EAF7EE',
              border: '1.5px solid #A8D8B9',
              padding: '28px 24px',
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg mb-5"
              style={{
                background: '#3A9E5F',
                color: '#fff',
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              ✅ เหมาะมาก ถ้าคุณ:
            </div>
            <ul className="flex flex-col gap-3">
              {forItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px]"
                  style={{ color: '#444444', lineHeight: 1.6 }}
                >
                  <span style={{ color: '#3A9E5F', flexShrink: 0, marginTop: 3 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div
            className="rounded-xl"
            style={{
              background: '#FDEAEA',
              border: '1.5px solid #F0AAAA',
              padding: '28px 24px',
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg mb-5"
              style={{
                background: '#D94040',
                color: '#fff',
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              ❌ ไม่เหมาะเลย ถ้าคุณ:
            </div>
            <ul className="flex flex-col gap-3">
              {notForItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px]"
                  style={{ color: '#666666', lineHeight: 1.6 }}
                >
                  <span style={{ flexShrink: 0, marginTop: 3 }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
