'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lineUrl } from '@/lib/constants'
import { track } from '@/lib/analytics'

export default function StickyLineCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const threshold = typeof window !== 'undefined' ? window.innerHeight : 800

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )

    const sentinel = document.getElementById('hero-sentinel')
    if (sentinel) observer.observe(sentinel)

    const onScroll = () => setVisible(window.scrollY > threshold)
    if (!sentinel) window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const href = lineUrl('sticky')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="
            fixed bottom-4 left-1/2 -translate-x-1/2
            md:left-auto md:right-5 md:translate-x-0 md:bottom-8
            z-50
          "
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('sp_cta_click', { position: 'sticky' })}
            className="flex items-center gap-3 rounded-[16px] px-4 py-3 transition-opacity hover:opacity-95"
            style={{
              background: 'var(--line-green)',
              boxShadow: '0 8px 30px rgba(6,199,85,0.35)',
              color: 'white',
            }}
          >
            {/* LINE icon box */}
            <span
              className="grid place-items-center rounded-[8px] font-black text-[11px] shrink-0"
              style={{
                width: 36,
                height: 36,
                background: 'white',
                color: 'var(--line-green)',
              }}
              aria-hidden="true"
            >
              LINE
            </span>
            <div>
              <div className="font-semibold text-[14px] leading-none mb-0.5">เรียนฟรี 2 บทเรียน</div>
              <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                ไม่ต้องสมัคร · อ่านได้เลย
              </div>
            </div>
            <span className="ml-1 font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }} aria-hidden="true">→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
