import LineCTAButton from '@/components/LineCTAButton'

export default function S10FinalCTA() {
  return (
    <section
      className="relative px-5 py-20 text-center overflow-hidden"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
    >
      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(6,199,85,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto" style={{ maxWidth: 480 }}>
        <span className="section-label">พร้อมแล้ว?</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px,7vw,44px)',
            fontWeight: 900,
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          พิสูจน์ด้วยโพสต์ของคุณเอง
        </h2>

        <p className="mb-4 text-[16px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          คุณไม่ต้องเชื่อทั้งหมดในตอนนี้ เริ่มต้นจากการทดลองอ่านฟรี 2 บทแรก
        </p>

        <p
          className="mb-4 text-[16px] font-semibold"
          style={{ color: 'var(--ink)', lineHeight: 1.7, fontFamily: 'var(--font-heading)' }}
        >
          อย่าปล่อยให้โพสต์ต่อไปของคุณ ต้องเสียลูกค้าไปฟรีๆ อีกเลย...
        </p>

        <p className="mb-10 text-[15px]" style={{ color: 'var(--ink-mute)', lineHeight: 1.8 }}>
          ถ้าอ่านแล้วรู้สึกว่า &ldquo;คำ&rdquo; ของคุณทรงพลังขึ้น ค่อยตัดสินใจ
        </p>

        <div className="flex flex-col items-center gap-3">
          <LineCTAButton
            position="s10"
            label="เริ่มอ่านฟรี 2 บทแรกใน LINE"
            sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม"
            className="w-full max-w-[380px]"
          />
        </div>
      </div>
    </section>
  )
}
