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

