'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

export default function AnalyticsInit() {
  useEffect(() => {
    // Page view
    track('sp_view')

    // Scroll depth milestones
    const fired = new Set<string>()

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      if (pct >= 50 && !fired.has('50')) {
        fired.add('50')
        track('sp_scroll_50')
      }
      if (pct >= 90 && !fired.has('90')) {
        fired.add('90')
        track('sp_scroll_90')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
