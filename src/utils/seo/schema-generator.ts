import { CONFIG_COMPANY, CONFIG_SITE } from 'src/config'

// Define the Blog interface here since it's not shared across pages
interface BlogMetadata {
  seoTitle?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  canonicalUrl?: string
  noindex?: boolean
  publishedDate?: string
  modifiedDate?: string
  [key: string]: any
}

interface BreadcrumbItem {
  name: string
  link: string
  icon?: string
}

interface BlogData {
  title: string
  coverImage?: string
  sections: any[]
  breadcrumbs?: BreadcrumbItem[]
  metadata?: BlogMetadata
  templateType?: string
  slug?: string
  customURL?: string
}

export function generateSchema(blog: BlogData, url: string) {
  const schemaGraph: any[] = []

  // 1. Main WebPage Node
  let mainType = 'WebPage'
  let aboutEntity: any = null

  // Collect all images from sections to add to the main entity
  const pageImages: string[] = blog.coverImage ? [blog.coverImage] : []

  // Map templateType to Schema
  switch (blog.templateType) {
    case 'airline':
      aboutEntity = {
        '@type': 'Airline',
        name: blog.title,
        image: blog.coverImage
      }
      break
    case 'cities':
      aboutEntity = {
        '@type': 'City',
        name: blog.title,
        image: blog.coverImage
      }
      break
    case 'countries':
      aboutEntity = {
        '@type': 'Country',
        name: blog.title,
        image: blog.coverImage
      }
      break
    case 'cityToCity':
       aboutEntity = {
         '@type': 'Trip',
         name: blog.title,
         description: blog.metadata?.description
       }
       break
    case 'blogArticle':
      mainType = 'BlogPosting'
      break
  }

  const mainNode: any = {
    '@context': 'https://schema.org',
    '@type': mainType,
    '@id': `${url}#${mainType.toLowerCase()}`,
    url: url,
    name: blog.title,
    headline: blog.title,
    description: blog.metadata?.description || '',
    image: pageImages,
    datePublished: blog.metadata?.publishedDate || new Date().toISOString(),
    dateModified: blog.metadata?.modifiedDate || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Chiri',
      url: 'https://chiri.pk'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chiri',
      url: 'https://chiri.pk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chiri.pk/logo.png'
      }
    },
    isPartOf: {
        '@type': 'WebSite',
        '@id': `${CONFIG_SITE.BASE_LINK}/#website`,
        name: CONFIG_COMPANY.COMPANY_NAME,
        url: CONFIG_SITE.BASE_LINK
    },
    hasPart: [] // Will populate with section schemas
  }

  if (aboutEntity && mainType === 'WebPage') {
    mainNode['about'] = aboutEntity
  }
  
  // Custom types as requested
  if (blog.templateType === 'airline') mainNode['@type'] = ['WebPage', 'CollectionPage'] 
  if (blog.templateType === 'cities') mainNode['@type'] = ['WebPage', 'TouristDestination']
  if (blog.templateType === 'countries') mainNode['@type'] = ['WebPage', 'TouristDestination']

  // 2. Process Sections for Schema
  if (blog.sections && blog.sections.length > 0) {
    blog.sections.forEach((section: any) => {
       // Collect images
       if (section.image) pageImages.push(section.image)
       if (section.features) {
         section.features.forEach((f: any) => {
           if (f.image) pageImages.push(f.image)
         })
       }

       // FAQ Section
       if (section.type === 'FAQSection' && section.questions?.length > 0) {
         const faqPage = {
           '@context': 'https://schema.org',
           '@type': 'FAQPage',
           mainEntity: section.questions.map((q: any) => ({
             '@type': 'Question',
             name: q.question,
             acceptedAnswer: {
               '@type': 'Answer',
               text: q.answer
             }
           }))
         }
         schemaGraph.push(faqPage)
         mainNode.hasPart.push({ '@id': `${url}#faq` }) // Link loosely if needed, but graph is better
       }

       // Table Section
       if (section.type === 'TableSection') {
         const table = {
           '@type': 'Table',
           about: section.title,
           name: section.title
         }
         mainNode.hasPart.push(table)
       }
       
       // Flight Lists / Products
       if (['FlightList', 'CheapFlightSection'].includes(section.type) && section.flights?.length > 0) {
          // Represent as a Product (Flight Service) with AggregateOffer
          const lowPrice = section.flights.reduce((min: number, f: any) => {
             const price = parseFloat(f.price?.replace(/[^0-9.]/g, '') || '0')
             return (price > 0 && price < min) ? price : min
          }, Infinity)

          if (lowPrice !== Infinity) {
             const product = {
                '@type': 'Product',
                name: section.title || `Flights for ${blog.title}`,
                description: `Flight deals found on ${blog.title}`,
                offers: {
                   '@type': 'AggregateOffer',
                   lowPrice: lowPrice,
                   priceCurrency: 'PKR', // Assuming PKR based on context
                   offerCount: section.flights.length
                }
             }
             mainNode.hasPart.push(product)
          }
       }
    })
  }
  
  // Remove hasPart if empty
  if (mainNode.hasPart.length === 0) delete mainNode.hasPart

  schemaGraph.push(mainNode)

  // 3. Breadcrumbs
  if (blog.breadcrumbs && blog.breadcrumbs.length > 0) {
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: blog.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.link.startsWith('http') ? item.link : `${CONFIG_SITE.BASE_LINK}${item.link.startsWith('/') ? '' : '/'}${item.link}`
      }))
    }
    schemaGraph.push(breadcrumbList)
  }

  if (schemaGraph.length > 1) {
      return {
          '@context': 'https://schema.org',
          '@graph': schemaGraph
      }
  }
  
  return schemaGraph[0]
}
