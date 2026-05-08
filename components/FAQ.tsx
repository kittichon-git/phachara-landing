const faqs = [
  {
    q: 'เป็นไฟล์ PDF หรือมีแอป?',
    a: 'อ่านใน LINE (Web LIFF) + ดาวน์โหลด PDF ได้ — เปิดอ่านบนมือถือได้เลย ไม่ต้องลงแอปเพิ่ม',
  },
  {
    q: 'ราคา 990 บาท รวมอะไรบ้าง?',
    a: '24 บท + 5 ภาคผนวก (Template + Hook + Prompt + คำต้องห้าม + แผน 30 วัน) + อัปเดต lifetime',
  },
  {
    q: 'คืนเงินได้ไหม?',
    a: 'ได้ภายใน 7 วัน ถ้าอ่านไม่ถึง 3 บท — ส่งคำว่า "คืนเงิน" ใน LINE คืนให้ภายใน 24 ชม.',
  },
  {
    q: 'ต้องเขียนเป็นมาก่อนไหม?',
    a: 'ไม่ต้อง — ออกแบบมาให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้ ทุกบทมีสูตรให้กรอก',
  },
  {
    q: 'ใช้เวลาเรียนนานแค่ไหน?',
    a: '24 บท × 10-15 นาที/บท = ประมาณ 5 ชม. เรียนเสร็จใน 1 สัปดาห์ + เริ่มลองใช้ได้ตั้งแต่บท 7',
  },
  {
    q: 'ใช้กับธุรกิจอะไรได้บ้าง?',
    a: 'สินค้า, บริการ, บทเรียนออนไลน์, e-commerce, B2B — ทุกอย่างที่ต้องเขียนขาย ตัวอย่างในเล่มมีทั้งสกินแคร์ อาหารหมา รับสร้างบ้าน บทเรียนออนไลน์',
  },
  {
    q: 'จ่ายผ่านอะไรได้บ้าง?',
    a: 'PromptPay (QR) หรือ บัตรเครดิต/เดบิต ผ่าน Stripe — ปลอดภัยตามมาตรฐาน PCI',
  },
  {
    q: 'ข้อมูลส่วนตัวเก็บอะไรบ้าง?',
    a: 'เก็บแค่ LINE userId (ไม่มี email/เบอร์/บัตรประชาชน) — ลบได้ทุกเมื่อ ส่งคำว่า "ลบข้อมูล" ใน LINE',
  },
]

export default function FAQ() {
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="faq-headline">
      <div className="max-w-2xl mx-auto">
        <h2
          id="faq-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          คำถามที่พบบ่อย
        </h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none select-none font-semibold text-gray-900">
                <span>{q}</span>
                <svg
                  className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
