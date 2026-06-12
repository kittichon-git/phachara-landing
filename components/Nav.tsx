import { lineUrl } from '@/lib/constants'

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ background: 'rgba(14,20,32,0.95)', backdropFilter: 'blur(12px)', borderColor: 'var(--rule)' }}
      aria-label="เมนูหลัก"
    >
      <div className="flex items-center justify-between mx-auto px-5" style={{ maxWidth: 780, height: 56 }}>
        <a href="#" className="flex items-center gap-2 no-underline font-bold text-[15px]" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }} aria-label="แค่เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก">
          <span aria-hidden="true" style={{ color: 'var(--amber)' }}>✦</span>
          <span>เปลี่ยนคำ ก็ทำเงิน</span>
        </a>
        <a href={lineUrl('nav')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[13px] px-4 py-2 rounded-lg transition-colors" style={{ background: 'var(--line-green)', color: 'white', fontFamily: 'var(--font-heading)' }}>
          เรียนฟรี 2 บท →
        </a>
      </div>
    </nav>
  )
}
