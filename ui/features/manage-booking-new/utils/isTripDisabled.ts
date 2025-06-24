import { TripStatusType } from '../types/trip.type'

export default function isTripDisabled(status: TripStatusType | undefined) {
  switch (status) {
    case TripStatusType.NotBookedYet:
    case TripStatusType.Canceled:
    case TripStatusType.Refunded:
    case TripStatusType.RefundRequested:
    case TripStatusType.Traveled:
      return true
    default:
      return false
  }
}
