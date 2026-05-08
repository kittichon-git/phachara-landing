import LineCTAButton from '@/components/LineCTAButton'

const fitItems = [
  'ขายของออนไลน์อยู่แล้ว แต่ยอดไม่นิ่ง — เดือนนี้ดี เดือนหน้าหาย',
  'เป็นเจ้าของแบรนด์เล็ก ไม่มีงบจ้าง copywriter เดือนละ 30,000+',
  'ยิงแอด FB/TikTok เอง อยากให้ ROAS ดีขึ้นด้วยการเปลี่ยนคำ ไม่ใช่เพิ่มงบ',
  'อยากเขียนแคปชั่นที่คนอ่านแล้วทักมาเอง ไม่ต้องไล่ตามลูกค้า',
  'เปิดร้านใหม่ อยากปิดยอดแรกใน 30 วัน',
  'ใช้ AI ช่วยเขียนอยู่แล้ว แต่ output ยัง "ดูเป็น AI" คนอ่านปุ๊บรู้ทันที',
]

const notFitItems = [
  'มองหาบทเรียนสอนยิงแอด FB Ads / Google Ads (เล่มนี้ไม่ได้สอน)',
  'มองหาบทเรียนทำเว็บ / SEO / Analytics',
  'คาดหวังจะรวยใน 7 วัน — เล่มนี้ให้ "สูตร" ที่ต้องลงมือทำ',
  'ไม่พร้อมเปิดโพสต์ขึ้นมาลองเขียนอย่างน้อยสัปดาห์ละ 3 ครั้ง',
]

export default function S3FitCheck() {
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="fitcheck-headline">
      <div className="max-w-4xl mx-auto">
        <h2
          id="fitcheck-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          บทเรียนนี้เหมาะกับใคร?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* ✅ Fit */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
            <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
              <span aria-hidden="true">✅</span> เหมาะกับคุณถ้า...
            </h3>
            <ul className="space-y-3">
              {fitItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                  <span className="text-green-500 mt-0.5 shrink-0" aria-hidden="true">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ❌ Not Fit */}
          <div className="rounded-2xl border-2 border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
              <span aria-hidden="true">❌</span> ยังไม่เหมาะถ้า...
            </h3>
            <ul className="space-y-3">
              {notFitItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                  <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mini-CTA */}
        <div className="text-center">
          <p className="text-gray-700 font-medium mb-4">ตรงกับคุณข้อใดข้อหนึ่งใช่ไหม?</p>
          <LineCTAButton
            position="s3"
            label="แอด LINE รับ 3 บทฟรี"
            size="md"
          />
        </div>
      </div>
    </section>
  )
}
