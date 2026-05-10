import { BUSINESS } from '@/lib/constants'

const legalLinks = [
  { href: '/legal/refund',  label: 'นโยบายคืนเงิน' },
  { href: '/legal/terms',   label: 'เงื่อนไขการใช้งาน' },
  { href: '/legal/privacy', label: 'ความเป็นส่วนตัว' },
  { href: '/legal/cookie',  label: 'Cookie' },
  { href: '/contact',       label: 'ติดต่อเรา' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="text-center text-[13px]"
      style={{
        background: 'var(--bg-soft)',
        color: 'var(--ink-mute)',
        borderTop: '1px solid var(--rule)',
        padding: '32px 22px',
      }}
      role="contentinfo"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <div className="mb-2">
          &copy; {year} {BUSINESS.nameEn} · บทเรียน &ldquo;แค่เปลี่ยนคำ ก็ทำเงิน&rdquo;
        </div>
        <nav aria-label="ลิงก์ทางกฎหมาย">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:opacity-100"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address
          className="not-italic mt-4 text-[12px] space-y-0.5"
          style={{ color: 'var(--ink-mute)' }}
        >
          <p>{BUSINESS.nameEn} · เลขผู้เสียภาษี {BUSINESS.taxId}</p>
          <p>
            <a
              href={`mailto:${BUSINESS.email}`}
              style={{ color: 'var(--ink-soft)' }}
            >
              {BUSINESS.email}
            </a>
          </p>
        </address>
      </div>
    </footer>
  )
}
