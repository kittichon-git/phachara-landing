'use client'

import { useRef, useEffect } from 'react'
import { lineUrl } from '@/lib/constants'
import { fireCTAEvents, observeCtaVisible } from '@/lib/track'

export default function Nav() {
  const navCtaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!navCtaRef.current) return
    return observeCtaVisible(navCtaRef.current, 'nav')
  }, [])

  function handleCtaClick() {
    fireCTAEvents('nav')
  }

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between"
      style={{
        background: '#FDFBF7',
        borderBottom: '1px solid #E5DDD5',
        padding: '0 40px',
        height: 60,
      }}
      aria-label="เมนูหลัก"
    >
      <a
        href="#"
        className="no-underline"
        style={{ fontSize: 20, fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.5px' }}
        aria-label="แค่เปลี่ยนคำ ก็ทำเงิน — กลับหน้าแรก"
      >
        <span style={{ color: '#E87A3D' }}>คำ</span>ทำเงิน
      </a>

      <ul
        className="hidden md:flex gap-7 list-none"
        style={{ margin: 0, padding: 0 }}
        aria-label="ลิงก์ในหน้า"
      >
        {[
          { href: '#problem', label: 'ปัญหา' },
          { href: '#curriculum', label: 'เนื้อหา' },
          { href: '#proof', label: 'รีวิว' },
          { href: '#offer', label: 'ราคา' },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="no-underline transition-colors"
              style={{ color: '#666666', fontSize: 15, fontWeight: 500 }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        ref={navCtaRef}
        href={lineUrl('nav')}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-position="nav"
        onClick={handleCtaClick}
        className="no-underline transition-colors"
        style={{
          background: '#E87A3D',
          color: '#fff',
          padding: '9px 22px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        เริ่มอ่านฟรี
      </a>
    </nav>
  )
}
