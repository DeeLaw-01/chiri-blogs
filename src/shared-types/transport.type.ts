import { LuggageItem } from 'ui/features/manage-booking/types/auth-data.type'
import { HotelDetails } from './hotel-details.type'
import { ItineraryContentType } from './trip-details.type'

export type Transport = {
  origin: string
  destination: string
  carrier: string
  carrier_logo: string
  departure_time: string
  arrival_time: string
  position: number
  trip_id: string
  layover: LayoverDetails[]
  nr_seats?: number
  modes: Mode[]
  duration: number
  departure_airport_code: string
  departure_airport_name: string
  destination_airport_name: string
  destination_locode: string
  photo: string
  locationName: string
  stay_length: number
  picture: string
  location_code: string
  city_name: string
  city_code: string
  city_location: Array<string>
  airport_location: Array<string>
  origin_station_name: string
  locode: string
  airport_id: string
  airport_name: string
  origin_locode: string
  origin_display: string
  destination_display: string
  passengers: {
    total_passengers: number
    n_adults: number
    n_children: number
    n_babies: number
  }
  overnight: boolean
  layover_v2: Layover_V2_Details[]
  carriers: Array<{
    carrier_name: string
    carrier_logo: string
  }>
  hotel: HotelDetails
  layover_duration: number
  destination_station_name: string
  complete_itinerary: ItineraryContentType[]
  info: TransportInfo
  luggage?: Partial<Record<LuggageItem, number>>
  can_be_removed: boolean
  is_selected: boolean
  city: string
}

export type TransportInfo = {
  self_transfer: {
    from: string
    to: string
  }
  security_again: boolean
}

export type LayoverDetails = {
  duration: number
  durationUnit: string
  location: string
}

export type Layover_V2_Details = {
  origin: string
  destination: string
  carrier: string
  carrier_logo: string
  departure_time: string
  arrival_time: string
  position: number
  trip_id: number
  layover: Array<any>
  nr_seats: number
  mode: Mode
  duration: number
  departure_airport_code: string
  destination_airport_code: string
  departure_airport_name: string
  destination_airport_name: string
  photo: string
  locationName: string
  stayLength: number
  picture: string
  location_code: string
  city_name: string
  city_code: string
  city_location: Array<any>
  airport_location: Array<any>
  locode: any
  airport_id: string
  airport_name: string
  overnight: boolean
  layover_duration: number
  origin_display: string
  destination_display: string
}

export type Mode = 'bus' | 'aircraft' | 'train' | 'ferry'
