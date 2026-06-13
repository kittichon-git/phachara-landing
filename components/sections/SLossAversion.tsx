export default function SLossAversion() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">ค่าเสียโอกาส</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 28,
          }}
        >
          ค่าเสียโอกาสที่คุณกำลังจ่ายอยู่ทุกวัน
        </h2>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { icon: '💸', text: 'ค่าโฆษณาที่คุณยิงทิ้งไปฟรีๆ เพราะคนเลื่อนผ่าน...' },
            {
              icon: '⏰',
              text: 'ค่าเวลาที่คุณนั่งคิดคอนเทนต์เป็นชั่วโมง แต่จบด้วยความเงียบ...',
            },
            {
              icon: '👥',
              text: 'ลูกค้ากี่คนที่หลุดมือไปซื้อกับคู่แข่ง เพียงเพราะเขาใช้ "คำ" ที่โดนใจกว่า?',
            },
          ].map((item) => (
            <div
              key={item.icon}
              className="flex items-start gap-4 px-5 py-4 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--rule)',
                borderLeft: '4px solid rgba(229,190,99,0.5)',
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <p className="text-[15.5px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.65 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight question */}
        <div
          className="rounded-2xl px-6 py-5"
          style={{
            background: 'var(--amber-bg)',
            border: '1px solid rgba(229,190,99,0.3)',
            borderLeft: '4px solid var(--amber)',
          }}
        >
          <p
            className="text-[17px] font-bold"
            style={{ color: 'var(--amber)', fontFamily: 'var(--font-heading)', lineHeight: 1.6 }}
          >
            ❓ ความสูญเสียเหล่านี้ แพงกว่า 890 บาทที่คุณจะลงทุนเพื่อแก้ปัญหานี้อย่างถาวรหรือไม่?
          </p>
        </div>
      </div>
    </section>
  )
}
