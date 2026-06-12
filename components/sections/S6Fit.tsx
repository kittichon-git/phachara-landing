const forItems = [
  'โพสต์ขายได้บ้าง แต่ไม่รู้ว่า "ทำไม" บางโพสต์ปังบางโพสต์เงียบ',
  'เบื่อก็อปแคปชันคนอื่นมาใช้ แล้วมันไม่เวิร์กกับสินค้าตัวเอง',
  'อยากให้ลูกค้า "อยากทักเอง" ไม่ใช่ต้องตามตื๊อ',
  'เป็นเจ้าของแบรนด์หรือฟรีแลนซ์ที่ต้องเขียนขายสินค้าตัวเอง',
  'อยากได้ทักษะ "ใช้คำ" ที่ติดตัว ใช้ได้กับทุกสินค้าในอนาคต',
]
const notForItems = [
  'อยากได้แค่ "แคปชันสำเร็จรูป" ไปก็อปวาง',
  'ไม่สนใจว่าทำไมลูกค้าซื้อ ขอแค่ยอด',
  'คิดว่าโพสต์ขายดี = เขียนสวย เขียนยาว',
  'ไม่เชื่อว่า "คำที่เลือกใช้" มีผลต่อการตัดสินใจ',
  'ไม่อยากลงมือปรับคำเอง รออ่านเฉยๆ',
]

export default function S6Fit() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
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
          บทเรียนนี้เหมาะกับคุณไหม?
        </h2>

        <div className="flex flex-col gap-4">
          {/* For */}
          <div
            className="card"
            style={{ borderColor: 'rgba(61,165,169,0.3)' }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'var(--teal)' }}
            >
              ✅ เหมาะกับใคร
            </p>
            <ul className="flex flex-col gap-3">
              {forItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px]"
                  style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}
                >
                  <span
                    style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 3 }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div
            className="card"
            style={{ borderColor: 'rgba(107,122,144,0.2)' }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'var(--ink-mute)' }}
            >
              ❌ ไม่เหมาะกับใคร
            </p>
            <ul className="flex flex-col gap-3">
              {notForItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px]"
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
