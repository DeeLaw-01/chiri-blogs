import { NextRequest, NextResponse } from 'next/server'

// Force dynamic route since we read params
export const dynamic = 'force-dynamic'

// Site A base URL - where the real API logic lives
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://dashboard.chiri.pk'

/**
 * Proxy API route for fetching blog templates by slug
 * 
 * This route forwards requests from Site B to Site A's blog-templates API.
 * Used by SSR pages to fetch blog data for rendering with proper SEO.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    // Forward the request to Site A
    const siteAUrl = `${SITE_A_BASE_URL}/api/blog-templates/slug/${slug}`
    
    const response = await fetch(siteAUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Forward request timeout
      signal: request.signal,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[Proxy] Site A blog-templates API error:', response.status, errorText)
      
      // Return 404 for not found, otherwise 500
      const statusCode = response.status === 404 ? 404 : 500
      
      return NextResponse.json(
        { 
          error: response.status === 404 ? 'Blog not found' : 'Failed to fetch blog from Site A',
          details: errorText,
          status: response.status
        },
        { status: statusCode }
      )
    }

    const data = await response.json()
    
    // Return the data with appropriate caching headers
    // Longer cache for blog content as it changes less frequently
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600', // 30 min cache, 1 hour stale
      },
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[Proxy] Error forwarding blog-templates slug request:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy blog-templates slug request',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
