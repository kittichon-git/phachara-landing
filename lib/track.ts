'use client'

// ── sp_* behavior event layer ─────────────────────────────────────────────────
// Used by: /tiktok bridge (TikTokBridgeContent, TikTokBridgeCta)

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
