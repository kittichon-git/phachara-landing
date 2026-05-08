import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://phachara.com',               lastModified: new Date(), changeFrequency: 'monthly', priority: 1   },
    { url: 'https://phachara.com/contact',        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: 'https://phachara.com/legal/refund',   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
    { url: 'https://phachara.com/legal/terms',    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
    { url: 'https://phachara.com/legal/privacy',  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
    { url: 'https://phachara.com/legal/cookie',   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
