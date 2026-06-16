'use client'
import { useEffect } from 'react'
import { track, gtagEvent } from '@/lib/analytics'
import { trackSpEvent } from '@/lib/track'

export default function AnalyticsInit() {
  useEffect(() => {
    // PostHog (existing)
    track('sp_view')
    // GA4
    gtagEvent('sp_view')

    // Time-on-page events
    const t3 = setTimeout(() => trackSpEvent('sp_3s_active'), 3000)
    const t10 = setTimeout(() => trackSpEvent('sp_10s_active'), 10000)

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
      if (pct >= 25 && !fired.has('25')) { fired.add('25'); trackSpEvent('sp_scroll_25') }
      if (pct >= 50 && !fired.has('50')) { fired.add('50'); track('sp_scroll_50'); gtagEvent('sp_scroll_50') }
      if (pct >= 90 && !fired.has('90')) { fired.add('90'); track('sp_scroll_90'); gtagEvent('sp_scroll_90') }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // CTA visibility — fires sp_cta_visible once per unique position
    const seenCtas = new Set<string>()
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const pos = (entry.target as HTMLElement).dataset.ctaPosition
            if (pos && !seenCtas.has(pos)) {
              seenCtas.add(pos)
              trackSpEvent('sp_cta_visible', { cta_location: pos })
            }
          }
        }
      },
      { threshold: 0.5 },
    )
    document.querySelectorAll('[data-cta-position]').forEach((el) => ctaObserver.observe(el))

    return () => {
      clearTimeout(t3)
      clearTimeout(t10)
      document.removeEventListener('click', onCTAClick)
      window.removeEventListener('scroll', onScroll)
      ctaObserver.disconnect()
    }
  }, [])

  return null
}
