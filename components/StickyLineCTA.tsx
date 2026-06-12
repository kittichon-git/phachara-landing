'use client'
import { useEffect, useState } from 'react'
import { lineUrl } from '@/lib/constants'
import { trackCtaClick } from '@/lib/analytics'

export default function StickyLineCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (sentinel) {
      const obs = new IntersectionObserver(
        ([e]) => setVisible(!e.isIntersecting),
        { threshold: 0 },
      )
      obs.observe(sentinel)
      return () => obs.disconnect()
    }
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-[420px]">
      <a
        href={lineUrl('sticky')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCtaClick('sticky')}
        className="flex items-center gap-3 rounded-[16px] px-4 py-3 w-full"
        style={{
          background: 'var(--line-green)',
          boxShadow: '0 8px 32px -4px rgba(6,199,85,0.5)',
          color: 'white',
        }}
      >
        <span
          className="grid place-items-center rounded-[8px] font-black text-[10px] shrink-0"
          style={{
            width: 36,
            height: 36,
            background: 'white',
            color: 'var(--line-green)',
            fontFamily: 'var(--font-heading)',
          }}
          aria-hidden="true"
        >
          LINE
        </span>
        <div>
          <div
            className="font-semibold text-[14px] leading-none mb-0.5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            เริ่มอ่านฟรี 2 บทแรกใน LINE
          </div>
          <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
            ไม่ต้องกรอกบัตร · อ่านได้เลย
          </div>
        </div>
        <span
          className="ml-auto font-semibold text-[16px]"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </div>
  )
}
