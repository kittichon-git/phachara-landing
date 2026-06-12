export default function S2Context() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">บริบทตลาดวันนี้</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          คนส่วนใหญ่ไม่ได้โพสต์แย่ลง
          <br />
          <span style={{ color: 'var(--ink-soft)' }}>
            แต่ตลาดวันนี้ทำให้ &ldquo;คำเดิม&rdquo; ทำงานยากขึ้น
          </span>
        </h2>

        <p className="mb-6 text-[15.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          ในช่วงที่ผ่านมา คนขายของออนไลน์หลายคนเจอเรื่องเดียวกัน:
        </p>

        <ul className="flex flex-col gap-3 mb-8">
          {[
            'โพสต์เงียบกว่าเดิม คนเห็นน้อยลง',
            'ยอดทักลดลง ทั้งที่ยังโพสต์เหมือนเดิม',
            'ยิงแอดเท่าเดิม แต่คนตัดสินใจยากขึ้น',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                style={{ color: 'var(--rust)', marginTop: 4, flexShrink: 0, fontSize: 13 }}
              >
                ▸
              </span>
              <span className="text-[15.5px]" style={{ color: 'var(--ink-soft)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Insight card */}
        <div className="card">
          <p className="text-[14.5px] mb-3" style={{ color: 'var(--ink-mute)' }}>
            บางอย่างเราคุมไม่ได้: algorithm, กำลังซื้อ, คู่แข่ง, จังหวะตลาด
          </p>
          <p
            className="text-[17px] font-semibold"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
          >
            แต่สิ่งที่ยังคุมได้ คือ{' '}
            <span style={{ color: 'var(--amber)' }}>&ldquo;คำ&rdquo;</span>{' '}
            ที่ใช้ในทุกโพสต์
          </p>
        </div>

        <p className="mt-5 text-[14.5px]" style={{ color: 'var(--ink-mute)' }}>
          และนั่นคือจุดที่บทเรียนนี้เริ่มต้น
        </p>
      </div>
    </section>
  )
}
