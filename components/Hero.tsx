import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <section
      className="py-10 sm:py-16 px-5"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Hero emoji */}
        <span className="block mb-5 text-[52px]" aria-hidden="true">🎯</span>

        {/* H1 */}
        <h1
          className="font-bold leading-[1.35] mb-5 anim-fade-up"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--ink)',
            fontSize: 'clamp(30px, 5.6vw, 44px)',
          }}
        >
          โพสต์ทุกวัน ยิงแอดทุกคืน
          <br />
          <span
            style={{
              background: '#fff8c5',
              padding: '1px 4px',
              borderRadius: 3,
            }}
          >
            ทำไม
          </span>ยังไม่มีคนกดซื้อ?
        </h1>

        {/* Sub */}
        <p
          className="mb-6 text-[17px] leading-[1.75] anim-fade-up-delay"
          style={{ color: 'var(--ink-soft)' }}
        >
          ปัญหาไม่ได้อยู่ที่สินค้า ไม่ได้อยู่ที่กราฟิก
          <br />
          ปัญหาอยู่ที่ <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong> ที่คุณใช้ — แค่เปลี่ยนคำให้ตรงจุด ยอดขายเปลี่ยนทันที
        </p>

        {/* Blue callout */}
        <div className="callout mb-6" role="note">
          <span className="text-[22px] shrink-0" aria-hidden="true">📚</span>
          <div>
            <strong>บทเรียน &ldquo;แค่เปลี่ยนคำ ก็ทำเงิน&rdquo;</strong>
            <br />
            <span className="text-[15px]">24 บท + ภาคผนวก 5 ส่วน — framework เขียนขายออนไลน์ที่ใช้ได้กับธุรกิจไทยจริง</span>
          </div>
        </div>

        {/* Book frame */}
        <div
          className="flex flex-col items-center gap-4 my-7 rounded-lg p-9"
          style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--rule)',
          }}
          aria-hidden="true"
        >
          {/* Book cover */}
          <div className="book-cover">
            <div className="text-[11px] mb-auto" style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em' }}>
              Phachara · No.01
            </div>
            <div className="mt-auto">
              <div
                className="font-black leading-[1.15] mb-2"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(22px, 3.5vw, 30px)',
                  color: 'white',
                }}
              >
                แค่เปลี่ยนคำ
                <span
                  className="block"
                  style={{ background: '#fff8c5', color: '#4a3b0e', padding: '0 4px', borderRadius: 3, display: 'inline-block', marginTop: 2 }}
                >
                  ก็ทำเงิน
                </span>
              </div>
              <div className="text-[12px] mt-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                24 บท · ภาคผนวก 5 ส่วน
              </div>
            </div>
          </div>
          <p
            className="italic"
            style={{ fontSize: 13.5, color: 'var(--ink-mute)' }}
          >
            บทเรียน · ฉบับภาษาไทย 2026
          </p>
        </div>

        {/* CTA */}
        <LineCTAButton
          position="hero"
          label="เรียนฟรี 2 บทเรียน"
          sublabel="ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย"
          size="lg"
          className="w-full max-w-[380px]"
        />

        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 mt-5">
          {[
            '📚 24 บท + ภาคผนวก 5 ส่วน',
            '🛡 คืนเงิน 7 วัน',
            '🔒 PDPA',
          ].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded-md text-[13px]"
              style={{
                background: 'var(--bg-soft)',
                border: '1px solid var(--rule)',
                color: 'var(--ink-soft)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Sentinel for StickyLineCTA IntersectionObserver */}
        <div id="hero-sentinel" aria-hidden="true" />
      </div>
    </section>
  )
}
