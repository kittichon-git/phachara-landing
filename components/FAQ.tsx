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
    <section className="py-16 sm:py-24 px-5" aria-labelledby="faq-headline">
      <div className="max-w-5xl mx-auto">

        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 block">คำถามที่พบบ่อย</span>
          <h2
            id="faq-headline"
            className="text-[clamp(28px,4.5vw,42px)] font-bold leading-snug mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            มีคำถามอยู่ในใจ?
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--ink-soft)' }}>
            รวม 8 คำถามที่คนถามบ่อยที่สุด — ถ้าไม่เจอที่อยากถาม ทักไลน์ได้เลย
          </p>
        </div>

        <div className="max-w-[800px] mx-auto" style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group"
              style={{ borderBottom: '1px solid var(--rule)' }}
            >
              <summary
                className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none font-semibold text-[17.5px] leading-[1.5]"
                style={{
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                <span>{q}</span>
                {/* +/× toggle */}
                <span
                  className="shrink-0 w-7 h-7 rounded-full border grid place-items-center text-[16px] transition-all duration-200 group-open:rotate-45 group-open:text-white"
                  style={{
                    borderColor: 'var(--rule)',
                    color: 'var(--ink-soft)',
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p
                className="pb-5 text-[15.5px] leading-[1.75] pr-3"
                style={{ color: 'var(--ink-soft)' }}
              >
                {a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
