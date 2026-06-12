const pains = [
  {
    n: '01',
    symptom: 'ยิงแอดแพง แต่คนเลื่อนผ่านใน 1 วิ',
    diagnosis: 'เพราะประโยคแรกยังไม่ทำให้เขารู้สึกว่า "เรื่องนี้เกี่ยวกับเขา"',
  },
  {
    n: '02',
    symptom: 'คนหยุดดู แต่พออ่านจบก็เงียบ',
    diagnosis: 'เพราะคำที่ใช้กำลัง "อธิบายแค่ตัวสินค้า" ไม่ได้ทำให้เขา "อยากได้"',
  },
  {
    n: '03',
    symptom: 'อธิบายจนหมดใจ แต่ลูกค้าตอบ "ขอดูก่อนนะ"',
    diagnosis: 'เพราะยังไม่มีคำที่ปิดความลังเลและให้เขากล้าตัดสินใจ',
  },
  {
    n: '04',
    symptom: 'ทั้งที่สินค้าดีกว่าคู่แข่ง แต่ไม่มีใครทักมาถาม',
    diagnosis: 'เพราะคำในโพสต์ยังไม่เปิดช่องให้เขาเริ่มบทสนทนา',
  },
]

export default function S3Relevance() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">ถ้าโพสต์ยังเงียบ</span>
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
          ปัญหาอาจไม่ใช่สินค้า
        </h2>
        <p className="mb-8 text-[15.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          คุณขยันโพสต์ทุกวัน และสินค้าก็ดีจริง — ไม่ใช่ว่าคุณขายไม่เก่ง แต่{' '}
          <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong>{' '}
          ที่ใช้ ยังไม่ได้ทำงานแทนคุณ
        </p>

        <p
          className="mb-5 text-[11px] font-bold tracking-[0.14em] uppercase"
          style={{ color: 'var(--amber)' }}
        >
          คุณกำลังเจอแบบนี้อยู่ไหม?
        </p>

        <div className="flex flex-col gap-4">
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
      </div>
    </section>
  )
}
