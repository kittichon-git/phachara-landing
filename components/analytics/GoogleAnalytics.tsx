'use client'
import Script from 'next/script'
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID
// Stub is injected in layout <head> — this only loads the remote measurement lib
export function GoogleAnalytics() {
  if (!GA_ID) return null
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
}
