import { IntlProvider } from 'i18n'
import TripSoldOutModal from 'ui/features/new-checkout/modals/trip-sold-out-modal'
import { CheckoutAtomsProvider } from 'ui/features/new-checkout/useCheckoutAtoms'

export default function NotFound() {
  return (
    <IntlProvider page="/checkout">
      <CheckoutAtomsProvider>
        <TripSoldOutModal />
      </CheckoutAtomsProvider>
    </IntlProvider>
  )
}
