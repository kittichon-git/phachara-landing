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
    <section className="px-5 py-14" style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        <span className="section-label">เช็กก่อนตัดสินใจ</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px,5vw,28px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 24 }}>
          บทเรียนนี้เหมาะกับคุณไหม?
        </h2>

        <div className="flex flex-col gap-4">
          <div className="card" style={{ borderColor: 'rgba(61,165,169,0.3)' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>✅ เหมาะกับใคร</p>
            <ul className="flex flex-col gap-2.5">
              {forItems.map(item => (
                <li key={item} className="flex items-start gap-2 text-[15px]" style={{ color: 'var(--ink-soft)' }}>
                  <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ borderColor: 'rgba(107,122,144,0.3)' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--ink-mute)' }}>❌ ไม่เหมาะกับใคร</p>
            <ul className="flex flex-col gap-2.5">
              {notForItems.map(item => (
                <li key={item} className="flex items-start gap-2 text-[15px]" style={{ color: 'var(--ink-mute)' }}>
                  <span style={{ flexShrink: 0, marginTop: 2 }}>✕</span>
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
