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
    <section className="py-16 sm:py-24 px-5" aria-labelledby="diff-headline">
      <div className="max-w-5xl mx-auto">

        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 block">ความต่าง</span>
          <h2
            id="diff-headline"
            className="text-[clamp(28px,4.5vw,42px)] font-bold leading-snug mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            แล้วเล่มนี้ต่างจากคอร์สอื่นยังไง?
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--ink-soft)' }}>
            4 เหตุผลที่ทำให้บทเรียนนี้ &ldquo;ใช้ได้จริง&rdquo; กับธุรกิจไทย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="rounded-[22px] p-8 border transition-transform duration-200 hover:-translate-y-1 relative"
              style={{
                background: '#fbf6ec',
                borderColor: 'var(--rule)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div
                className="text-[14px] font-bold tracking-[0.1em] mb-1.5"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)' }}
              >
                {card.num}
              </div>
              <span className="text-[32px] mb-3.5 block" style={{ filter: 'saturate(0.9)' }} aria-hidden="true">
                {card.icon}
              </span>
              <h3
                className="text-[21px] font-bold leading-[1.35] mb-3"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
              >
                {card.headline}
              </h3>
              <p className="text-[15.5px] leading-[1.7]" style={{ color: 'var(--ink-soft)' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-12 text-[clamp(19px,2.4vw,22px)] leading-[1.55] font-semibold max-w-[640px] mx-auto"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
        >
          ถ้าอยากได้ &ldquo;คู่มือเขียนคำที่ทำให้คนซื้อ ในบริบทตลาดไทย&rdquo;
          <br />— เล่มนี้คือเล่มที่คุณกำลังหา
        </p>

      </div>
    </section>
  )
}
