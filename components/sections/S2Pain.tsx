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
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="pain-headline">
      <div className="max-w-4xl mx-auto">
        <h2
          id="pain-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          คุณเคยรู้สึกแบบนี้ไหม?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <div
              key={card.icon}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3${i === 4 ? ' sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="text-4xl" aria-hidden="true">{card.icon}</span>
              <p className="font-bold text-gray-900 leading-snug">{card.headline}</p>
              <p className="text-gray-500 text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto">
          ปัญหาไม่ใช่ที่คุณ — ปัญหาคือ{' '}
          <strong className="text-gray-900">&ldquo;คำ&rdquo;</strong>{' '}
          ที่ใช้ยังไม่ทริกเกอร์การตัดสินใจของคนซื้อ
          <br />
          และเราจะเปลี่ยนตรงนี้ทั้งหมด
        </p>
      </div>
    </section>
  )
}
