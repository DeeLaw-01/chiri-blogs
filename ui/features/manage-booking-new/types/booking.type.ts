import { ItineraryType } from './itinerary.type'
import { PassengerType } from './passenger.type'
import { ProtectionType } from './protection.type'
import { TripType } from './trip.type'

export type BookingType = {
  already_purchased_seats: boolean
  booking_email: string
  booking_id: string
  contact_details: ContactDetailsType
  itinerary_url: string
  protection?: ProtectionType[]
  refund: RefundType
  trip: TripType
  itinerary: ItineraryType[]
  passengers: PassengerType[]
}

export type ContactDetailsType = {
  email: string
  name: string
  tel: string
}

export type RefundType = {
  status: RefundStatusType
}

export enum RefundStatusType {
  NotRequested = 'not-requested',
  Requested = 'requested',
  Refunded = 'refunded',
  Denied = 'denied',
}
