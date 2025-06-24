import {
  TIKTOK_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PINTEREST_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
} from 'src/data/links'

import useTranslation from 'src/hooks/useTranslation'
import {
  CONFIG_METADATA,
  CONFIG_REVIEWS,
  CONFIG_SITE,
  CONFIG_COMPANY,
} from 'src/config'

export default function JSONLD({
  structuredData,
  path,
}: {
  structuredData?: object
  path?: string
}) {
  const { t } = useTranslation()

  const getDefaultStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      url: path,
      logo: `${CONFIG_SITE.BASE_LINK}/preview.png`,
      description: t(CONFIG_METADATA.DESC),
      name: `${CONFIG_COMPANY.COMPANY_NAME}`,
      legalName: `${CONFIG_COMPANY.COMPANY_LEGAL_NAME}`,
      sameAs: [
        `${TIKTOK_LINK}`,
        `${FACEBOOK_LINK}`,
        `${INSTAGRAM_LINK}`,
        `${PINTEREST_LINK}`,
        `${LINKEDIN_LINK}`,
        `${YOUTUBE_LINK}`,
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'København',
        postalCode: '1302',
        streetAddress: 'Dronningens Tværgade 7',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@tryp.com',
        telephone: '+45 43326367',
        contactType: 'Customer service',
        availableLanguage: [
          'Danish',
          'Swedish',
          'German',
          'English',
          'Portuguese',
          'Italian',
          'French',
          'Spanish',
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: `${CONFIG_REVIEWS.TRUSTPILOT_RATING}`,
        reviewCount: `${CONFIG_REVIEWS.TRUSTPILOT_REVIEWS}`,
        bestRating: '5',
      },
    }
  }

  return (
    <>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getDefaultStructuredData()),
        }}
      />

      {structuredData && (
        <script
          key="specific-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  )
}
