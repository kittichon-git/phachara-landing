import { BUSINESS } from '@/lib/constants'

const legalLinks = [
  { href: '/legal/refund', label: 'นโยบายคืนเงิน' },
  { href: '/legal/terms', label: 'เงื่อนไขการใช้งาน' },
  { href: '/legal/privacy', label: 'ความเป็นส่วนตัว' },
  { href: '/legal/cookie', label: 'Cookie' },
  { href: '/contact', label: 'ติดต่อเรา' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="text-center text-[13px] px-5 py-10"
      style={{ background: '#1A1A1A', color: '#888888' }}
      role="contentinfo"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>
        <div className="mb-3" style={{ color: '#AAAAAA' }}>
          &copy; {year} {BUSINESS.nameEn} · บทเรียน &ldquo;แค่เปลี่ยนคำ ก็ทำเงิน&rdquo;
        </div>
        <nav aria-label="ลิงก์ทางกฎหมาย">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:opacity-100 transition-opacity"
                  style={{ color: '#888888' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic mt-4 text-[12px]" style={{ color: '#666666' }}>
          <p>{BUSINESS.nameEn} · เลขผู้เสียภาษี {BUSINESS.taxId}</p>
          <p>
            <a href={`mailto:${BUSINESS.email}`} style={{ color: '#666666' }}>
              {BUSINESS.email}
            </a>
          </p>
        </address>
      </div>
    </footer>
  )
}
