import { NextRequest, NextResponse } from 'next/server'

// Force dynamic route since we read query params
export const dynamic = 'force-dynamic'

// Site A base URL - where the real API logic lives
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || process.env.SITE_A_URL || 'https://chiri.pk'

/**
 * Proxy API route for blogs
 * 
 * This route forwards blog CRUD requests from Site B to Site A's blogs API.
 * All blog data management happens in Site A's MongoDB.
 */
export async function GET(request: NextRequest) {
  try {
    // Get all query parameters from the incoming request
    const searchParams = request.nextUrl.searchParams
    
    // Forward the request to Site A with all query params
    const siteAUrl = `${SITE_A_BASE_URL}/api/blogs?${searchParams.toString()}`
    
    console.log('[Proxy] Forwarding blogs GET request to:', siteAUrl)
    
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
      console.error('[Proxy] Site A blogs API error:', response.status, errorText)
      
      return NextResponse.json(
        { 
          error: 'Failed to fetch blogs from Site A',
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
    console.error('[Proxy] Error forwarding blogs request:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy blogs request',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}

// Forward other HTTP methods if needed (POST, PUT, DELETE)
// These would require authentication forwarding
export async function POST(request: NextRequest) {
  return forwardMutationRequest(request, 'POST')
}

export async function PUT(request: NextRequest) {
  return forwardMutationRequest(request, 'PUT')
}

export async function DELETE(request: NextRequest) {
  return forwardMutationRequest(request, 'DELETE')
}

async function forwardMutationRequest(request: NextRequest, method: string) {
  try {
    const searchParams = request.nextUrl.searchParams
    const body = method !== 'DELETE' ? await request.json() : undefined
    
    const siteAUrl = `${SITE_A_BASE_URL}/api/blogs?${searchParams.toString()}`
    
    console.log(`[Proxy] Forwarding blogs ${method} request to:`, siteAUrl)
    
    // Forward cookies for authentication
    const cookie = request.headers.get('cookie')
    
    const response = await fetch(siteAUrl, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(cookie ? { 'Cookie': cookie } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      signal: request.signal,
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: 'Failed to forward mutation to Site A', details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to proxy mutation request', details: errorMessage },
      { status: 500 }
    )
  }
}
