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

    // sentinel placed at bottom of hero (100vh)
    const sentinel = document.getElementById('hero-sentinel')
    if (sentinel) observer.observe(sentinel)

    // fallback: scroll listener
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
            className="
              flex flex-col items-center gap-0.5
              bg-[var(--line-green)] hover:bg-[var(--line-green-dark)]
              text-white font-bold rounded-2xl shadow-2xl
              px-6 py-3 text-base
              active:scale-[.97] transition-all duration-150
              whitespace-nowrap
            "
          >
            <span>🟢 แอด LINE รับ 3 บทฟรี →</span>
            <span className="text-xs font-normal opacity-85">ไม่ต้องลงทะเบียน · อ่านได้เลย</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
