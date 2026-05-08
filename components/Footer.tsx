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
      className="py-7 px-5 text-center text-[13px]"
      style={{ background: '#1a140d', color: 'rgba(246,239,227,0.5)' }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto">
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
                  style={{ color: 'rgba(246,239,227,0.7)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic mt-4 text-[12px] space-y-0.5" style={{ color: 'rgba(246,239,227,0.35)' }}>
          <p>{BUSINESS.nameEn} · เลขผู้เสียภาษี {BUSINESS.taxId}</p>
          <p>
            <a href={`mailto:${BUSINESS.email}`} style={{ color: 'rgba(246,239,227,0.5)' }}>
              {BUSINESS.email}
            </a>
          </p>
        </address>
      </div>
    </footer>
  )
}
