import LineCTAButton from '@/components/LineCTAButton'

const outcomes = [
  {
    icon: '✅',
    headline: 'Hook 12 ตระกูล + 50 สูตร',
    body: 'พร้อมใช้กับสินค้าตัวเอง',
  },
  {
    icon: '✅',
    headline: 'โครง 4 ส่วน',
    body: 'ที่ทำให้โพสต์/หน้าเพจ/Landing Page ปิดได้',
  },
  {
    icon: '✅',
    headline: 'คำเฉพาะ 100+ คำ ภาษาไทย',
    body: 'ที่กระตุ้น action ได้จริง',
  },
  {
    icon: '✅',
    headline: 'ปรับ CTA ให้ click rate เพิ่ม 2-5 เท่า',
    body: 'ได้ทันทีจากบทที่ 9',
  },
  {
    icon: '✅',
    headline: 'Swipe File',
    body: 'อีเมล/แคปชั่น/Landing Page ที่ก๊อปไปปรับชื่อสินค้าได้เลย',
  },
  {
    icon: '✅',
    headline: 'AI Prompt 30 ชุด',
    body: 'ให้เขียนงานคุณภาพมือโปรในเวลา 15 นาที',
  },
]

export default function S3Promise() {
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="promise-headline">
      <div className="max-w-4xl mx-auto">
        <h2
          id="promise-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          หลังอ่านจบ 24 บท คุณจะ...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {outcomes.map((item) => (
            <div
              key={item.headline}
              className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100"
            >
              <span className="text-[var(--line-green)] text-xl shrink-0 mt-0.5" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="font-bold text-gray-900 leading-snug">{item.headline}</p>
                <p className="text-gray-500 text-sm mt-1">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mb-6">
          อยากดูตัวอย่างก่อน? → <strong>แอด LINE รับ 3 บทแรก</strong>
        </p>

        <div className="flex justify-center">
          <LineCTAButton
            position="s4"
            label="แอด LINE รับ 3 บทแรกฟรี"
            size="md"
          />
        </div>
      </div>
    </section>
  )
}
