import { Suspense } from 'react'
import RootProvider from 'src/providers/root-provider'
import ResponsizeSizeProvider from 'src/contexts/responsive'
import { IntlProvider } from 'i18n'
import { serverFetch } from 'src/api/serverFetch'
import { cookies } from 'next/headers'
import userLocationQuery from 'src/api/queries/get/userLocationQuery'
import { Location } from 'src/api/queries/get/locationQuery/location.type'

export const revalidate = 0

export async function getLocation(): Promise<Location> {
  const cookieStore = cookies()

  const loc = cookieStore.get('location')?.value ?? ''
  const lat = cookieStore.get('lat')?.value ?? ''
  const long = cookieStore.get('long')?.value ?? ''
  const ip = cookieStore.get('ip')?.value ?? ''

  const { data } = await serverFetch<Location>(
    userLocationQuery(ip, lat, long, loc)
  )
  return data
}

export default async function Layout({ children }: { children: JSX.Element }) {
  const location = await getLocation()
  // Always use English locale
  const locale = 'en'

  return (
    <html translate="no" lang={locale}>
      <body>
        <ResponsizeSizeProvider>
          <Suspense>
            <IntlProvider page={'*'}>
              <RootProvider location={location}>{children}</RootProvider>
            </IntlProvider>
          </Suspense>
        </ResponsizeSizeProvider>
      </body>
    </html>
  )
}
