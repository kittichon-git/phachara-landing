const cards = [
  {
    icon: '🇹🇭',
    headline: 'ตัวอย่างทุกอันเป็น "ภาษาไทย" จริง',
    body: 'ไม่ใช่ Apple / Tesla / Coca-Cola — แต่เป็นเซรั่มสิว ครีมกันแดด อาหารหมา รับสร้างบ้าน คอร์สออนไลน์ ทุกตัวอย่างจากตลาดไทยที่คุณขายอยู่จริง',
  },
  {
    icon: '📐',
    headline: 'มี "สูตร" ให้กรอกคำได้ทันที',
    body: 'ไม่ใช่แนวคิดลอย ๆ — ทุกบทมีโครงให้กรอก เปิดมาก็ใช้ได้เลย ไม่ต้องตีความ ไม่ต้องคิดเอง',
  },
  {
    icon: '🤖',
    headline: 'เขียนคู่กับ AI ได้',
    body: '24 บทออกแบบให้ใช้ร่วมกับ ChatGPT/Claude — มี Prompt 30 ชุดที่ทดสอบจริง ไม่ใช่บอกแค่ "ลองถาม AI ดูสิ"',
  },
  {
    icon: '💸',
    headline: 'ลงทุนครั้งเดียว ใช้ได้ตลอดชีพ',
    body: 'ไม่ใช่ subscription รายเดือน — จ่าย 990 บาทครั้งเดียว อัปเดต lifetime เพิ่มบทใหม่ฟรี',
  },
]

export default function S6Differentiator() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="diff-headline">
      <div className="max-w-4xl mx-auto">
        <h2
          id="diff-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          แล้วเล่มนี้ต่างจากคอร์สอื่นยังไง?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.icon}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4"
            >
              <span className="text-4xl shrink-0" aria-hidden="true">{card.icon}</span>
              <div>
                <p className="font-bold text-gray-900 leading-snug mb-2">{card.headline}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          ถ้าอยากได้ &ldquo;คู่มือเขียนคำที่ทำให้คนซื้อ ในบริบทตลาดไทย&rdquo; — เล่มนี้คือเล่มที่คุณกำลังหา
        </p>
      </div>
    </section>
  )
}
