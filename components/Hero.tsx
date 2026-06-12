import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <section
      className="relative px-5 pt-16 pb-20 text-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Radial amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(229,190,99,0.13) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto" style={{ maxWidth: 660 }}>

        {/* Badge */}
        <div className="anim-fade-up flex justify-center mb-7">
          <span className="badge-pill">
            สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน แต่ยอดทักยังเงียบ
          </span>
        </div>

        {/* H1 */}
        <h1
          className="anim-fade-up-d1"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(44px, 10vw, 70px)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            marginBottom: 20,
          }}
        >
          เปลี่ยนคำธรรมดา
          <br />
          <span style={{ color: 'var(--amber)' }}>ให้ลูกค้าอยากทัก</span>
        </h1>

        {/* Subheadline */}
        <p
          className="anim-fade-up-d2 mx-auto"
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: 'var(--ink-soft)',
            marginBottom: 32,
            maxWidth: 480,
          }}
        >
          สูตรการใช้{' '}
          <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong>{' '}
          สำหรับคนขายของออนไลน์ — แม้ไม่เคยเขียนขายมาก่อน
        </p>

        {/* Mechanism flow */}
        <div className="anim-fade-up-d2 flex items-center justify-center gap-2 flex-wrap mb-10">
          {['หยุดอ่าน', 'เข้าใจสินค้า', 'อยากทัก'].map((chip, i) => (
            <span key={chip} className="flex items-center gap-2">
              <span
                className="px-4 py-2 rounded-full text-[13px] font-semibold"
                style={{
                  background: 'var(--teal-bg)',
                  color: 'var(--teal)',
                  border: '1px solid rgba(61,165,169,0.35)',
                }}
              >
                {chip}
              </span>
              {i < 2 && (
                <span style={{ color: 'var(--amber)', fontSize: 14 }}>→</span>
              )}
            </span>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="anim-fade-up-d3 flex flex-col items-center gap-3 mb-8">
          <LineCTAButton
            position="hero"
            label="เริ่มอ่านฟรี 2 บทแรก ใน LINE"
            sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม"
            className="w-full max-w-[400px]"
          />
        </div>

        {/* Trust badges */}
        <div className="anim-fade-up-d3 flex flex-wrap justify-center gap-2 mb-12">
          {['📚 7 ภาค 24 บท', '🎁 โบนัส 5 ชุด', '🛡 คืนเงิน 7 วัน'].map(
            (b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full text-[12.5px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--rule)',
                  color: 'var(--ink-mute)',
                }}
              >
                {b}
              </span>
            ),
          )}
        </div>

        {/* Terminal demo block */}
        <div
          className="anim-fade-up-d4 terminal mx-auto text-left"
          style={{ maxWidth: 520 }}
        >
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: '#ff5f56' }} />
            <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <span className="terminal-dot" style={{ background: '#27c93f' }} />
            <span
              className="ml-2 text-[11px] font-medium"
              style={{ color: 'var(--ink-mute)' }}
            >
              โพสต์ก่อน vs หลัง
            </span>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2.5"
                style={{ color: 'var(--rust)' }}
              >
                ❌ คำที่ใช้อยู่
              </p>
              <p
                className="text-[14.5px] leading-relaxed"
                style={{ color: 'var(--ink-mute)' }}
              >
                เซรั่มเข้มข้น Vitamin C 20% ลดเลือนจุดด่างดำ ผิวกระจ่างใส
              </p>
            </div>
            <div className="pt-5" style={{ borderTop: '1px solid var(--rule)' }}>
              <p
                className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2.5"
                style={{ color: 'var(--teal)' }}
              >
                ✅ คำที่ใช้แทน
              </p>
              <p
                className="text-[14.5px] leading-relaxed"
                style={{ color: 'var(--ink)' }}
              >
                ส่องกระจกตอนเช้าแล้วเจอจุดด่างดำที่เพิ่งโผล่?
                ขวดนี้คือตัวที่ลูกค้าซื้อซ้ำบ่อยสุด
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <p className="mt-10 text-[13px]" style={{ color: 'var(--ink-mute)' }}>
          ↓ แล้วทำไมโพสต์เดิมที่เคยได้ผล วันนี้ถึงเงียบ?
        </p>

        {/* Sentinel for StickyLineCTA IntersectionObserver */}
        <div id="hero-sentinel" aria-hidden="true" />
      </div>
    </section>
  )
}
