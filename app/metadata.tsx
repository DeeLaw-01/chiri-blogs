import { Metadata } from 'next'
import { headers } from 'next/headers'
import { CONFIG_COMPANY, CONFIG_METADATA, CONFIG_SITE } from 'src/config'
import locales from 'src/data/locales'
import getServerTranslations from 'src/utils/getServerTranslations'
import { replaceLocale } from 'src/utils/languageUtils'

export async function getMetadata(locale: string): Promise<Metadata> {
  const { t } = await getServerTranslations({ locale: locale })
  const url = headers().get('x-request-url') ?? ''

  return {
    title: {
      template: `${CONFIG_COMPANY.COMPANY_NAME} | %s`,
      default: `${CONFIG_COMPANY.COMPANY_NAME} | ${t(CONFIG_METADATA.TITLE)}`,
    },
    description: t(CONFIG_METADATA.DESC),
    keywords: t(CONFIG_METADATA.KEYWORDS),
    robots: { index: true },
    other: {
      google: 'notranslate',
      'fb:app_id': '439538434573199',
      'facebook-domain-verification': 'xaw5wuy8snxjwye82r2v3knjqqvb19',
    },
    alternates: {
      canonical: new URL(encodeURI(url), CONFIG_SITE.BASE_LINK),
      languages: {
        'x-default': replaceLocale(url, 'en'),
        ...Object.fromEntries(
          locales.map(({ value }) => [value, replaceLocale(url, value)])
        ),
      },
    },
    openGraph: {
      url,
      type: 'website',
      siteName: CONFIG_COMPANY.COMPANY_NAME,
      title: t(CONFIG_METADATA.TITLE),
      description: t(CONFIG_METADATA.DESC),
      images: [{ url: CONFIG_METADATA.IMG, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t(CONFIG_METADATA.TITLE),
      description: t(CONFIG_METADATA.DESC),
      images: [CONFIG_METADATA.IMG],
    },
  }
}
