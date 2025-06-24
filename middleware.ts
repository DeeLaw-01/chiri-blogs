import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from 'src/i18n/router'
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
  const locale = request.nextUrl.locale
  const location = request.nextUrl.searchParams.get('initialLocation')
  // set full pathname for every request
  request.headers.set('x-request-url', request.url)

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

    // Step 2: Create and call the next-intl middleware (example)
    const handleI18nRouting = createMiddleware(routing)

    const response = handleI18nRouting(request)
    response.headers.set('Content-Language', locale)

    const userId = request.cookies.get('userId')?.value || generateUUID()
    response.cookies.set('userId', userId)
    if (location) response.cookies.set('location', location)
    if (geo?.latitude) response.cookies.set('lat', geo.latitude)
    if (geo?.longitude) response.cookies.set('long', geo.longitude)
    if (ip) response.cookies.set('ip', ip)

    return response
  }
}
