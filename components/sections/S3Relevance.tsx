const pains = [
  { n: '01', symptom: 'ยิงแอดแพง แต่คนเลื่อนผ่านใน 1 วิ', diagnosis: 'เพราะประโยคแรกยังไม่ทำให้เขารู้สึกว่า "เรื่องนี้เกี่ยวกับเขา"' },
  { n: '02', symptom: 'คนหยุดดู แต่พออ่านจบก็เงียบ', diagnosis: 'เพราะคำที่ใช้กำลัง "อธิบายแค่ตัวสินค้า" ไม่ได้ทำให้เขา "อยากได้"' },
  { n: '03', symptom: 'อธิบายจนหมดใจ แต่ลูกค้าตอบ "ขอดูก่อนนะ"', diagnosis: 'เพราะยังไม่มีคำที่ปิดความลังเลและให้เขากล้าตัดสินใจ' },
  { n: '04', symptom: 'ทั้งที่สินค้าดีกว่าคู่แข่ง แต่ไม่มีใครทักมาถาม', diagnosis: 'เพราะคำในโพสต์ยังไม่เปิดช่องให้เขาเริ่มบทสนทนา' },
]

export default function S3Relevance() {
  return (
    <section className="px-5 py-14" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}>
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        <span className="section-label">ถ้าโพสต์ยังเงียบ</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px,5vw,28px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 12 }}>
          ปัญหาอาจไม่ใช่สินค้า
        </h2>
        <p className="mb-8 text-[15.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.75 }}>
          คุณขยันโพสต์ทุกวัน และสินค้าก็ดีจริง — ไม่ใช่ว่าคุณขายไม่เก่ง แต่ <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong> ที่ใช้ ยังไม่ได้ทำงานแทนคุณ
        </p>

        <p className="mb-5 text-[14px] font-semibold" style={{ color: 'var(--amber)', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: 12 }}>คุณกำลังเจอแบบนี้อยู่ไหม?</p>

        <div className="flex flex-col gap-4">
          {pains.map(p => (
            <div key={p.n} className="card" style={{ borderLeft: '3px solid var(--rust)' }}>
              <div className="flex items-start gap-3">
                <span className="text-[12px] font-bold shrink-0 mt-0.5" style={{ color: 'var(--rust)', fontFamily: 'var(--font-heading)' }}>{p.n}</span>
                <div>
                  <p className="font-semibold text-[15.5px] mb-1.5" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>{p.symptom}</p>
                  <p className="text-[14px]" style={{ color: 'var(--ink-soft)' }}>{p.diagnosis}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
