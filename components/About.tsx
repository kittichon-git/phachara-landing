import NotifyButton from './NotifyButton'

const outcomes = [
  {
    icon: '🎣',
    title: 'เขียน Hook ที่หยุด Scroll',
    desc: 'เขียน hook ที่ดึงคนหยุด scroll ภายใน 3 วินาที ด้วยสูตรที่ผ่านการทดสอบจริง',
  },
  {
    icon: '💬',
    title: 'เปลี่ยนคำธรรมดาให้ "ทำเงิน"',
    desc: 'เปลี่ยนคำพูดทั่วไปให้เป็น "คำที่ทำเงิน" โดยไม่ต้องเป็นนักเขียนมืออาชีพ',
  },
  {
    icon: '📈',
    title: 'เพิ่ม Conversion 2–5 เท่า',
    desc: 'เพิ่ม conversion rate โพสขายของ 2–5 เท่า ด้วยโครงสร้างข้อความที่พิสูจน์แล้ว',
  },
  {
    icon: '📋',
    title: 'Template ใช้ได้ทันที',
    desc: 'ใช้ template ได้ทันทีกับสินค้าทุกประเภท ไม่ว่าจะขายอะไรก็ apply ได้เลย',
  },
]

const targetGroups = [
  { icon: '🛒', label: 'แม่ค้าออนไลน์' },
  { icon: '📦', label: 'ดรอปชิป' },
  { icon: '💼', label: 'Freelancer' },
  { icon: '📣', label: 'นักการตลาด' },
]

export default function About() {
  return (
    <section className="py-20 sm:py-24 bg-white" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">สิ่งที่คุณจะได้รับ</p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
            คุณจะได้เรียนรู้อะไร
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            ทักษะที่นำไปใช้ได้จริงตั้งแต่โพสแรก ไม่ต้องรอสะสมประสบการณ์หลายปี
          </p>
        </div>

        {/* Outcome grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-yellow-200 hover:bg-yellow-50/40 transition-colors"
            >
              <div className="flex-shrink-0 text-4xl leading-none mt-1" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Target audience */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-yellow-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            คอร์สนี้เหมาะกับใคร?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            คนขายของออนไลน์ทุกคน — ไม่ต้องมีประสบการณ์ด้านการตลาด
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {targetGroups.map((g) => (
              <div
                key={g.label}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-gray-900 font-semibold px-5 py-2.5 rounded-full text-base shadow-sm"
              >
                <span aria-hidden="true">{g.icon}</span>
                {g.label}
              </div>
            ))}
          </div>
          <NotifyButton className="bg-gray-900 hover:bg-gray-800 text-yellow-400 shadow-gray-900/30" />
        </div>
      </div>
    </section>
  )
}
