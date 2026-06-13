import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-5 pt-20 pb-24 text-center"
      style={{ background: '#FDFBF7' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Badge */}
        <div className="anim-fade-up flex justify-center mb-7">
          <span className="badge-pill">
            สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน... แต่ยอดขายยังเงียบ
          </span>
        </div>

        {/* H1 */}
        <h1
          className="anim-fade-up-d1"
          style={{
            fontSize: 'clamp(36px, 6vw, 58px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            color: '#1A1A1A',
            marginBottom: 20,
          }}
        >
          เปลี่ยนคำธรรมดา
          <br />
          <span style={{ color: '#E87A3D' }}>ให้ลูกค้า &ldquo;อยากซื้อ&rdquo;</span>
          <br />
          ตั้งแต่ประโยคแรก
        </h1>

        {/* Subheadline */}
        <p
          className="anim-fade-up-d2 mx-auto"
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: '#666666',
            marginBottom: 32,
            maxWidth: 500,
          }}
        >
          สูตรลับการใช้{' '}
          <strong style={{ color: '#1A1A1A' }}>&ldquo;คำ&rdquo;</strong>{' '}
          ที่ช่วยให้ปิดการขายได้ แม้ไม่เคยเขียนโฆษณามาก่อน
        </p>

        {/* Primary CTA */}
        <div className="anim-fade-up-d3 flex flex-col items-center gap-3 mb-8">
          <LineCTAButton
            position="hero"
            label="เริ่มอ่านฟรี 2 บทแรกใน LINE"
            sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม"
            className="w-full max-w-[400px]"
          />
        </div>

        {/* Trust badges */}
        <div className="anim-fade-up-d3 flex flex-wrap justify-center gap-2 mb-14">
          {['📚 7 ภาค 24 บท', '🎁 โบนัส 5 ชุด', '🛡 คืนเงิน 7 วัน'].map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 rounded-full text-[12.5px]"
              style={{
                border: '1.5px solid #E5DDD5',
                color: '#666666',
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Before / After comparison — reference style */}
        <div
          className="anim-fade-up-d4 mx-auto text-left"
          style={{
            maxWidth: 540,
            background: '#FFFFFF',
            border: '1px solid #E5DDD5',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          }}
        >
          {/* Before */}
          <div
            className="px-6 py-5"
            style={{ borderBottom: '1px solid #E5DDD5' }}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase mb-2.5"
              style={{ color: '#D94040' }}
            >
              ❌ คำที่ใช้อยู่
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: '#666666' }}>
              เซรั่มเข้มข้น Vitamin C 20% ลดเลือนจุดด่างดำ ผิวกระจ่างใส
            </p>
          </div>
          {/* After */}
          <div className="px-6 py-5">
            <p
              className="text-[11px] font-bold tracking-widest uppercase mb-2.5"
              style={{ color: '#3A9E5F' }}
            >
              ✅ คำที่ใช้แทน
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: '#1A1A1A' }}>
              ส่องกระจกตอนเช้าแล้วเจอจุดด่างดำที่เพิ่งโผล่?
              ขวดนี้คือตัวที่ลูกค้าซื้อซ้ำบ่อยสุด
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <p className="mt-10 text-[13px]" style={{ color: '#666666' }}>
          ↓ ถ้าโพสต์ยังเงียบ ปัญหาไม่ได้อยู่ที่สินค้า
        </p>

        {/* Sentinel for StickyLineCTA IntersectionObserver */}
        <div id="hero-sentinel" aria-hidden="true" />
      </div>
    </section>
  )
}
