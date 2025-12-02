import { NextRequest, NextResponse } from 'next/server'

// Force dynamic route since we read query params
export const dynamic = 'force-dynamic'

// Site A base URL - where the real API logic lives
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://dashboard.chiri.pk'

/**
 * Proxy API route for one-way flights
 * 
 * This route forwards requests from Site B to Site A's one-way flights API.
 * Site A handles all the complex logic for flight search, rate limiting, etc.
 */
export async function GET(request: NextRequest) {
  try {
    // Get all query parameters from the incoming request
    const searchParams = request.nextUrl.searchParams
    
    // Forward the request to Site A with all query params
    const siteAUrl = `${SITE_A_BASE_URL}/api/one-way-flights?${searchParams.toString()}`
    
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
      console.error('[Proxy] Site A one-way flights API error:', response.status, errorText)
      
      return NextResponse.json(
        { 
          error: 'Failed to fetch one-way flights from Site A',
          details: errorText,
          status: response.status
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Return the data with appropriate caching headers
    // Shorter cache for flight data as prices change frequently
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // 5 min cache, 10 min stale
      },
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[Proxy] Error forwarding one-way flights request:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy one-way flights request',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
