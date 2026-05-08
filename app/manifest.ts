import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'แค่เปลี่ยนคำ ก็ทำเงิน | phachara.com',
    short_name: 'phachara.com',
    description: 'คอร์ส Copywriting 24 บท — framework เขียนขายออนไลน์ให้คนกดซื้อ',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#fbbf24',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
