import { lineUrl } from '@/lib/constants'

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: '#ffffff',
        borderColor: 'var(--rule)',
      }}
      aria-label="เมนูหลัก"
    >
      <div
        className="flex items-center justify-between mx-auto"
        style={{ maxWidth: 760, padding: '12px 22px' }}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 no-underline font-bold text-[16px]"
          style={{ color: 'var(--ink)' }}
          aria-label="เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก"
        >
          <span aria-hidden="true">🎯</span>
          <span>เปลี่ยนคำ ก็ทำเงิน</span>
        </a>

        {/* Nav CTA */}
        <a
          href={lineUrl('hero')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[13px] px-3 py-1.5 rounded-md transition-colors"
          style={{
            background: 'var(--line-green)',
            color: 'white',
          }}
        >
          🟢 เรียนฟรี 2 บท
        </a>
      </div>
    </nav>
  )
}
