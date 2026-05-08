import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fefce8 0%, #fef08a 50%, #fbbf24 100%)',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Brand */}
        <div style={{ fontSize: 28, color: '#92400e', fontWeight: 700, marginBottom: 24 }}>
          phachara.com
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#1c1917',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          แค่เปลี่ยนคำ
          <br />
          <span style={{ color: '#b45309' }}>ก็ทำเงิน</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: 32, color: '#44403c', textAlign: 'center', marginBottom: 40 }}>
          คอร์ส Copywriting 24 บท · Swipe File · Template
        </div>

        {/* CTA badge */}
        <div
          style={{
            background: '#06C755',
            color: 'white',
            fontWeight: 700,
            fontSize: 28,
            padding: '16px 40px',
            borderRadius: 50,
          }}
        >
          🟢 แอด LINE รับ 3 บทแรกฟรี
        </div>
      </div>
    ),
    { ...size },
  )
}
