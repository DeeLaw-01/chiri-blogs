import { Mode } from 'src/shared-types/transport.type'
import { TripDetails } from 'src/shared-types/trip-details.type'
import { TripStatusType } from 'ui/features/manage-booking-new/types/trip.type'

export type BookingResponse = {
  purchased_trips: Booking[]
  has_more: boolean
}

export type Booking = {
  purchase_id: string
  status: TripStatusType
  includes: Mode
} & TripDetails
