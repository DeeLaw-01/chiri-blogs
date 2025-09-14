import { NextRequest, NextResponse } from 'next/server'
import generateUUID from 'src/utils/generateUUID'
import { geolocation, ipAddress } from '@vercel/functions'

const replaceChars = (href: string) => {
  const deEncodedHref = href
    .replace('%3F', '?')
    .replace('%3D', '=')
    .replace('%26', '&')
  return deEncodedHref
}

export default async function middleware(request: NextRequest) {
  const geo = geolocation(request)
  const ip = ipAddress(request)
  const location = request.nextUrl.searchParams.get('initialLocation')

  // set full pathname for every request
  request.headers.set('x-request-url', request.url)

  // Skip middleware for specific paths
  if (
    // Not a file in /public
    !/\.(.*)$/.test(request.nextUrl.pathname) &&
    // Not an api route
    !request.nextUrl.pathname.includes('/api/') &&
    !request.nextUrl.pathname.includes('/app/') &&
    !request.nextUrl.pathname.includes('/auth') &&
    !request.nextUrl.pathname.includes('/csc')
  ) {
    const decodedUrl = replaceChars(request.url)

    if (decodedUrl !== request.url) {
      return NextResponse.redirect(decodedUrl)
    }

    // Since we're not using locale prefixes, just handle basic middleware logic
    const response = NextResponse.next()

    // Set default locale to en
    response.headers.set('Content-Language', 'en')

    const userId = request.cookies.get('userId')?.value || generateUUID()
    response.cookies.set('userId', userId)
    if (location) response.cookies.set('location', location)
    if (geo?.latitude) response.cookies.set('lat', geo.latitude)
    if (geo?.longitude) response.cookies.set('long', geo.longitude)
    if (ip) response.cookies.set('ip', ip)

    return response
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
