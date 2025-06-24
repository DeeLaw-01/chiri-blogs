import {
  Bought_Luggage,
  PassengerType,
} from 'ui/features/manage-booking/types/auth-data.type'

export type ActiveFilter =
  | 'ALL'
  | 'LUGGAGE'
  | 'STAYS'
  | 'PROTECTION'
  | 'SEATS'
  | 'PROMOCODE'

export type CartData = {
  uuid: string
  data: { [key: string]: unknown }
  type: Exclude<ActiveFilter, 'ALL'>
  isUnavailable: boolean
  priceChange: {
    status: boolean
    before_price?: number
    after_price?: number
  }
}

export type BuyBaggageMergedData = {
  id: string
  baggage: Bought_Luggage
  passenger: PassengerType
}

export type SingleProtectionObject = {
  id: string
  amount: number
  valid: boolean
  currency: string
  amount_per_passenger?: number
}

export type ProtectionData = {
  offers: {
    id: string
    flex: SingleProtectionObject
    flight_disruption: SingleProtectionObject
    comprehensive: SingleProtectionObject
  }
  error: unknown
}

export type CheckCartResponse = {
  hotels_unavailable: Array<number>
  luggage_unavailable: Array<string>
  protection_unavailable: Array<string>
  price_changes_hotels: { [key: string]: number }
  price_changes_protection: Array<any>
  price_changes_luggage: Array<any>
  status: number
  cart_available: boolean
}

export type SeatInfo = {
  already_purchased_seats: boolean
  price: number
  currency: string
}
