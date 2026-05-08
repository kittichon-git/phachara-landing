const faqs = [
  {
    q: 'เป็นไฟล์ PDF หรือมีแอป?',
    a: 'เป็น Web LIFF (อ่านใน LINE) + ดาวน์โหลด PDF ได้',
  },
  {
    q: 'ราคา 990 รวมอะไรบ้าง?',
    a: '24 บท + Swipe File + Template ทุกหมวด + อัปเดต lifetime',
  },
  {
    q: 'คืนเงินได้ไหม?',
    a: 'ได้ภายใน 7 วัน ถ้าอ่านไม่ถึง 3 บท',
  },
  {
    q: 'ต้องเขียนเป็นมาก่อนไหม?',
    a: 'ไม่ต้อง บทเรียนออกแบบให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้',
  },
  {
    q: 'ใช้เวลาเรียนนานแค่ไหน?',
    a: '24 บท ~10-15 นาที/บท + เริ่มลองใช้กับงานจริงได้ทันทีจากบท 9',
  },
  {
    q: 'ใช้กับธุรกิจอะไรได้บ้าง?',
    a: 'สินค้า, บริการ, บทเรียนออนไลน์, e-commerce, B2B — ทุกอย่างที่ต้องเขียนขาย',
  },
  {
    q: 'จ่ายผ่านอะไรได้บ้าง?',
    a: 'PromptPay (QR) หรือ บัตรเครดิต/เดบิต ผ่าน Stripe (ในอนาคต ผ่านจ่ายใน LINE)',
  },
  {
    q: 'ข้อมูลส่วนตัวเก็บอะไรบ้าง?',
    a: 'เก็บแค่ LINE userId (ไม่มี email/เบอร์)',
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
