export {}
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    ttq?: { track?: (event: string, params?: Record<string, unknown>) => void; page?: () => void }
    clarity?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
