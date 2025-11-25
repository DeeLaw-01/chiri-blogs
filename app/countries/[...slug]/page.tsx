import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { DynamicBlogViewer } from '@/ui/shadcn/blog/components'
import Navbar from '@/ui/features/new-navbar'
import Footer from '@/ui/features/shared-layout/footer'

const SITE_A_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://dashboard.chiri.pk'

interface BlogMetadata {
  seoTitle?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  canonicalUrl?: string
  noindex?: boolean
  [key: string]: any
}

interface Blog {
  title: string
  coverImage?: string
  sections: any[]
  breadcrumbs?: any[]
  metadata?: BlogMetadata
}

interface Props {
  params: Promise<{ slug: string[] }>
}

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`${SITE_A_URL}/api/blog-templates/slug/${slug}`, {
    next: { revalidate: 1800 }
  })
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blogSlug = slug[slug.length - 1]
  const blog = await getBlog(blogSlug)

  if (!blog) {
    return { title: 'Country Not Found' }
  }

  // Use SEO title if available, fallback to regular title
  const pageTitle = blog.metadata?.seoTitle || blog.title
  
  // Generate canonical URL - always self-referencing to current domain
  const canonicalUrl = blog.metadata?.canonicalUrl || `https://www.chiri.pk/countries/${blogSlug}`

  return {
    title: pageTitle,
    description: blog.metadata?.description || '',
    keywords: blog.metadata?.keywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !blog.metadata?.noindex,
      follow: true,
      googleBot: {
        index: !blog.metadata?.noindex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: blog.metadata?.ogTitle || pageTitle,
      description: blog.metadata?.ogDescription || blog.metadata?.description || '',
      images: [blog.coverImage || ''],
      url: canonicalUrl,
      type: 'article',
    },
  }
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params
  const blogSlug = slug[slug.length - 1]
  const blog = await getBlog(blogSlug)

  if (!blog) notFound()

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.metadata?.description || '',
    image: blog.coverImage ? [blog.coverImage] : [],
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://chiri.pk/countries/${blogSlug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen">
        <DynamicBlogViewer
          sections={blog.sections}
          title={blog.title}
          coverImage={blog.coverImage}
          renderFlightSearchFilter={true}
        />
      </main>
      <Footer />
    </>
  )
}