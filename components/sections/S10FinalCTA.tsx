import LineCTAButton from '@/components/LineCTAButton'

export default function S10FinalCTA() {
  return (
    <section
      className="px-5 py-20 text-center"
      style={{ background: '#1A1A1A' }}
    >
      <div className="mx-auto" style={{ maxWidth: 480 }}>
        <span className="section-label">พร้อมแล้ว?</span>
        <h2
          style={{
            fontSize: 'clamp(28px, 7vw, 44px)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          พิสูจน์ด้วยโพสต์ของคุณเอง
        </h2>

        <p className="mb-4 text-[16px]" style={{ color: '#AAAAAA', lineHeight: 1.8 }}>
          คุณไม่ต้องเชื่อทั้งหมดในตอนนี้ เริ่มต้นจากการทดลองอ่านฟรี 2 บทแรก
        </p>

        <p
          className="mb-4 text-[16px] font-semibold"
          style={{ color: '#FFFFFF', lineHeight: 1.7 }}
        >
          อย่าปล่อยให้โพสต์ต่อไปของคุณ ต้องเสียลูกค้าไปฟรีๆ อีกเลย...
        </p>

        <p className="mb-10 text-[15px]" style={{ color: '#888888', lineHeight: 1.8 }}>
          ถ้าอ่านแล้วรู้สึกว่า &ldquo;คำ&rdquo; ของคุณทรงพลังขึ้น ค่อยตัดสินใจ
        </p>

        <div className="flex flex-col items-center gap-3">
          <LineCTAButton
            position="s10"
            label="เริ่มอ่านฟรี 2 บทแรกใน LINE"
            sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม"
            className="w-full max-w-[380px] cta-btn-green"
          />
        </div>
      </div>
    </section>
  )
}
