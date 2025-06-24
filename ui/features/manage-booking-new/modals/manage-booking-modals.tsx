import dynamic from 'next/dynamic'

import { useManageBookingAtoms } from '../hooks/useManageBookingAtoms'
import { MissingFieldsModalProps } from './missing-fields-modal'
import { BoardingPassModalProps } from './boarding-pass-modal'
import { RefundModalProps } from './refund-modal'
import { EditDetailsModalProps } from './edit-details-modal'
import { HotelBookedDetailsDrawerProps } from 'ui/features/hotel-booked-details-drawer'
import { ReferralSourceModalProps } from 'ui/features/manage-booking-new/modals/referral-source'

const DynamicBoardingPassModal = dynamic<BoardingPassModalProps>(
  () => import('ui/features/manage-booking-new/modals/boarding-pass-modal')
)
const DynamicMissingFieldsModal = dynamic<MissingFieldsModalProps>(
  () => import('ui/features/manage-booking-new/modals/missing-fields-modal')
)

const DynamicRefundModal = dynamic<RefundModalProps>(
  () => import('ui/features/manage-booking-new/modals/refund-modal')
)

const DynamicEditDetailsModal = dynamic<EditDetailsModalProps>(
  () => import('ui/features/manage-booking-new/modals/edit-details-modal')
)
// Todo: Fix this drawer
const DynamicAccommodationBookingModal = dynamic<HotelBookedDetailsDrawerProps>(
  () => import('ui/features/hotel-booked-details-drawer')
)

const DynamicReferralSourceModal = dynamic<ReferralSourceModalProps>(
  () => import('ui/features/manage-booking-new/modals/referral-source')
)

export default function ManageBookingModals() {
  const {
    booking,
    showBoardingPass,
    setShowBoardingPass,
    showMissingFields,
    setShowMissingFields,
    showRefund,
    setShowRefund,
    showEditDetails,
    setShowEditDetails,
    showAccommodationBooking,
    setShowAccommodationBooking,
    showQuestionnaire,
    setShowQuestionnaire,
  } = useManageBookingAtoms()

  if (!booking) return <></>
  return (
    <>
      {showBoardingPass?.transport && (
        <DynamicBoardingPassModal
          transport={showBoardingPass.transport}
          isOpen={showBoardingPass.transport !== null}
          onClose={() => setShowBoardingPass(undefined)}
        />
      )}
      {showMissingFields && (
        <DynamicMissingFieldsModal
          isOpen={showMissingFields}
          onClose={() => setShowMissingFields(false)}
          passengers={booking.passengers}
          booking={booking}
        />
      )}
      {showRefund && (
        <DynamicRefundModal
          isOpen={showRefund}
          onClose={() => setShowRefund(false)}
          booking={booking}
        />
      )}
      {showEditDetails && (
        <DynamicEditDetailsModal
          isOpen={showEditDetails}
          onClose={() => setShowEditDetails(false)}
          booking={booking}
        />
      )}
      {showAccommodationBooking?.accommodation && (
        <DynamicAccommodationBookingModal
          hotel={showAccommodationBooking.accommodation}
          isOpen={showAccommodationBooking.accommodation !== null}
          onClose={() => setShowAccommodationBooking(undefined)}
        />
      )}

      {showQuestionnaire && (
        <DynamicReferralSourceModal
          isOpen={showQuestionnaire}
          onClose={() => setShowQuestionnaire(false)}
        />
      )}
    </>
  )
}
