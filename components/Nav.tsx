import { lineUrl } from '@/lib/constants'

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: 'rgba(246,239,227,0.78)',
        borderColor: 'rgba(216,200,169,0.6)',
      }}
      aria-label="เมนูหลัก"
    >
      <div className="flex items-center justify-between px-5 py-3.5 max-w-5xl mx-auto">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 no-underline text-[var(--ink)]"
          aria-label="แค่เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก"
        >
          <span
            className="w-7 h-7 rounded-[8px] grid place-items-center font-black shrink-0"
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              fontFamily: 'var(--font-serif)',
              fontSize: 13,
              transform: 'rotate(-4deg)',
            }}
            aria-hidden="true"
          >
            พ
          </span>
          <span
            className="font-bold text-[17px] hidden sm:block"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            เปลี่ยนคำ ก็ทำเงิน
          </span>
        </a>

        {/* Nav CTA */}
        <a
          href={lineUrl('hero')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white font-semibold text-[13.5px] px-3.5 py-2 rounded-full transition-opacity hover:opacity-90"
          style={{
            background: 'var(--line-green)',
            boxShadow: '0 4px 14px -4px rgba(6,199,85,0.5)',
          }}
        >
          🟢 รับ 3 บทฟรี
        </a>
      </div>
    </nav>
  )
}
