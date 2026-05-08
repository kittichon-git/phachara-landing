import { BUSINESS } from '@/lib/constants'

const legalLinks = [
  { href: '/legal/refund',  label: 'นโยบายการคืนเงิน' },
  { href: '/legal/terms',   label: 'ข้อกำหนดการใช้งาน' },
  { href: '/legal/privacy', label: 'นโยบายความเป็นส่วนตัว' },
  { href: '/legal/cookie',  label: 'นโยบายคุกกี้' },
  { href: '/contact',       label: 'ติดต่อเรา' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-4" role="contentinfo">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-yellow-400 font-bold text-2xl mb-3">{BUSINESS.displayName}</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              แหล่งเรียนรู้การเขียนคำขายของออนไลน์ที่ใช้ได้จริง เพิ่ม conversion ด้วยพลังของคำพูดที่ถูกต้อง
            </p>
          </div>

          {/* Business info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">ข้อมูลผู้ประกอบการ</h3>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p className="text-gray-200 font-medium">{BUSINESS.nameEn}</p>
              <p>เลขผู้เสียภาษี: {BUSINESS.taxId}</p>
              <p>{BUSINESS.address}</p>
              <p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p className="text-gray-500 text-xs mt-1">จดทะเบียน VAT แล้ว</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Legal links */}
          <nav aria-label="ลิงก์ทางกฎหมาย">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-right">
            &copy; {year} {BUSINESS.nameEn}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
