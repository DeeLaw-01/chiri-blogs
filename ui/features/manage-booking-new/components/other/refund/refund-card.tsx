import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import BaseCard from '../base-card'
import { TripStatusType } from 'ui/features/manage-booking-new/types/trip.type'

export default function RefundCard() {
  const { setShowRefund, booking } = useManageBookingAtoms()

  switch (booking?.trip.status) {
    case TripStatusType.Traveled:
    case TripStatusType.NotBookedYet:
      return <></>
    case TripStatusType.RefundDenied:
    case TripStatusType.Refunded:
    case TripStatusType.RefundRequested:
      return (
        <BaseCard
          title="new-manage-booking-page.other.section.refund.status.heading"
          description="new-manage-booking-page.other.section.refund.status.heading"
          onClick={() => setShowRefund(true)}
        />
      )
    default:
      return (
        <BaseCard
          title="new-manage-booking-page.other.section.refund.card.heading"
          description="new-manage-booking-page.other.section.refund.card.description"
          onClick={() => setShowRefund(true)}
        />
      )
  }
}
