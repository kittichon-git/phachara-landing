'use client'

import type { LinePosition } from './constants'

type EventName =
  | 'sp_view'
  | 'sp_scroll_50'
  | 'sp_scroll_90'
  | 'sp_cta_click'
  | 'sp_line_redirect'

type EventProps =
  | { position: LinePosition }
  | Record<string, never>

let _posthog: { capture: (e: string, p?: object) => void } | null = null

function getPostHog() {
  if (_posthog) return _posthog
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return null
  // dynamic import keeps posthog out of the critical path
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

export function track(event: EventName, props?: EventProps) {
  const ph = getPostHog()
  if (!ph) return          // no-op when env key is missing
  ph.capture(event, props)
}
