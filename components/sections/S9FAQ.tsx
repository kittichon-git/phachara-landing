const faqs = [
  {
    q: 'เป็นวิดีโอ หรือเนื้อหาอ่าน?',
    a: 'เป็นเนื้อหาอ่านออนไลน์ ออกแบบให้อ่านสั้นๆ และหยิบ Template ไปใช้ได้เร็วกว่าการเปิดดูวิดีโอยาวๆ',
  },
  {
    q: 'ไม่มีพื้นฐานเขียนหรือการตลาด เรียนได้ไหม?',
    a: 'ได้ครับ เนื้อหาให้สูตร + ตัวอย่างก่อน–หลัง เพื่อให้เริ่มปรับคำกับสินค้าของตัวเองได้ทันที',
  },
  {
    q: 'อ่านบนมือถือได้ไหม มีวันหมดอายุไหม?',
    a: 'อ่านได้บนมือถือผ่าน LINE / Browser และเข้าถึงได้ตลอดชีพ',
  },
  {
    q: 'มีตัวอย่างให้เอาไปใช้เลยไหม?',
    a: 'มีครบ ทั้ง 100+ Template, 50+ Hook Formulas และ Prompt Library 30 ชุด',
  },
  {
    q: 'ใช้กับลูกค้าคนไทยได้จริงไหม?',
    a: 'ตัวอย่างเขียนจากบริบทการขายของออนไลน์ในไทย เน้นภาษาที่คนไทยอ่านแล้วเข้าใจง่าย',
  },
  {
    q: 'เป็นหนังสือจัดส่งหรือไม่?',
    a: 'ไม่ใช่หนังสือจัดส่ง เป็นบทเรียนออนไลน์ อ่านได้ทันทีหลังเข้าถึง',
  },
]

export default function S9FAQ() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: '#F4EFEA' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        {/* Guarantee banner */}
        <div
          className="rounded-xl p-6 mb-12"
          style={{
            background: '#EAF7EE',
            border: '1px solid #A8D8B9',
          }}
        >
          <p
            className="font-bold text-[17px] mb-1"
            style={{ color: '#3A9E5F' }}
          >
            🛡️ พิสูจน์ด้วยตัวเอง ⬇️ ทดลองอ่านฟรี ∞ ไม่ต้องเสี่ยงจ่ายก่อน
          </p>
          <p className="text-[15px]" style={{ color: '#444444', lineHeight: 1.75 }}>
            คุณไม่ต้องรับความเสี่ยงใดๆ เริ่มต้นอ่าน 2 บทแรกได้ฟรี
            เพื่อพิสูจน์ว่า &ldquo;คำ&rdquo; ช่วยเพิ่มยอดขายได้จริง ก่อนตัดสินใจ
          </p>
        </div>

        <span className="section-label">คำถามที่พบบ่อย</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 24,
          }}
        >
          มีคำถามอยู่ในใจ?
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                <span>{q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p className="faq-a">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
