import { NextRequest, NextResponse } from 'next/server'

// Force dynamic route since we read query params
export const dynamic = 'force-dynamic'

// Site A base URL - where the real API logic lives
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://dashboard.chiri.pk'

/**
 * Proxy API route for carriers
 * 
 * This route forwards requests from Site B to Site A's carriers API.
 * This approach:
 * - Keeps all API logic in Site A (single source of truth)
 * - Allows Site B components to use relative paths (/api/carriers)
 * - Easy to update if Site A's URL changes (just update env var)
 */
export async function GET(request: NextRequest) {
  try {
    // Get all query parameters from the incoming request
    const searchParams = request.nextUrl.searchParams
    
    // Forward the request to Site A with all query params
    const siteAUrl = `${SITE_A_BASE_URL}/api/carriers?${searchParams.toString()}`
    
    console.log('[Proxy] Forwarding carriers request to:', siteAUrl)
    
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
      console.error('[Proxy] Site A carriers API error:', response.status, errorText)
      
      return NextResponse.json(
        { 
          error: 'Failed to fetch carriers from Site A',
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
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800', // 15 min cache, 30 min stale
      },
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[Proxy] Error forwarding carriers request:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy carriers request',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
