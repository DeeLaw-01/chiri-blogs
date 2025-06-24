import { Transport } from 'src/shared-types/transport.type'
import { LuggageItemType } from '../manage-booking-new/types/luggage.type'
import { TripDetails } from 'src/shared-types/trip-details.type'

export type SeatsInfoResponseType = {
  price: number
  price_per_passenger: number
  currency: string
}

type TripData = {
  trip_id: string
  price: number
  price_flights: number
  price_hotels: number
  currency: string
  flights: Transport[]
  itinerary: TripDetails
}

export type Changes = {
  price_changed: boolean
  isTheSame: boolean
  before: TripData
  after: TripData
  last_seen_price: number
}

export type SavedPassenger = {
  storage_timestamp: string
  traveler_id: string
} & Omit<Passenger, 'category'>

export type Passenger = {
  category: PassengerCategory
  gender: GenderType
  firstname: string
  surname: string
  nationality: string
  birthday: string
  phone: string
  traveler_id?: string
  phone_number_country: string
} & {
  [key in LuggageItemType]?: number
}

export type Contact = {
  name: string
  email: string
  agreed_to_marketing: boolean
  phone_number?: string
}

export type PassengerCategory = 'adult' | 'infant' | 'child'

export type GenderType = 'Male' | 'Female'
