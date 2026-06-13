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
      style={{ background: '#F4EFEA' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <span className="section-label">ปัญหา</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 12,
          }}
        >
          ถ้าโพสต์ยังเงียบ...
          <br />
          ปัญหาไม่ได้อยู่ที่สินค้า
        </h2>
        <p className="mb-8 text-[16px]" style={{ color: '#666666', lineHeight: 1.7 }}>
          คุณขยันโพสต์ทุกวัน สินค้าก็ดีจริง แต่ยอดขายกลับลดลงเรื่อยๆ
          ไม่ใช่เพราะคุณขายไม่เก่ง แต่เพราะตลาดเปลี่ยนไป และ{' '}
          <strong style={{ color: '#1A1A1A' }}>&ldquo;คำเดิม&rdquo;</strong>{' '}
          ไม่ทำงานอีกแล้ว:
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {pains.map((p) => (
            <div
              key={p.n}
              style={{
                background: '#FFFFFF',
                borderRadius: 12,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                borderLeft: '4px solid #D94040',
              }}
            >
              <span
                className="text-[11px] font-black shrink-0 mt-0.5 tabular-nums"
                style={{ color: '#D94040' }}
              >
                {p.n}
              </span>
              <div>
                <p className="font-semibold text-[16px] mb-1.5" style={{ color: '#1A1A1A', lineHeight: 1.4 }}>
                  {p.symptom}
                </p>
                <p className="text-[14px]" style={{ color: '#666666', lineHeight: 1.65 }}>
                  {p.diagnosis}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          className="rounded-xl px-6 py-5"
          style={{
            background: '#FFF0E6',
            border: '1px solid rgba(232,122,61,0.3)',
          }}
        >
          <p className="text-[16px] font-semibold" style={{ color: '#1A1A1A', lineHeight: 1.65 }}>
            💡 คุณคุมตลาดและคู่แข่งไม่ได้ แต่คุณเปลี่ยน{' '}
            <span style={{ color: '#E87A3D' }}>&ldquo;คำ&rdquo;</span>{' '}
            ในโพสต์ของคุณได้ และนี่คือวิธีแก้
          </p>
        </div>
      </div>
    </section>
  )
}
