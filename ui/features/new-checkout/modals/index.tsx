import { useSearchParams } from 'next/navigation'
import { EmailTripModalProps } from 'ui/features/new-checkout/modals/email-trip-modal'
import { useCheckoutAtoms } from '../useCheckoutAtoms'
import ChangesModal from './changes-modal'
import TripSoldOutModal from './trip-sold-out-modal'
import dynamic from 'next/dynamic'
import { TransportDetailedModalProps } from 'ui/features/trip-details/transport/transport-detailed'
import PaymentModals from 'ui/shared/payment/modals'
import { PaymentTypes } from 'ui/shared/payment/payment.type'

const DynamicTransportDetailedModal = dynamic<TransportDetailedModalProps>(
  () => import('ui/features/trip-details/transport/transport-detailed')
)

const DynamicAccommodationDetailsDrawer = dynamic(
  () => import('ui/features/hotel-info-drawer')
)

const DynamicEmailTripModal = dynamic<EmailTripModalProps>(
  () => import('ui/features/new-checkout/modals/email-trip-modal')
)

export default function CheckoutModals() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const transactionId = searchParams.get('bid')

  const {
    completeModal,
    changesModal,
    soldOutModal,
    showTransportDetails,
    setShowTransportDetails,
    showAccommodationDetails,
    setShowAccommodationDetails,
    showEmailTrip,
    setShowEmailTrip,
  } = useCheckoutAtoms()

  if (completeModal)
    return (
      <PaymentModals
        type={PaymentTypes.CHECKOUT}
        bid={`purchase-${transactionId}`}
        redirect={`/manage-booking?email=${email}&bid=${transactionId}`}
      />
    )

  return (
    <>
      {changesModal && <ChangesModal changes={changesModal.changes} />}
      {soldOutModal && <TripSoldOutModal />}
      {showTransportDetails.transport && (
        <DynamicTransportDetailedModal
          isOpen={showTransportDetails.transport !== null}
          transport={showTransportDetails.transport}
          onClose={() => {
            setShowTransportDetails({})
          }}
        />
      )}

      {showAccommodationDetails?.accommodation && (
        <DynamicAccommodationDetailsDrawer
          hotel={showAccommodationDetails.accommodation}
          isOpen={showAccommodationDetails.accommodation !== null}
          onClose={() => setShowAccommodationDetails({})}
          viewOnly
        />
      )}

      {showEmailTrip && (
        <DynamicEmailTripModal
          isOpen={showEmailTrip}
          onClose={() => setShowEmailTrip(false)}
        />
      )}
    </>
  )
}
