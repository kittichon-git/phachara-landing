'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import type { LinePosition } from '@/lib/constants'

export default function AnalyticsInit() {
  useEffect(() => {
    // Page view
    track('sp_view')

    // CTA click tracking — event delegation on data-cta-position anchors
    function onCTAClick(e: MouseEvent) {
      const el = (e.target as Element).closest('[data-cta-position]')
      if (el) {
        const position = el.getAttribute('data-cta-position') as LinePosition
        track('sp_cta_click', { position })
        track('sp_line_redirect')
      }
    }
    document.addEventListener('click', onCTAClick)

    // Scroll depth milestones
    const fired = new Set<string>()
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)
      if (pct >= 50 && !fired.has('50')) { fired.add('50'); track('sp_scroll_50') }
      if (pct >= 90 && !fired.has('90')) { fired.add('90'); track('sp_scroll_90') }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('click', onCTAClick)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
