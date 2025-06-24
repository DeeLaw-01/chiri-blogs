import { Image } from 'ui/shared/image-grid'
import { HotelDetails } from './hotel-details.type'
import { Transport } from './transport.type'

export type TripDetails = {
  id: string
  tags: Array<string> | undefined
  outstanding: boolean
  start_date: string
  end_date: string
  price: {
    price_transports: number
    price_hotels: number
  }
  locations: Array<string>
  trip_currency_code: string
  protection_available: boolean
  seats: number
  title: string
  price_range: string
  category: Array<any>
  trip_photo: string
  trip_media: Image[]
  passengers: {
    n_adults: number
    n_children: number
    n_babies: number
    total_passengers: number
  }
  restrictions: boolean
  price_per_passenger: number
  creation_date: string
  url: string
  old_trip: boolean
  available_to_buy: boolean
  avg_price: number
  itinerary: ItineraryContentType[]
  available_seats: number
  force_hotels?: boolean
  sustainable_trip?: boolean
  historical_price: HistorialPrice
  pay_now_details: {
    pay_now: number
    pay_later: number
    pay_full_price: boolean
  }
}

export type ItineraryContentType =
  | { type: 'transport'; content: Transport }
  | { type: 'accommodation'; content: HotelDetails }

export type HistorialPrice = {
  discount: number
  route_min_price: number
  route_max_price: number
  show_info: boolean
}
