import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/refund',  destination: '/legal/refund',  permanent: true },
      { source: '/terms',   destination: '/legal/terms',   permanent: true },
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
    ]
  },
}

export default nextConfig
