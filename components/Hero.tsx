import LineCTAButton from './LineCTAButton'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-yellow-50 via-yellow-50/60 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Copy — 60% — visible immediately (no opacity:0) */}
          <div className="flex-1 text-center md:text-left anim-fade-up">
            {/* H1 — Noto Serif Thai */}
            <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.25] mb-5">
              โพสต์ทุกวัน ยิงแอดทุกคืน
              <br />
              <span className="text-yellow-500">ทำไมยังไม่มีคนกดซื้อ?</span>
            </h1>

            {/* Sub */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              ปัญหาไม่ได้อยู่ที่สินค้า ไม่ได้อยู่ที่กราฟิก
              <br />
              ปัญหาอยู่ที่ <strong>&ldquo;คำ&rdquo;</strong> ที่คุณใช้ — แค่เปลี่ยนคำให้ตรงจุด ยอดขายเปลี่ยนทันที
              <br />
              <strong>บทเรียน &ldquo;แค่เปลี่ยนคำ ก็ทำเงิน&rdquo;</strong> — 24 บท + ภาคผนวก 5 ส่วน ที่กรอกคำได้ทันที
            </p>

            {/* Primary CTA */}
            <LineCTAButton
              position="hero"
              label="แอด LINE รับ 3 บทแรกฟรี"
              sublabel="ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย"
              size="lg"
            />

            {/* Trust strip */}
            <p className="mt-5 text-sm text-gray-500 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              <span>📚 24 บท + ภาคผนวก 5 ส่วน</span>
              <span>🛡 คืนเงิน 7 วัน</span>
              <span>🔒 PDPA</span>
            </p>
          </div>

          {/* Book mockup — 40% — decorative, slight delay OK */}
          <div
            className="w-52 md:w-72 shrink-0 anim-fade-up-delay"
            aria-hidden="true"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl flex flex-col items-center justify-center gap-3 text-white px-6">
              <div className="text-5xl">📖</div>
              <div className="font-[family-name:var(--font-serif)] text-xl font-black text-center leading-snug">
                แค่เปลี่ยนคำ
                <br />ก็ทำเงิน
              </div>
              <div className="text-xs opacity-80 text-center">24 บท · Swipe File · Template</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sentinel for StickyLineCTA IntersectionObserver */}
      <div id="hero-sentinel" aria-hidden="true" />
    </header>
  )
}
