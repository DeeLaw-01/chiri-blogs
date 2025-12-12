import { NextRequest, NextResponse } from 'next/server'

// Force dynamic route since we read query params
export const dynamic = 'force-dynamic'

// Site A base URL - where the real API logic lives
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://dashboard.chiri.pk'

/**
 * Proxy API route for cities
 * 
 * This route forwards requests from Site B to Site A's cities-list API.
 * All city data management happens in Site A's MongoDB.
 */
export async function GET(request: NextRequest) {
  try {
    // Get all query parameters from the incoming request
    const searchParams = request.nextUrl.searchParams
    
    // Forward the request to Site A with all query params
    const siteAUrl = `${SITE_A_BASE_URL}/api/cities-list?${searchParams.toString()}`
    
    
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
      console.error('[Proxy] Site A cities-list API error:', response.status, errorText)
      
      return NextResponse.json(
        { 
          error: 'Failed to fetch cities from Site A',
          details: errorText,
          status: response.status
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Return the data with appropriate caching headers
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200', // 10 min cache, 20 min stale
      },
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[Proxy] Error forwarding cities-list request:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy cities-list request',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
