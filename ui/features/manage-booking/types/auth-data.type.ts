import { InsuranceTypeStrings } from 'src/shared-types/insurance.type'

export type AuthData = {
  already_purchased_seats: boolean
  booking_id: string
  has_price_change: boolean
  price_change: any
  itinerary_url: string
  refund_status: RefundStatusType
  trip: {
    trip_id: number
    start_date: string
    end_date: string
    title: string
    trip_photo: string
    itinerary: Array<{
      type: 'flight' | 'hotel'
      content: FlightContentType | HotelContentType
    }>
    trip_status: TripStatus
  }
  passengers: Array<PassengerType>
  contact_details: {
    name: string
    mail: string
    tel: string
  }
  missing_info: {
    [key: string]: string[]
  }
  needs_info: boolean
  is_protected: boolean
  protection: Array<{
    product: InsuranceTypeStrings
    expiration_date: string
    max_compensation: number
  }>
}

export type FlightContentType = {
  origin_locode: string
  origin_airport_code: string
  origin: string
  destination_locode: string
  destination: string
  destination_airport_code: string
  destination_airport_name: string
  carrier: string
  departure_time: string
  arrival_time: string
  departure_time_utc: string
  arrival_time_utc: string
  layovers: Array<any>
  duration: number
  vehicles: Array<string>
  layover_str: string
  transportation: 'aircraft' | 'train' | 'bus' | 'ferry'
  carrier_logo: string
  currency: string
  distance: number
  flight_number: string
  carrier_name: string
  origin_airport_name: string
  origin_location: {
    iata: any
    locode: string
    airport_id: any
    country: any
    region: any
    just_locode: boolean
    city_name: any
    city_coordinates: any
    airport_coordinates: any
  }
  destination_location: {
    iata: any
    locode: string
    airport_id: any
    country: any
    region: any
    just_locode: boolean
    city_name: any
    city_coordinates: any
    airport_coordinates: any
  }
  pnr: string
  boarding_documents_link: any
  airport_checkin: boolean
  status: any
  origin_display: string
  destination_display: string
  airport_transfer: {
    airport_transfer: boolean
    security_again: boolean
  }
}

export type HotelContentType = {
  late_checkin: boolean
  id: string
  city_locode: string
  hotel_id: number
  city_name: string
  reservation_link: string
  rooms: Array<{
    room_id: number
    name: string
    facilities: any
    room_number: any
    block_id: string
    price: number
    breakfast_included: boolean
    full_board: boolean
    half_board: boolean
    all_inclusive: boolean
    breakfast_cost: number
    photo: Array<string>
    max_n_people: number
    number_of_rooms_left: number
    room_type: string
    user_chose_all_inclusive: boolean
    user_chose_full_board: boolean
    user_chose_half_board: boolean
    user_chose_breakfast: boolean
  }>
  all_rooms_available: Array<{
    room_id: number
    name: string
    facilities: any
    room_number: any
    block_id: string
    price: number
    breakfast_included: boolean
    full_board: boolean
    half_board: boolean
    all_inclusive: boolean
    breakfast_cost: number
    photo: Array<string>
    max_n_people: number
    number_of_rooms_left: number
    room_type: string
  }>
  price_hotel: number
  number_of_rooms: number
  max_number_of_people: number
  affiliate_url: string
  rating: number
  photo_url: string
  photos: string[]
  accomodation_type: any
  currency: string
  position: number
  check_in_date: string
  check_out_date: string
  nights_at: number
  stars: string
  lat: number
  long: number
  review_score: number
  review_score_word: string
  name: string
  address: string
  country: string
  pay_now: boolean
  new_rooms_chosen: boolean
  bought: boolean
  confirmation_number?: number | string
  confirmation_pdf: string
  pin_code?: number | string
  hotel_contact?: string
  checkin_checkout_times?: {
    checkin_from: string
    checkin_to?: string
    checkout_from: string
    checkout_to?: string
  }
}

export type RefundStatusType =
  | 'not-requested'
  | 'requested'
  | 'refunded'
  | 'denied'

export type TripStatus = 'confirmed' | 'travelling' | 'traveled'

export type LuggageItem = 'cabin_bag' | 'personal_item' | 'hold_bag'

export interface Bought_Luggage {
  hold_bag?: LuggageType
  cabin_bag?: LuggageType
  personal_item?: LuggageType
}

export interface LuggageType {
  dimensions: {
    dimensions_sum: number
    weight: number
    length: number
    height: number
    width: number
  }
  price: number
}

export interface PassengerType {
  title: string
  name: string
  surname: string
  card_number: string
  id: string
  category: string
  nationality: string
  gender: string
  birthday: string
  expiration_date: string
  mail: string
  tel: string
  allowed_luggage: {
    hold_bag: LuggageType
    cabin_bag: LuggageType
    personal_item: LuggageType
  }
  bought_luggage: Bought_Luggage
  pnr: {}
  boarding_documents_link: {}
}
