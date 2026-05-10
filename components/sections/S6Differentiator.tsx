const cards = [
  {
    num: '01',
    icon: '🇹🇭',
    headline: 'ตัวอย่างทุกอันเป็น "ภาษาไทย" จริง',
    body: 'ไม่ใช่ Apple / Tesla / Coca-Cola — แต่เป็นเซรั่มสิว ครีมกันแดด อาหารหมา รับสร้างบ้าน คอร์สออนไลน์ ทุกตัวอย่างจากตลาดไทยที่คุณขายอยู่จริง',
  },
  {
    num: '02',
    icon: '📐',
    headline: 'มี "สูตร" ให้กรอกคำได้ทันที',
    body: 'ไม่ใช่แนวคิดลอย ๆ — ทุกบทมีโครงให้กรอก เปิดมาก็ใช้ได้เลย ไม่ต้องตีความ ไม่ต้องคิดเอง',
  },
  {
    num: '03',
    icon: '🤖',
    headline: 'เขียนคู่กับ AI ได้',
    body: '24 บทออกแบบให้ใช้ร่วมกับ ChatGPT/Claude — มี Prompt 30 ชุดที่ทดสอบจริง ไม่ใช่บอกแค่ "ลองถาม AI ดูสิ"',
  },
  {
    num: '04',
    icon: '💸',
    headline: 'ลงทุนครั้งเดียว ใช้ได้ตลอดชีพ',
    body: 'ไม่ใช่ subscription รายเดือน — จ่าย 990 บาทครั้งเดียว อัปเดต lifetime เพิ่มบทใหม่ฟรี',
  },
]

export default function S6Differentiator() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="diff-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">ความต่าง</span>
          <h2
            id="diff-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            แล้วเล่มนี้ต่างจากคอร์สอื่นยังไง?
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            4 เหตุผลที่ทำให้บทเรียนนี้ &ldquo;ใช้ได้จริง&rdquo; กับธุรกิจไทย
          </p>
        </div>

        {/* Diff items */}
        <div className="flex flex-col gap-3 mt-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex gap-3.5 p-5 rounded-lg"
              style={{ background: 'var(--bg-soft)' }}
            >
              <span className="text-[24px] shrink-0" aria-hidden="true">{card.icon}</span>
              <div>
                <div
                  className="font-semibold mb-0.5"
                  style={{ fontSize: 12, color: 'var(--ink-mute)' }}
                >
                  {card.num}
                </div>
                <h3
                  className="font-semibold leading-snug mb-1"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 17,
                    color: 'var(--ink)',
                  }}
                >
                  {card.headline}
                </h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--ink-soft)' }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Yellow callout */}
        <div className="callout yellow mt-6" role="note">
          <span className="text-[22px] shrink-0" aria-hidden="true">💡</span>
          <p className="text-[15px]">
            ถ้าอยากได้ &ldquo;คู่มือเขียนคำที่ทำให้คนซื้อ ในบริบทตลาดไทย&rdquo;
            {' '}— เล่มนี้คือเล่มที่คุณกำลังหา
          </p>
        </div>

      </div>
    </section>
  )
}
