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

    // FIX 4: visibility-aware engagement timers (replaces naive setTimeout)
    // Counts only active time when tab is visible — avoids false positives from tabbed-away sessions
    let activeMs = 0
    let prevTick = Date.now()
    let t3Fired = false, t10Fired = false
    const engagementInterval = setInterval(() => {
      const now = Date.now()
      if (document.visibilityState === 'visible') {
        activeMs += now - prevTick
        if (!t3Fired && activeMs >= 3000) { t3Fired = true; trackSpEvent('sp_3s_active') }
        if (!t10Fired && activeMs >= 10000) { t10Fired = true; trackSpEvent('sp_10s_active') }
        if (t3Fired && t10Fired) clearInterval(engagementInterval)
      }
      prevTick = now
    }, 500)

    // Scroll depth
    const fired = new Set<string>()
    function onScroll() {
      const pct = Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100)
      if (pct >= 25 && !fired.has('25')) { fired.add('25'); trackSpEvent('sp_scroll_25') }
      if (pct >= 50 && !fired.has('50')) { fired.add('50'); track('sp_scroll_50'); gtagEvent('sp_scroll_50') }
      if (pct >= 90 && !fired.has('90')) { fired.add('90'); track('sp_scroll_90'); gtagEvent('sp_scroll_90') }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // FIX 2: sp_cta_visible ย้ายไปอยู่ใน useEffect ของแต่ละ CTA component แล้ว
    // (LineCTAButton, Nav, StickyLineCTA ต่างก็ call observeCtaVisible ตอนตัวเองMount)

    return () => {
      clearInterval(engagementInterval)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
