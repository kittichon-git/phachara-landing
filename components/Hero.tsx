import { Fragment } from 'react'
import LineCTAButton from './LineCTAButton'

const chips = [
  { icon: '👁️', label: 'สะกดสายตา' },
  { icon: '🛡️', label: 'สร้างความเชื่อใจ' },
  { icon: '🛒', label: 'ลูกค้าอยากซื้อเอง' },
]

const trustItems = [
  'คืนเงิน 100% ภายใน 7 วัน',
  'เข้าถึงตลอดชีพ',
  'เปิดอ่านบน LINE ได้ทุกที่',
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ padding: '72px 24px 80px', textAlign: 'center', background: '#FDFBF7' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* Hero badge */}
        <div style={{ marginBottom: 28 }}>
          <span
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              border: '1.5px solid #E5DDD5',
              borderRadius: 999,
              padding: '6px 16px',
              fontSize: 14,
              color: '#666666',
              fontWeight: 500,
              maxWidth: '90vw',
              flexWrap: 'wrap',
            }}
          >
            สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน...{' '}
            <span style={{ whiteSpace: 'nowrap' }}>แต่ยอดขายยังเงียบ</span>
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 58px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            marginBottom: 20,
            color: '#1A1A1A',
          }}
        >
          <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>เปลี่ยนคำธรรมดา</span>
          <br />
          <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
            ให้ลูกค้า{' '}
            <em style={{ fontStyle: 'normal', color: '#E87A3D' }}>&ldquo;อยากซื้อ&rdquo;</em>
          </span>
          <br />
          <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>ตั้งแต่ประโยคแรก</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="thai-pretty"
          style={{
            fontSize: 18,
            color: '#666666',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          สูตรลับการใช้ &ldquo;คำ&rdquo; ที่ช่วยให้ปิดการขายได้
          {' '}แม้<span className="thai-nowrap">ไม่เคย</span>เขียนโฆษณามาก่อน
        </p>

        {/* Chip row */}
        <div
          className="chip-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 36,
          }}
        >
          {chips.map((c, i) => (
            <Fragment key={c.label}>
              <div className="chip">
                <span style={{ fontSize: 16 }}>{c.icon}</span>
                {c.label}
              </div>
              {i < chips.length - 1 && (
                <span className="chip-arrow" aria-hidden="true">→</span>
              )}
            </Fragment>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginBottom: 0 }}>
          <LineCTAButton
            position="hero"
          />
        </div>

        {/* Trust row */}
        <div className="hero-trust">
          {trustItems.map((t, i) => (
            <span key={t}>
              {i > 0 && <span style={{ marginRight: 16, opacity: 0.5 }}>·</span>}
              {t}
            </span>
          ))}
        </div>

        {/* Sentinel for StickyLineCTA IntersectionObserver */}
        <div id="hero-sentinel" aria-hidden="true" />
      </div>
    </section>
  )
}
