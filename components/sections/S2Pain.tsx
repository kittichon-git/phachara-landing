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
      className="py-16 sm:py-24 px-5"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(216,200,169,0.18) 30%, transparent)' }}
      aria-labelledby="pain-headline"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 block">มาดูกันก่อน</span>
          <h2
            id="pain-headline"
            className="text-[clamp(28px,4.5vw,42px)] font-bold leading-snug mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            คุณเคยรู้สึกแบบนี้ไหม?
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--ink-soft)' }}>
            ถ้ามีข้อใดข้อหนึ่งคือคุณ — บทเรียนนี้ทำขึ้นเพื่อคุณโดยตรง
          </p>
        </div>

        {/* Cards 5 + trigger card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.icon}
              className="rounded-[18px] p-6 border transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: '#fbf6ec',
                borderColor: 'var(--rule)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <span className="text-[26px] mb-3 block" style={{ filter: 'saturate(0.85)' }} aria-hidden="true">
                {card.icon}
              </span>
              <h3
                className="text-[18.5px] font-bold leading-[1.45] mb-2.5"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
              >
                {card.headline}
              </h3>
              <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-soft)' }}>
                {card.body}
              </p>
            </div>
          ))}

          {/* Trigger card */}
          <div
            className="rounded-[18px] p-6 border transition-transform duration-200 hover:-translate-y-0.5 sm:col-span-2 lg:col-span-1"
            style={{
              background: 'linear-gradient(160deg, #fbf6ec, #f7e7d8)',
              borderColor: 'rgba(194,84,42,0.25)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <span className="text-[26px] mb-3 block" aria-hidden="true">💬</span>
            <h3
              className="text-[18.5px] font-bold leading-[1.45] mb-2.5"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)' }}
            >
              ถ้าตรงสักข้อ — อ่านต่อ
            </h3>
            <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-soft)' }}>
              ปัญหาคือ &ldquo;คำ&rdquo; ที่ใช้ยังไม่กระตุ้นการตัดสินใจของคนซื้อ — เราจะเปลี่ยนตรงนี้ทั้งหมด
            </p>
          </div>
        </div>

        {/* Pain closer */}
        <div
          className="text-center max-w-2xl mx-auto mt-14 px-7 py-8 rounded-[22px] border relative"
          style={{
            background: 'var(--accent-bg)',
            borderColor: 'rgba(194,84,42,0.18)',
          }}
        >
          <p
            className="text-[clamp(19px,2.8vw,24px)] leading-[1.5] font-semibold"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            ปัญหาไม่ใช่ที่คุณ — ปัญหาคือ{' '}
            <strong style={{ color: 'var(--accent)' }}>&ldquo;คำ&rdquo;</strong>{' '}
            ที่ใช้ยังไม่ทริกเกอร์การตัดสินใจของคนซื้อ
          </p>
          <small
            className="block mt-2.5 text-[15px] font-normal"
            style={{ color: 'var(--ink-soft)' }}
          >
            และเราจะเปลี่ยนตรงนี้ทั้งหมด
          </small>
        </div>

      </div>
    </section>
  )
}
