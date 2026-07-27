export default function SLossAversion() {
  return (
    <section
      id="loss-aversion"
      style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #FFF0E6 0%, #FFE8DC 100%)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            marginBottom: 32,
          }}
        >
          ค่าเสียโอกาสที่คุณกำลังจ่ายอยู่ทุกวัน
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          {[
            '💸 ค่าโฆษณาที่คุณยิงทิ้งไปฟรีๆ เพราะคนเลื่อนผ่าน...',
            '⏰ ค่าเวลาที่คุณนั่งคิดคอนเทนต์เป็นชั่วโมง แต่จบด้วยความเงียบ...',
            '👥 ลูกค้ากี่คนที่หลุดมือไปซื้อกับคู่แข่ง เพียงเพราะเขาใช้ "คำ" ที่โดนใจกว่า?',
          ].map((text) => (
            <div
              key={text}
              style={{
                background: '#FFFFFF',
                borderLeft: '5px solid #E87A3D',
                borderRadius: 8,
                padding: '20px 24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              }}
            >
              <p className="thai-pretty" style={{ fontSize: 16, lineHeight: 1.6, color: '#1A1A1A', margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, #FFF0E6 0%, #FFEBE0 100%)',
            borderLeft: '5px solid #E87A3D',
            borderRadius: 8,
            padding: '24px 28px',
            marginTop: 8,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 700, color: '#E87A3D', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
            ความสูญเสียเหล่านี้ แพงกว่า 590 บาทที่คุณจะลงทุนเพื่อแก้ปัญหานี้อย่างถาวรหรือไม่?
          </p>
        </div>
      </div>
    </section>
  )
}
