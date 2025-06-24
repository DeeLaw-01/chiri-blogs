import { PassengerType } from './passenger.type'

export type TripType = {
  title: string
  end_date: string
  start_date: string
  trip_length: number
  trip_photo: string
  locations: string[]
  id: string
  status: TripStatusType
  purchase_time: string
  passengers: PassengerType[]
}

export enum TripStatusType {
  Confirmed = 'confirmed',
  Pending = 'pending',
  NotBookedYet = 'not-booked-yet',
  Canceled = 'canceled',
  Refunded = 'refunded',
  RefundRequested = 'refund-requested',
  RefundDenied = 'refund-denied',
  Traveled = 'traveled',
  Travelling = 'travelling',
}
