const faqs = [
  {
    q: '1. เป็นวิดีโอ หรือเนื้อหาอ่าน?',
    a: 'เป็นเนื้อหาอ่านออนไลน์ ออกแบบให้อ่านสั้นๆ และหยิบ Template ไปใช้ได้เร็วกว่าการเปิดดูวิดีโอยาวๆ',
  },
  {
    q: '2. ไม่มีพื้นฐานเขียนหรือการตลาด เรียนได้ไหม?',
    a: 'ได้ครับ เนื้อหาให้สูตร + ตัวอย่างก่อน–หลัง เพื่อให้เริ่มปรับคำกับสินค้าของตัวเองได้ทันที',
  },
  {
    q: '3. อ่านบนมือถือได้ไหม มีวันหมดอายุไหม?',
    a: 'อ่านได้บนมือถือผ่าน LINE / Browser และเข้าถึงได้ตลอดชีพ',
  },
  {
    q: '4. มีตัวอย่างให้เอาไปใช้เลยไหม?',
    a: 'มีครบ ทั้ง 100+ Template, 50+ Hook Formulas และ Prompt Library 30 ชุด',
  },
  {
    q: '5. ใช้กับลูกค้าคนไทยได้จริงไหม?',
    a: 'ตัวอย่างเขียนจากบริบทการขายของออนไลน์ในไทย เน้นภาษาที่คนไทยอ่านแล้วเข้าใจง่าย',
  },
  {
    q: '6. เป็นหนังสือจัดส่งหรือไม่?',
    a: 'ไม่ใช่หนังสือจัดส่ง เป็นบทเรียนออนไลน์ อ่านได้ทันทีหลังเข้าถึง',
  },
]

export default function S9FAQ() {
  return (
    <section id="faq" style={{ padding: '80px 24px', background: '#F4EFEA' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        <div className="text-center" style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            คำถามที่พบบ่อย
          </h2>
        </div>

        {/* Guarantee banner */}
        <div
          style={{
            background: '#EAF7EE',
            border: '1.5px solid #A8D8B9',
            borderRadius: 12,
            padding: 24,
            marginBottom: 48,
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 700, color: '#3A9E5F', marginBottom: 8 }}>
            🛡️ พิสูจน์ด้วยตัวเอง ⬇️ ทดลองอ่านฟรี ∞{' '}
            <span className="thai-nowrap">ไม่ต้องเสี่ยงจ่ายก่อน</span>
          </p>
          <p className="thai-pretty" style={{ fontSize: 15, color: '#444444', lineHeight: 1.6, margin: 0 }}>
            คุณไม่ต้องรับความเสี่ยงใดๆ เริ่มต้นอ่าน 2 บทแรกได้ฟรี
            เพื่อพิสูจน์ว่า &ldquo;คำ&rdquo; ช่วยเพิ่มยอดขายได้จริง ก่อนตัดสินใจ
          </p>
        </div>

        <div className="faq-list">
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
