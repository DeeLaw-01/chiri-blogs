import { getServerSideSitemap } from 'next-sitemap'
import { CONFIG_SITE } from 'src/config'
import locales from 'src/data/locales'

const paths = [
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

export async function GET() {
  const sitemap = paths.flatMap((path) =>
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
}
