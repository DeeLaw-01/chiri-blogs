import { getServerSideSitemap } from 'next-sitemap'
import { CONFIG_SITE } from 'src/config'

const SITE_A_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://dashboard.chiri.pk'

export async function GET() {
  const apiUrl = `${SITE_A_URL}/api/sitemap-public`
  
  try {
    const res = await fetch(apiUrl, {
       next: { revalidate: 3600 },
       headers: {
         'Accept': 'application/json',
       },
       // Add timeout to prevent hanging
       signal: AbortSignal.timeout(10000) // 10 second timeout
    })
    
    if (!res.ok) {
        const errorText = await res.text()
        console.error(`[server-sitemap] Failed to fetch from Site A (${res.status}):`, errorText)
        return getServerSideSitemap([])
    }

    const data = await res.json()

    if (!Array.isArray(data)) {
      console.error('Invalid data format from Site A:', typeof data)
      return getServerSideSitemap([])
    }

    if (data.length === 0) {
      console.warn('No blogs found in sitemap from Site A')
    }

    const fields = data
      .filter((item: any) => {
        // Filter out items without a slug or customURL
        if (!item.slug && !item.customURL) {
          console.warn('Skipping item without slug or customURL:', item)
          return false
        }
        return true
      })
      .map((item: any) => {
        // Use slug if available, otherwise fall back to customURL
        const identifier = item.slug || item.customURL
        let path = ''
        
        switch (item.templateType) {
          case 'airline':
            path = `/airlines/${identifier}`
            break
          case 'cities':
            path = `/cities/${identifier}`
            break
          case 'countries':
            path = `/countries/${identifier}`
            break
          case 'cityToCity':
            path = `/routes/${identifier}`
            break
          case 'blogArticle':
            path = `/en/blog/${identifier}`
            break
          default:
            path = `/${identifier}`
        }

        return {
          loc: `${CONFIG_SITE.BASE_LINK}${path}`,
          lastmod: item.updatedAt || new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7,
        }
      })

    return getServerSideSitemap(fields)
  } catch (error: any) {
    // Handle connection errors gracefully
    if (error?.code === 'ECONNREFUSED' || error?.cause?.code === 'ECONNREFUSED') {
      console.error(`[server-sitemap] Connection refused to ${apiUrl}`)
    } else if (error?.name === 'AbortError' || error?.name === 'TimeoutError') {
      console.error(`[server-sitemap] Request timeout to ${apiUrl}`)
    } else {
      console.error('[server-sitemap] Sitemap generation error:', error)
    }
    // Return empty sitemap instead of crashing
    return getServerSideSitemap([])
  }
}
