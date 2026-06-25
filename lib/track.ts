'use client'

import { COURSE } from './constants'

// ── sp_* behavior event layer ─────────────────────────────────────────────────
// Used by: /tiktok bridge (TikTokBridgeContent)

function getSpSessionId(): string {
  try {
    const existing = sessionStorage.getItem('sp_session_id')
    if (existing) return existing
    const id = crypto.randomUUID()
    sessionStorage.setItem('sp_session_id', id)
    return id
  } catch {
    return 'no_storage_' + Math.random().toString(36).slice(2, 10)
  }
}

function getSpBaseParams(): Record<string, unknown> {
  const p = new URLSearchParams(window.location.search)
  const base: Record<string, unknown> = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    device: window.matchMedia('(hover: hover) and (pointer: fine)').matches
      ? 'desktop'
      : 'mobile',
    sp_session_id: getSpSessionId(),
  }
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
    const val = p.get(key)
    if (val) base[key] = val
  }
  return base
}

export function trackSpEvent(
  eventName: string,
  extraParams: Record<string, unknown> = {},
  useBeacon = false,
): void {
  if (typeof window === 'undefined') return
  const params = { ...getSpBaseParams(), ...extraParams }

  if (typeof window.gtag === 'function') {
    window.gtag(
      'event',
      eventName,
      useBeacon ? { ...params, transport_type: 'beacon' } : params,
    )
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName)
  }
}

// ── sp_cta_visible — self-registration (module-level guard prevents duplicate per position) ──
const _seenCtaPositions = new Set<string>()

export function observeCtaVisible(el: Element, position: string): () => void {
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !_seenCtaPositions.has(position)) {
        _seenCtaPositions.add(position)
        trackSpEvent('sp_cta_visible', { cta_location: position })
      }
    },
    { threshold: 0.5 },
  )
  obs.observe(el)
  return () => obs.disconnect()
}

// ── Canonical CTA event set — single source of truth for all CTA buttons ─────
// sp_cta_click + line_add + generate_lead (GA4)
// LINE_ADD + Lead (Meta custom + standard)
// ClickButton (TikTok)
export function fireCTAEvents(position: string): void {
  if (typeof window === 'undefined') return
  trackSpEvent('checkout_clicked', { cta_location: position }, true)
  trackSpEvent('sp_cta_click', { cta_location: position })
  trackSpEvent('line_add', { cta_location: position })
  window.gtag?.('event', 'generate_lead', {
    value: COURSE.price,
    currency: COURSE.currency,
    event_category: 'cta_click',
    event_label: position,
  })
  const leadEventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2)}_${position}`
  window.fbq?.('trackCustom', 'LINE_ADD', {
    content_name: 'LINE OA Signup',
    content_category: 'Lead Generation',
    currency: 'THB',
    value: 0,
    cta_location: position,
  }, { eventID: leadEventId })
  window.fbq?.('track', 'Lead', {
    content_name: 'LINE OA Signup',
    content_category: 'Lead Generation',
    currency: 'THB',
    value: 0,
    cta_location: position,
  }, { eventID: leadEventId })
  window.ttq?.track?.('ClickButton', { content_name: 'LINE CTA', content_category: position })
}
