export default function SLossAversion() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'linear-gradient(135deg, #FFF0E6 0%, #FFE8DC 100%)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <span className="section-label">ค่าเสียโอกาส</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 28,
          }}
        >
          ค่าเสียโอกาสที่คุณกำลังจ่ายอยู่ทุกวัน
        </h2>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { icon: '💸', text: 'ค่าโฆษณาที่คุณยิงทิ้งไปฟรีๆ เพราะคนเลื่อนผ่าน...' },
            { icon: '⏰', text: 'ค่าเวลาที่คุณนั่งคิดคอนเทนต์เป็นชั่วโมง แต่จบด้วยความเงียบ...' },
            { icon: '👥', text: 'ลูกค้ากี่คนที่หลุดมือไปซื้อกับคู่แข่ง เพียงเพราะเขาใช้ "คำ" ที่โดนใจกว่า?' },
          ].map((item) => (
            <div
              key={item.icon}
              className="flex items-start gap-4 rounded-lg"
              style={{
                background: '#FFFFFF',
                borderLeft: '5px solid #E87A3D',
                padding: '20px 24px',
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <p className="text-[15.5px]" style={{ color: '#444444', lineHeight: 1.65 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight question */}
        <div
          className="rounded-lg"
          style={{
            background: 'linear-gradient(135deg, #FFF0E6, #FFEBE0)',
            borderLeft: '5px solid #E87A3D',
            padding: '24px 28px',
          }}
        >
          <p
            className="text-[17px] font-bold"
            style={{ color: '#E87A3D', lineHeight: 1.6 }}
          >
            ❓ ความสูญเสียเหล่านี้ แพงกว่า 890 บาทที่คุณจะลงทุนเพื่อแก้ปัญหานี้อย่างถาวรหรือไม่?
          </p>
        </div>
      </div>
    </section>
  )
}
