import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <section className="px-5 pt-14 pb-16" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto" style={{ maxWidth: 560 }}>

        {/* Eyebrow */}
        <span className="section-label">สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน แต่ยอดทักยังเงียบ</span>

        {/* H1 */}
        <h1 className="anim-fade-up" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(34px,8vw,54px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 20 }}>
          เปลี่ยนคำธรรมดา
          <br />
          <span style={{ color: 'var(--teal)' }}>ให้ลูกค้าอยากทัก</span>
        </h1>

        {/* Sub */}
        <p className="anim-fade-up-d1" style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 28 }}>
          สูตรการใช้ <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong> สำหรับคนขายของออนไลน์ — แม้ไม่เคยเขียนขายมาก่อน
        </p>

        {/* Mechanism chips */}
        <div className="anim-fade-up-d2 flex items-center gap-2 flex-wrap mb-8">
          {['หยุดอ่าน', 'เข้าใจสินค้า', 'อยากทัก'].map((chip, i) => (
            <span key={chip} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full text-[13px] font-semibold" style={{ background: 'var(--teal-bg)', color: 'var(--teal)', border: '1px solid var(--teal)' }}>{chip}</span>
              {i < 2 && <span style={{ color: 'var(--amber)', fontSize: 14 }}>→</span>}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <LineCTAButton position="hero" label="เริ่มอ่านฟรี 2 บทแรก ใน LINE" sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม" className="w-full max-w-[400px]" />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['📚 7 ภาค 24 บท', '🎁 โบนัส 5 ชุด', '🛡 คืนเงิน 7 วัน'].map(b => (
            <span key={b} className="px-3 py-1.5 rounded-lg text-[12.5px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)', color: 'var(--ink-mute)' }}>{b}</span>
          ))}
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
