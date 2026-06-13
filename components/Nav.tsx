import { lineUrl } from '@/lib/constants'

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: '#FDFBF7',
        borderBottom: '1px solid #E5DDD5',
        height: 60,
      }}
      aria-label="เมนูหลัก"
    >
      <div
        className="flex items-center justify-between mx-auto px-10"
        style={{ maxWidth: 760, height: '100%' }}
      >
        <a
          href="#"
          className="flex items-center gap-2 no-underline font-bold text-[15px]"
          style={{ color: '#1A1A1A' }}
          aria-label="แค่เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก"
        >
          <span aria-hidden="true" style={{ color: '#E87A3D' }}>✦</span>
          <span>เปลี่ยนคำ ก็ทำเงิน</span>
        </a>
        <a
          href={lineUrl('nav')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[13px] transition-all"
          style={{
            background: '#E87A3D',
            color: 'white',
            padding: '9px 22px',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(232,122,61,0.3)',
          }}
        >
          เรียนฟรี 2 บท →
        </a>
      </div>
    </nav>
  )
}
