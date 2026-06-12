'use client'

import type { LinePosition } from './constants'

// ── PostHog event names (existing — do not rename) ────────────────────────
type SpEvent =
  | 'sp_view'
  | 'sp_scroll_50'
  | 'sp_scroll_90'
  | 'sp_cta_click'
  | 'sp_line_redirect'

type EventProps = { position?: LinePosition } | Record<string, never>

let _posthog: { capture: (e: string, p?: object) => void } | null = null

function getPostHog() {
  if (_posthog) return _posthog
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return null
  import('posthog-js').then((mod) => {
    const ph = mod.default
    ph.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
      capture_pageview: false,
      persistence: 'memory',
    })
    _posthog = ph
  })
  return null
}

/** PostHog event — no-op when key is missing */
export function track(event: SpEvent, props?: EventProps) {
  const ph = getPostHog()
  if (!ph) return
  ph.capture(event, props)
}

// ── GA4 helper ────────────────────────────────────────────────────────────
export function gtagEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', eventName, params)
}

// ── Meta Pixel helper ─────────────────────────────────────────────────────
export function fbqEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.fbq?.('trackCustom', eventName, params)
}

// ── TikTok Pixel helper ───────────────────────────────────────────────────
export function ttqEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.ttq?.track?.(eventName, params)
}

// ── CTA click — fire all platforms before redirect ────────────────────────
export function trackCtaClick(position: LinePosition) {
  // PostHog (existing events)
  track('sp_cta_click', { position })
  track('sp_line_redirect')
  // GA4
  gtagEvent('LineAddIntent', { cta_location: `sp_${position}` })
  // Meta Pixel
  fbqEvent('LINE_ADD', { cta_location: `sp_${position}` })
  // TikTok Pixel
  ttqEvent('ClickButton', { content_category: 'salepage', content_name: `cta_${position}` })
}
