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
          เริ่มเปลี่ยนคำในโพสต์ถัดไปของคุณตั้งแต่วันนี้
        </h2>

        <p className="thai-pretty" style={{ fontSize: 17, color: '#FFFFFF', fontWeight: 600, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 16px' }}>
          อย่าปล่อยให้โพสต์ต่อไปของคุณ ต้องเสียลูกค้าไปฟรีๆ อีกเลย...
        </p>
        <p className="thai-pretty" style={{ fontSize: 17, color: '#AAAAAA', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 36px' }}>
          ซื้อครั้งเดียว อ่านใน LINE ได้ทันที{' '}
          <span className="thai-nowrap">การันตีคืนเงิน 7 วัน</span>
        </p>

        <LineCTAButton
          position="s10"
          label="ซื้อเลย 890฿ · อ่านใน LINE ทันที"
          className="cta-btn-green"
        />

        <p style={{ fontSize: 14, color: '#666666', marginTop: 20, lineHeight: 1.6 }}>
          🛡️ คืนเงิน 100% ภายใน 7 วัน ไม่ถามเหตุผล
          <span style={{ margin: '0 10px', opacity: 0.4 }}>·</span>
          เข้าถึงตลอดชีพ
          <span style={{ margin: '0 10px', opacity: 0.4 }}>·</span>
          เปิดอ่านบน LINE ได้ทุกที่
        </p>
      </div>
    </section>
  )
}
