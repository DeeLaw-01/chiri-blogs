import { CONFIG_COMPANY, CONFIG_SITE } from 'src/config'
import { BlogType } from 'ui/features/blog/types/blog.type'
import JSONLD from 'ui/shared/json-ld'

type StructuredDataProps = {
  blog: BlogType
}

export default function StructuredData({ blog }: StructuredDataProps) {
  const getStructuredData = (): object => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.title,
      image: [blog.headerImageURL],
      datePublished: blog.publishTime,
      dateModified: blog.lastUpdateTime,
      author: [
        {
          '@type': 'Organization',
          name: CONFIG_COMPANY.COMPANY_NAME,
          url: CONFIG_SITE.BASE_LINK,
        },
      ],
    }
  }

  return <JSONLD structuredData={getStructuredData()} />
}
