import { ItineraryContentType } from './trip-details.type'

export type ChangeTransport = {
  flights_key: string
  price: number
  price_difference: number
  price_increased: boolean
  session_id: string
  transportation: ItineraryContentType
}

export type ChangeTransportResponseType = {
  cheap_flights: ChangeTransport[]
  fast_flights: ChangeTransport[]
  recommended_flights: ChangeTransport[]
  session_id: string
  passengers: {
    total: number
    n_adults: number
    n_children: number
    n_babies: number
  }
}
