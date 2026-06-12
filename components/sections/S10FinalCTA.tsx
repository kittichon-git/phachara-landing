import LineCTAButton from '@/components/LineCTAButton'

export default function S10FinalCTA() {
  return (
    <section className="px-5 py-16" style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="mx-auto text-center" style={{ maxWidth: 480 }}>
        <span className="section-label">พร้อมแล้ว?</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px,6vw,38px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 16 }}>
          เริ่มจากลองอ่านฟรี 2 บทแรก
        </h2>

        <p className="mb-4 text-[16px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.75 }}>
          ถ้าอ่านแล้วรู้สึกว่าวิธี &ldquo;เปลี่ยนคำ&rdquo; ช่วยให้โพสต์ของคุณชัดขึ้น ค่อยตัดสินใจต่อ
        </p>

        <p className="mb-10 text-[15px]" style={{ color: 'var(--ink-mute)', lineHeight: 1.75 }}>
          คุณไม่จำเป็นต้องเชื่อทั้งหน้าตั้งแต่ตอนนี้ แค่เริ่มจากบทแรก แล้วดูเองว่าวิธีคิดนี้เอาไปใช้กับโพสต์ของคุณได้ไหม
        </p>

        <div className="flex flex-col items-center gap-3">
          <LineCTAButton position="s10" label="เริ่มอ่านฟรี 2 บทแรกใน LINE" sublabel="ไม่ต้องกรอกบัตร · อ่านฟรีก่อน · ไม่สแปม" className="w-full max-w-[380px]" />
        </div>
      </div>
    </section>
  )
}
