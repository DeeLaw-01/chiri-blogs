import { TripStatusType } from '../types/trip.type'

export default function isDetailsDisabled(status: TripStatusType | undefined) {
  switch (status) {
    case TripStatusType.NotBookedYet:
    case TripStatusType.Canceled:
    case TripStatusType.Refunded:
      return true
    default:
      return false
  }
}
