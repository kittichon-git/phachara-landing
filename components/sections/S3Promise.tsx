import LineCTAButton from '@/components/LineCTAButton'

const outcomes = [
  'มี <strong>Hook 30 แบบ</strong> ที่ใช้เปิดแคปชั่น/แอด แล้วคนหยุดเลื่อน',
  'รู้ <strong>สูตร 4 ส่วน</strong> ที่ทำให้หน้าเพจขายปิดได้โดยไม่ต้องดราม่า',
  'มี <strong>Power Words 100 คำ</strong> ภาษาไทย ที่กระตุ้น action ได้จริง',
  'ปรับ <strong>CTA ปุ่มเดียว</strong> ให้ click rate เพิ่ม 2-5 เท่าได้ทันที',
  'มี <strong>Swipe File</strong> อีเมล/แคปชั่น/แอด ที่ก๊อปไปปรับชื่อสินค้าได้เลย',
]

export default function S3Promise() {
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="promise-headline">
      <div className="max-w-3xl mx-auto">
        <h2
          id="promise-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          หลังอ่านจบ คุณจะ...
        </h2>

        <ul className="space-y-4 mb-10">
          {outcomes.map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-800 text-lg">
              <span className="text-[var(--line-green)] text-xl mt-0.5" aria-hidden="true">✅</span>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 mb-6">
          อยากดูตัวอย่างก่อน? →{' '}
          <strong>แอด LINE รับ 3 บทแรก</strong>
        </p>

        <div className="flex justify-center">
          <LineCTAButton position="hero" size="md" label="ดูตัวอย่าง 3 บทแรก → แอด LINE" />
        </div>
      </div>
    </section>
  )
}
