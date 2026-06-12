'use client'
import { useEffect } from 'react'
import { track, gtagEvent } from '@/lib/analytics'

export default function AnalyticsInit() {
  useEffect(() => {
    // PostHog (existing)
    track('sp_view')
    // GA4
    gtagEvent('sp_view')

    // CTA click tracking via event delegation on data-cta-position elements
    function onCTAClick(e: MouseEvent) {
      const el = (e.target as Element).closest('[data-cta-position]')
      if (el) {
        track('sp_cta_click', { position: el.getAttribute('data-cta-position') as never })
        track('sp_line_redirect')
        gtagEvent('sp_cta_click', { position: el.getAttribute('data-cta-position') })
      }
    }
    document.addEventListener('click', onCTAClick)

    // Scroll depth
    const fired = new Set<string>()
    function onScroll() {
      const pct = Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100)
      if (pct >= 50 && !fired.has('50')) { fired.add('50'); track('sp_scroll_50'); gtagEvent('sp_scroll_50') }
      if (pct >= 90 && !fired.has('90')) { fired.add('90'); track('sp_scroll_90'); gtagEvent('sp_scroll_90') }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('click', onCTAClick)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
