import CurrencyProvider from './currency'
import LocationProvider from './location'
import AffiliateProvider from './affiliate'
import { ReactNode } from 'react'
import { NotificationProvider } from './notification'
import { ConsentProvider } from './cookie-consent'
import ExternalScripts from 'ui/features/external-scripts'
import { Location } from 'src/api/queries/get/locationQuery/location.type'

export default function GlobalAppContexts({
  children,
  location,
}: {
  children: ReactNode
  location: Location
}) {
  return (
    <ConsentProvider>
      <LocationProvider location={location}>
        <CurrencyProvider>
          <AffiliateProvider>
            <NotificationProvider>
              <ExternalScripts />
              {children}
            </NotificationProvider>
          </AffiliateProvider>
        </CurrencyProvider>
      </LocationProvider>
    </ConsentProvider>
  )
}
