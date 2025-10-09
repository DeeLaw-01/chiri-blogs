import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route Proxy Handler
 *
 * This provides an alternative approach to the next.config.js rewrites.
 * Use this if you encounter issues with cookies, sessions, or CORS.
 *
 * To use this approach instead of rewrites:
 * 1. Update next.config.js rewrites to point to /api/proxy/login instead of external URL
 * 2. This route will handle the actual proxying with full control over headers
 */

const PROXY_TARGET = 'https://chiri-booking-app.vercel.app'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'GET')
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'POST')
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'PUT')
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'DELETE')
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'PATCH')
}

async function proxyRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
) {
  try {
    // Construct the target URL
    const path = pathSegments.join('/')
    const searchParams = request.nextUrl.searchParams.toString()
    const targetUrl = `${PROXY_TARGET}/${path}${
      searchParams ? `?${searchParams}` : ''
    }`

    // Prepare headers to forward
    const headers = new Headers()

    // Forward important headers
    const headersToForward = [
      'content-type',
      'authorization',
      'cookie',
      'user-agent',
      'accept',
      'accept-language',
      'referer',
    ]

    headersToForward.forEach((header) => {
      const value = request.headers.get(header)
      if (value) {
        headers.set(header, value)
      }
    })

    // Override origin to match target domain
    headers.set('origin', PROXY_TARGET)
    headers.set('host', new URL(PROXY_TARGET).host)

    // Prepare request body for POST/PUT/PATCH
    let body = undefined
    if (method !== 'GET' && method !== 'HEAD') {
      try {
        body = await request.text()
      } catch (e) {
        console.error('Error reading request body:', e)
      }
    }

    // Make the proxied request
    const response = await fetch(targetUrl, {
      method,
      headers,
      body,
      redirect: 'manual', // Handle redirects manually
    })

    // Handle redirects
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location')
      if (location) {
        // If redirect is to the same domain, proxy it
        if (location.startsWith(PROXY_TARGET)) {
          const newPath = location.replace(PROXY_TARGET, '')
          return NextResponse.redirect(new URL(newPath, request.url))
        }
        // Otherwise, pass through the redirect
        return NextResponse.redirect(location)
      }
    }

    // Get response body
    const contentType = response.headers.get('content-type') || ''
    let responseBody

    if (contentType.includes('application/json')) {
      responseBody = await response.json()
    } else if (contentType.includes('text/')) {
      responseBody = await response.text()
    } else {
      responseBody = await response.arrayBuffer()
    }

    // Create response with proper headers
    const nextResponse = new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
    })

    // Forward response headers
    const responseHeadersToForward = [
      'content-type',
      'cache-control',
      'set-cookie',
      'location',
      'content-length',
    ]

    responseHeadersToForward.forEach((header) => {
      const value = response.headers.get(header)
      if (value) {
        nextResponse.headers.set(header, value)
      }
    })

    // Handle cookies - extract and set them on the response
    const setCookieHeaders = response.headers.getSetCookie()
    if (setCookieHeaders && setCookieHeaders.length > 0) {
      setCookieHeaders.forEach((cookie) => {
        // Modify cookie to work with your domain if needed
        nextResponse.headers.append('set-cookie', cookie)
      })
    }

    // Add CORS headers if needed
    nextResponse.headers.set(
      'Access-Control-Allow-Origin',
      request.headers.get('origin') || '*'
    )
    nextResponse.headers.set('Access-Control-Allow-Credentials', 'true')

    return nextResponse
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json(
      {
        error: 'Proxy request failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  const response = new NextResponse(null, { status: 204 })

  response.headers.set(
    'Access-Control-Allow-Origin',
    request.headers.get('origin') || '*'
  )
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Cookie'
  )
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Max-Age', '86400')

  return response
}
