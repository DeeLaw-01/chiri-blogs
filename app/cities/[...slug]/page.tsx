import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { DynamicBlogViewer } from '@/ui/shadcn/blog/components'
import Navbar from '@/ui/features/new-navbar'
import Footer from '@/ui/features/shared-layout/footer'

const SITE_A_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://chiri.pk'

interface BlogMetadata {
  seoTitle?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  canonicalUrl?: string
  fromCity?: {
    name: string
    locode: string
    country?: string
  }
  toCity?: {
    name: string
    locode: string
    country?: string
  }
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
    return { title: 'City Not Found' }
  }

  // Use SEO title if available, fallback to regular title
  const pageTitle = blog.metadata?.seoTitle || blog.title
  
  // Generate canonical URL
  const canonicalUrl = blog.metadata?.canonicalUrl || `https://chiri.pk/cities/${blogSlug}`

  return {
    title: pageTitle,
    description: blog.metadata?.description || '',
    keywords: blog.metadata?.keywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
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

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const blogSlug = slug[slug.length - 1]
  const blog = await getBlog(blogSlug)

  if (!blog) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicBlogViewer
            sections={blog.sections}
            title={blog.title}
            coverImage={blog.coverImage}
            renderFlightSearchFilter={true}
            breadcrumbs={blog.breadcrumbs}
            metadata={blog.metadata}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}