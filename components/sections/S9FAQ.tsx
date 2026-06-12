const faqs = [
  { q: 'เป็นวิดีโอ หรือเนื้อหาอ่าน?', a: 'เป็นเนื้อหาอ่านออนไลน์ ออกแบบให้อ่านสั้นๆ และหยิบ template ไปใช้ได้เร็วกว่าเปิดดูวิดีโอยาว' },
  { q: 'ไม่มีพื้นฐานเขียนหรือการตลาด เรียนได้ไหม?', a: 'ได้ครับ เนื้อหาให้สูตร + ตัวอย่างก่อน–หลัง เพื่อให้เริ่มปรับคำกับสินค้าของตัวเองได้' },
  { q: 'อ่านบนมือถือได้ไหม มีวันหมดอายุไหม?', a: 'อ่านได้บนมือถือผ่าน LINE / browser และเข้าถึงได้ตลอดชีพ' },
  { q: 'มีตัวอย่างให้เอาไปใช้เลยไหม?', a: 'มีครบ ทั้ง 100+ Template, 50+ Hook Formulas และ Prompt Library 30 ชุด' },
  { q: 'ใช้กับลูกค้าคนไทยได้จริงไหม?', a: 'ตัวอย่างเขียนจากบริบทการขายของออนไลน์ในไทย เน้นภาษาที่คนไทยอ่านแล้วเข้าใจง่าย' },
  { q: 'จ่ายผ่านอะไรได้บ้าง?', a: 'PromptPay (QR) หรือบัตรเครดิต/เดบิต — ปลอดภัยตามมาตรฐาน PCI' },
]

export default function S9FAQ() {
  return (
    <section className="px-5 py-14" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}>
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        {/* Risk reversal */}
        <div className="rounded-xl p-5 mb-10" style={{ background: 'var(--teal-bg)', border: '1px solid rgba(61,165,169,0.3)' }}>
          <p className="font-bold text-[17px] mb-2" style={{ color: 'var(--teal)', fontFamily: 'var(--font-heading)' }}>🛡 รับประกัน 7 วัน คืนเงิน 100%</p>
          <p className="text-[14.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            หากเปิดอ่าน 3 บทแรกแล้วรู้สึกว่าไม่ตอบโจทย์ ทัก LINE หาเราเพื่อขอคืนเงินเต็มจำนวน ไม่มีเงื่อนไข ไม่ถามจุกจิก
          </p>
        </div>

        <span className="section-label">คำถามที่พบบ่อย</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px,5vw,28px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 24 }}>
          มีคำถามอยู่ในใจ?
        </h2>

        <div style={{ borderTop: '1px solid var(--rule)' }}>
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
