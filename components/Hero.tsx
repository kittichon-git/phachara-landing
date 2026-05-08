import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <header
      className="py-12 sm:py-20 px-5 relative"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 md:gap-18 items-center">

          {/* Copy — visible immediately (no opacity:0 for LCP) */}
          <div className="text-center md:text-left anim-fade-up">
            <span className="eyebrow mb-4 block">บทเรียนเขียนคำขายของ · ภาษาไทย</span>

            <h1
              className="text-[clamp(34px,6.4vw,60px)] font-bold leading-[1.35] mb-5"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
            >
              โพสต์ทุกวัน ยิงแอดทุกคืน
              <br />
              <span
                className="relative whitespace-nowrap"
                style={{ color: 'var(--accent)' }}
              >
                ทำไมยังไม่มีคนกดซื้อ?
                <span
                  className="absolute inset-x-[-2%] bottom-1 h-[10px] rounded-lg -z-10"
                  style={{ background: 'rgba(194,84,42,0.18)' }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p
              className="text-[clamp(16px,2vw,18.5px)] leading-[1.75] mb-7 max-w-[560px] mx-auto md:mx-0"
              style={{ color: 'var(--ink-soft)' }}
            >
              ปัญหาไม่ได้อยู่ที่สินค้า ไม่ได้อยู่ที่กราฟิก
              <br />
              ปัญหาอยู่ที่ <strong style={{ color: 'var(--ink)' }}>&ldquo;คำ&rdquo;</strong> ที่คุณใช้ — แค่เปลี่ยนคำให้ตรงจุด ยอดขายเปลี่ยนทันที
              <br /><br />
              บทเรียน <strong style={{ color: 'var(--ink)' }}>&ldquo;แค่เปลี่ยนคำ ก็ทำเงิน&rdquo;</strong> — 24 บท + ภาคผนวก 5 ส่วน ที่กรอกคำได้ทันที
            </p>

            <div className="flex justify-center md:justify-start">
              <LineCTAButton
                position="hero"
                label="แอด LINE รับ 3 บทแรกฟรี"
                sublabel="ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย"
                size="lg"
              />
            </div>

            {/* Trust strip */}
            <p
              className="mt-5 text-[13.5px] flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1"
              style={{ color: 'var(--ink-soft)' }}
            >
              <span className="inline-flex items-center gap-1.5">📚 24 บท + ภาคผนวก 5 ส่วน</span>
              <span className="inline-flex items-center gap-1.5">🛡 คืนเงิน 7 วัน</span>
              <span className="inline-flex items-center gap-1.5">🔒 PDPA</span>
            </p>
          </div>

          {/* Book mockup — decorative */}
          <div
            className="w-52 md:w-auto max-w-[380px] mx-auto shrink-0 anim-fade-up-delay"
            aria-hidden="true"
          >
            {/* perspective wrapper */}
            <div className="relative aspect-[4/5]" style={{ perspective: '1400px' }}>
              {/* book rotation */}
              <div
                className="absolute inset-0 transition-transform duration-[600ms] cubic-bezier hover:rotate-[-2deg] hover:translate-y-[-4px]"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <div className="book-cover">
                  <div
                    className="text-[11px] tracking-[0.32em] uppercase mb-auto"
                    style={{ color: 'rgba(245,233,212,0.55)' }}
                  >
                    ฉบับภาษาไทย · 2026
                  </div>
                  <h2
                    className="font-black leading-[1.15] mb-3.5"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(26px,4.5vw,38px)',
                      color: '#f5e9d4',
                    }}
                  >
                    แค่เปลี่ยนคำ
                    <span className="block" style={{ color: '#d8a84a' }}>ก็ทำเงิน</span>
                  </h2>
                  <div
                    className="text-[12.5px] border-t pt-3.5 tracking-[0.04em]"
                    style={{
                      color: 'rgba(245,233,212,0.62)',
                      borderColor: 'rgba(245,233,212,0.22)',
                    }}
                  >
                    24 บท · 7 ภาค · ภาคผนวก 5 ส่วน
                  </div>
                  <div
                    className="absolute bottom-5 right-5 text-[11px] tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-serif)', color: 'rgba(245,233,212,0.55)' }}
                  >
                    บทเรียน №01
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sentinel for StickyLineCTA IntersectionObserver */}
      <div id="hero-sentinel" aria-hidden="true" />
    </header>
  )
}
