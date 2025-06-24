import MarketPlace from './marketplace-page'
import { IntlProvider } from 'i18n'

export default function MarketPlacePage() {
  return (
    <IntlProvider page="/manage-booking/marketplace">
      <MarketPlace />
    </IntlProvider>
  )
}
