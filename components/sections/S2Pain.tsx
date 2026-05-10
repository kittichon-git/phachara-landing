const cards = [
  {
    icon: '📉',
    headline: '"ยิงแอดมาทั้งเดือน คนทักเยอะ — แต่ยอดเงินยังนิ่ง"',
    body: 'ค่าโฆษณาเผาทุกวัน Engagement สวย แต่กล่องเงินไม่ขยับ',
  },
  {
    icon: '😶',
    headline: '"คนกดเข้าหน้าเพจแล้วเงียบ ไม่ทักไม่ซื้อ"',
    body: 'Traffic เข้ามาแล้ว แต่เลื่อนผ่านไปเฉย ๆ ไม่มีอะไรให้หยุด',
  },
  {
    icon: '🤯',
    headline: '"เขียนเองก็ไม่ได้ จ้างคนเขียนก็แพง"',
    body: 'ติดตรงกลาง — ไม่รู้จะเริ่มจากตรงไหน ใช้คำไหนดี',
  },
  {
    icon: '💸',
    headline: '"ลดราคาแล้วเงียบ จัดโปรแล้วก็ยังเงียบ"',
    body: 'ลดจน margin บางแล้วยังขายไม่ออก เพราะปัญหาไม่ใช่ราคา',
  },
  {
    icon: '🔄',
    headline: '"เคยซื้อคอร์สมาแล้วหลายตัว แต่ยังเขียนไม่เป็น"',
    body: 'เรียนแล้วทำตามไม่ได้ — เพราะตำราเป็นภาษาฝรั่ง ไม่เข้ากับตลาดไทย',
  },
]

export default function S2Pain() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="pain-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">มาดูกันก่อน</span>
          <h2
            id="pain-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            คุณเคยรู้สึกแบบนี้ไหม?
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            ถ้ามีข้อใดข้อหนึ่งคือคุณ...
          </p>
        </div>

        {/* Pain items */}
        <div className="flex flex-col gap-[10px]">
          {cards.map((card) => (
            <div
              key={card.icon}
              className="flex gap-3.5 p-4 rounded-lg"
              style={{
                background: 'white',
                border: '1px solid var(--rule)',
              }}
            >
              <span className="text-[22px] shrink-0" aria-hidden="true">{card.icon}</span>
              <div>
                <h3
                  className="font-semibold leading-snug mb-1"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 16.5,
                    color: 'var(--ink)',
                  }}
                >
                  {card.headline}
                </h3>
                <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-soft)' }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Orange callout */}
        <div className="callout orange mt-5" role="note">
          <span className="text-[22px] shrink-0" aria-hidden="true">💬</span>
          <p className="text-[15.5px]">
            <strong>ปัญหาไม่ใช่ที่คุณ</strong> — ปัญหาคือ &ldquo;คำ&rdquo; ที่ใช้ยังไม่ทริกเกอร์การตัดสินใจของคนซื้อ
            <br />
            และเราจะเปลี่ยนตรงนี้ทั้งหมด
          </p>
        </div>

      </div>
    </section>
  )
}
