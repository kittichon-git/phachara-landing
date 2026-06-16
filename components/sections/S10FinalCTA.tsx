import LineCTAButton from '@/components/LineCTAButton'

export default function S10FinalCTA() {
  return (
    <section
      id="final-cta"
      style={{ padding: '80px 24px', background: '#1A1A1A', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: 16,
          }}
        >
          พิสูจน์ด้วยโพสต์ของคุณเอง
        </h2>

        <p className="thai-pretty" style={{ fontSize: 17, color: '#AAAAAA', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 16px' }}>
          คุณไม่ต้องเชื่อทั้งหมดในตอนนี้ เริ่มต้นจากการทดลองอ่านฟรี 2 บทแรก
        </p>
        <p className="thai-pretty" style={{ fontSize: 17, color: '#FFFFFF', fontWeight: 600, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 16px' }}>
          อย่าปล่อยให้โพสต์ต่อไปของคุณ ต้องเสียลูกค้าไปฟรีๆ อีกเลย...
        </p>
        <p className="thai-pretty" style={{ fontSize: 17, color: '#AAAAAA', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 36px' }}>
          ถ้าอ่านแล้วรู้สึกว่า &ldquo;คำ&rdquo; ของคุณทรงพลังขึ้น{' '}
          <span className="thai-nowrap">ค่อยตัดสินใจ</span>
        </p>

        <LineCTAButton
          position="s10"
          className="cta-btn-green"
        />
      </div>
    </section>
  )
}
