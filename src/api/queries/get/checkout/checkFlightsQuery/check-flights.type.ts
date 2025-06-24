import { LuggageInfo } from 'src/shared-types/luggage.type'
import { Transport } from 'src/shared-types/transport.type'
import { Changes } from 'ui/features/new-checkout/checkout.type'

export type BaggageItem = {
  quantity: number
  token: string | null
} & LuggageInfo

export type BaggageInfo = {
  adult: BaggageItem[]
  child: BaggageItem[]
  infant: BaggageItem[]
}

export type Seats = {
  price: number
}

export type TripDetails = {
  trip_id: number
  price: number
  price_flights: number
  currency: string
  flights: Transport[]
}

export type Success = {
  partner_session_id: string | null
  total: number
  currency: string
  baggage_info: BaggageInfo
  needs_passport: boolean
  seats_price: number
  time_left_for_payment: number
}

export type CheckFlightsResponse = {
  changes: Changes
  success: Success
}
