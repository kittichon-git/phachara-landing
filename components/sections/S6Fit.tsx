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
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 680 }}>
        <span className="section-label">เช็กก่อนตัดสินใจ</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
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
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(61,165,169,0.06)',
              border: '1.5px solid rgba(61,165,169,0.3)',
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-5"
              style={{
                background: 'var(--teal)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
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
                  style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}
                >
                  <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 3 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(194,84,42,0.05)',
              border: '1.5px solid rgba(194,84,42,0.25)',
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-5"
              style={{
                background: 'var(--rust)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
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
                  style={{ color: 'var(--ink-mute)', lineHeight: 1.6 }}
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
