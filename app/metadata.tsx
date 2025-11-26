import { Metadata } from 'next'
import { headers } from 'next/headers'
import { CONFIG_COMPANY, CONFIG_METADATA, CONFIG_SITE } from 'src/config'
import locales from 'src/data/locales'
import { replaceLocale } from 'src/utils/languageUtils'

export async function getMetadata(_locale: string): Promise<Metadata> {
  const requestUrl = headers().get('x-request-url') ?? ''
  // Construct absolute URL for OpenGraph
  const ogUrl = requestUrl 
    ? (requestUrl.startsWith('http') ? requestUrl : new URL(requestUrl, CONFIG_SITE.BASE_LINK).toString())
    : CONFIG_SITE.BASE_LINK
  const canonicalUrl = requestUrl 
    ? new URL(encodeURI(requestUrl), CONFIG_SITE.BASE_LINK)
    : new URL(CONFIG_SITE.BASE_LINK)

  return {
    title: {
      template: `${CONFIG_COMPANY.COMPANY_NAME} | %s`,
      default: `${CONFIG_COMPANY.COMPANY_NAME} | Travel deals in 3 seconds`,
    },
    description: 'Find the best travel deals with artificial intelligence. Our algorithm connects flights, trains, and buses for perfect trips with matching hotels.',
    keywords: 'Travel, multi-destination, hotels, flights, buses, trains, AI, artificial intelligence, cheap, deals, packages',
    robots: { index: true },
    other: {
      google: 'notranslate',
      'fb:app_id': '439538434573199',
      'facebook-domain-verification': 'xaw5wuy8snxjwye82r2v3knjqqvb19',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': replaceLocale(requestUrl, 'en'),
        ...Object.fromEntries(
          locales.map(({ value }) => [value, replaceLocale(requestUrl, value)])
        ),
      },
    },
    openGraph: {
      url: ogUrl,
      type: 'website',
      siteName: CONFIG_COMPANY.COMPANY_NAME,
      title: `${CONFIG_COMPANY.COMPANY_NAME} | Travel deals in 3 seconds`,
      description: 'Find the best travel deals with artificial intelligence. Our algorithm connects flights, trains, and buses for perfect trips with matching hotels.',
      images: [{ 
        url: CONFIG_METADATA.IMG, 
        width: 1200, 
        height: 630,
        alt: 'Chiri.pk - Travel deals in 3 seconds'
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${CONFIG_COMPANY.COMPANY_NAME} | Travel deals in 3 seconds`,
      description: 'Find the best travel deals with artificial intelligence. Our algorithm connects flights, trains, and buses for perfect trips with matching hotels.',
      images: [CONFIG_METADATA.IMG],
    },
  }
}
