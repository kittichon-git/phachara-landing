const pains = [
  {
    n: '01',
    symptom: 'ยิงแอดแพง แต่คนเลื่อนผ่านใน 1 วิ',
    diagnosis: 'เพราะคำเปิดโพสต์ ไม่เกี่ยวอะไรกับเขา',
  },
  {
    n: '02',
    symptom: 'คนหยุดอ่าน แต่จบแล้วก็เงียบ',
    diagnosis: 'เพราะคำที่คุณใช้ แค่ "อธิบาย" แต่ไม่ได้ทำให้ "อยากซื้อ"',
  },
  {
    n: '03',
    symptom: 'อธิบายจนเหนื่อย แต่ลูกค้าตอบ "ขอดูก่อน"',
    diagnosis: 'เพราะไม่มีคำที่ช่วยตัดความลังเล',
  },
  {
    n: '04',
    symptom: 'สินค้าดีกว่าคู่แข่ง แต่ไม่มีใครถาม',
    diagnosis: 'เพราะคุณไม่ได้เปิดช่องให้เขาเริ่มคุย',
  },
]

export default function S3Relevance() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">ปัญหา</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          ถ้าโพสต์ยังเงียบ...
          <br />
          ปัญหาไม่ได้อยู่ที่สินค้า
        </h2>
        <p className="mb-8 text-[15.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          คุณขยันโพสต์ทุกวัน สินค้าก็ดีจริง แต่ยอดขายกลับลดลงเรื่อยๆ
          ไม่ใช่เพราะคุณขายไม่เก่ง แต่เพราะตลาดเปลี่ยนไป และ{' '}
          <strong style={{ color: 'var(--ink)' }}>&ldquo;คำเดิม&rdquo;</strong>{' '}
          ไม่ทำงานอีกแล้ว:
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {pains.map((p) => (
            <div
              key={p.n}
              className="card"
              style={{ borderLeft: '3px solid rgba(194,84,42,0.6)' }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-[11px] font-black shrink-0 mt-0.5 tabular-nums"
                  style={{ color: 'var(--rust)', fontFamily: 'var(--font-heading)' }}
                >
                  {p.n}
                </span>
                <div>
                  <p
                    className="font-semibold text-[16px] mb-2"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}
                  >
                    {p.symptom}
                  </p>
                  <p className="text-[14px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.65 }}>
                    {p.diagnosis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          className="rounded-2xl px-6 py-5"
          style={{
            background: 'var(--amber-bg)',
            border: '1px solid rgba(229,190,99,0.25)',
          }}
        >
          <p className="text-[16px] font-semibold" style={{ color: 'var(--ink)', lineHeight: 1.65 }}>
            💡 คุณคุมตลาดและคู่แข่งไม่ได้ แต่คุณเปลี่ยน{' '}
            <span style={{ color: 'var(--amber)' }}>&ldquo;คำ&rdquo;</span>{' '}
            ในโพสต์ของคุณได้ และนี่คือวิธีแก้
          </p>
        </div>
      </div>
    </section>
  )
}
