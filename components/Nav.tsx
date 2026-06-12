import { lineUrl } from '@/lib/constants'

export default function Nav() {
  return (
    <div className="sticky top-0 z-50">
      {/* Attention strip */}
      <div
        className="w-full text-center px-4 py-2.5 text-[12px] font-semibold"
        style={{
          background: 'rgba(229,190,99,0.1)',
          borderBottom: '1px solid rgba(229,190,99,0.18)',
          color: 'var(--amber)',
          letterSpacing: '0.04em',
        }}
      >
        🎁 อ่านฟรี 2 บทแรกก่อนตัดสินใจ — ไม่ต้องกรอกบัตร
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: 'rgba(7,9,26,0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--rule)',
        }}
        aria-label="เมนูหลัก"
      >
        <div
          className="flex items-center justify-between mx-auto px-5"
          style={{ maxWidth: 780, height: 54 }}
        >
          <a
            href="#"
            className="flex items-center gap-2 no-underline font-bold text-[15px]"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
            aria-label="แค่เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก"
          >
            <span aria-hidden="true" style={{ color: 'var(--amber)' }}>
              ✦
            </span>
            <span>เปลี่ยนคำ ก็ทำเงิน</span>
          </a>
          <a
            href={lineUrl('nav')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[13px] px-4 py-2 rounded-lg transition-all"
            style={{
              background: 'var(--line-green)',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 2px 12px rgba(6,199,85,0.3)',
            }}
          >
            เรียนฟรี 2 บท →
          </a>
        </div>
      </nav>
    </div>
  )
}
