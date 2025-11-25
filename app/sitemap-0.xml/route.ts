import { getServerSideSitemap } from 'next-sitemap'
import { CONFIG_SITE } from 'src/config'
import locales from 'src/data/locales'

const SITE_A_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://dashboard.chiri.pk'

export async function GET() {
  try {
    // Fetch allowed static pages from Site A
    const res = await fetch(`${SITE_A_URL}/api/sitemap-public?type=static`, {
       next: { revalidate: 3600 }
    })

    let paths = []
    
    if (res.ok) {
        const staticPages = await res.json()
        paths = staticPages.map((p: any) => p.path)
    } else {
        // Fallback to hardcoded list if API fails
        console.error('Failed to fetch static pages from Site A, using fallback')
        paths = [
          '',
          '/beach',
          '/christmas',
          '/multi-city',
          '/single-city',
          '/snow',
          '/sustainable',
          '/weekend',
          '/about',
          '/blog',
          '/feedback',
          '/giftcard',
          '/help',
          '/manage-booking',
          '/partners',
          '/privacy',
          '/terms-and-conditions',
        ]
    }

    const sitemap = paths.flatMap((path: string) =>
      locales.map((locale) => {
        const basePath = `${CONFIG_SITE.BASE_LINK}/${locale.value}${path}`

        return {
          loc: basePath,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            {
              href: `${CONFIG_SITE.BASE_LINK}${path}`,
              hreflang: 'x-default',
            },
            ...locales.map((alternateLoc) => ({
              href: `${CONFIG_SITE.BASE_LINK}/${alternateLoc.value}${path}`,
              hreflang: alternateLoc.code,
            })),
          ],
        }
      })
    )

    return getServerSideSitemap(sitemap)
  } catch (error) {
    console.error('Static sitemap generation error:', error)
    return getServerSideSitemap([])
  }
}
