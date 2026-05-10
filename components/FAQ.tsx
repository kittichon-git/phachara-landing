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
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">คำถามที่พบบ่อย</span>
          <h2
            id="faq-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            มีคำถามอยู่ในใจ?
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            ถ้าไม่เจอคำถามที่อยากถาม ทักไลน์มาคุยกันได้เลย
          </p>
        </div>

        <div className="mt-6" style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                <span>{q}</span>
                <span className="faq-icon" aria-hidden="true">›</span>
              </summary>
              <p className="faq-a">{a}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
