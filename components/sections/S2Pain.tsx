const cards = [
  {
    icon: '📉',
    headline: '"แอดยิงเงินไป engagement พุ่ง — แต่ยอดขายนิ่ง"',
    body: 'ค่าโฆษณาเผาทิ้งทุกวัน',
  },
  {
    icon: '😶',
    headline: '"คนกดเข้าหน้าเพจแล้วเงียบ ไม่ทักไม่ซื้อ"',
    body: 'traffic มาแล้ว แต่ปิดไม่ได้',
  },
  {
    icon: '🤯',
    headline: '"เขียนเองก็ไม่ได้ จ้าง copywriter ก็แพง"',
    body: 'ติดตรงกลาง ไม่รู้ทำต่อยังไง',
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.icon}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
            >
              <span className="text-4xl" aria-hidden="true">{card.icon}</span>
              <p className="font-bold text-gray-900 leading-snug">{card.headline}</p>
              <p className="text-gray-500 text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-lg font-medium">
          ปัญหาไม่ใช่ที่สินค้า — ปัญหาคือ{' '}
          <strong className="text-gray-900">คำ</strong>{' '}
          ที่คุณใช้ยังไม่ทริกเกอร์การตัดสินใจ
        </p>
      </div>
    </section>
  )
}
