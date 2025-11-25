import { getServerSideSitemap } from 'next-sitemap'
import { CONFIG_SITE } from 'src/config'

const SITE_A_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://dashboard.chiri.pk'

export async function GET() {
  try {
    const res = await fetch(`${SITE_A_URL}/api/sitemap-public`, {
       next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
        console.error('Failed to fetch sitemap from Site A')
        return getServerSideSitemap([])
    }

    const data = await res.json()

    const fields = data.map((item: any) => {
      let path = ''
      switch (item.templateType) {
        case 'airline':
          path = `/airlines/${item.slug}`
          break
        case 'cities':
          path = `/cities/${item.slug}`
          break
        case 'countries':
          path = `/countries/${item.slug}`
          break
         case 'cityToCity':
          path = `/routes/${item.slug}`
          break
        case 'blogArticle':
          path = `/en/blog/${item.slug}`
          break
        default:
          path = `/${item.slug}`
      }

      return {
        loc: `${CONFIG_SITE.BASE_LINK}${path}`,
        lastmod: item.updatedAt || new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
      }
    })

    return getServerSideSitemap(fields)
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return getServerSideSitemap([])
  }
}
