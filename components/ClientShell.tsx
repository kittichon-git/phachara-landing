'use client'
import dynamic from 'next/dynamic'
const StickyLineCTA = dynamic(() => import('./StickyLineCTA'), { ssr: false })
const AnalyticsInit = dynamic(() => import('./AnalyticsInit'), { ssr: false })
export default function ClientShell() {
  return (
    <>
      <StickyLineCTA />
      <AnalyticsInit />
    </>
  )
}
