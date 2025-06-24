export type HotelDetails = {
  id: number
  trip_id: string
  purchase_id: string
  name: string
  street_address: string
  distance_to_city_center: string
  beach: boolean
  gym: boolean
  pool: boolean
  spa: boolean
  snow: boolean
  city: string
  zip_code: string
  country: string
  nights_at: number
  check_in_date: string
  check_out_date: string
  affiliate_url: string
  price_total: number
  price_total_desc: string
  price_hotel: number
  price_hotel_desc: string
  currency_code: string
  position: number
  meal_plan: string
  hotel_rating: number
  photo_url: string
  review_score: number
  review_score_word: string
  currency: string
  booking_id: string
  number_of_rooms: number
  stars: number
  address: string
  checkin_checkout_times: {
    checkin_from: string
    checkin_to: string
    checkout_from: string
    checkout_to: string
  }
  max_number_of_people: number
  location: {
    longitude: number
    latitude: number
  }
  zip: string
  additional_policies: {
    children_allowed: boolean
    cots_and_extra_beds: Array<{
      rate_type: string
      price: number
      from_age: number
      price_mode: string
      to_age: number
    }>
    child_min_age: number
  }
  hotel_description: string
  hotel_facilities: Array<{
    name: string
    hotel_facility_type_id: number
    attrs?: Array<string>
  }>
  hotel_important_information: string
  hotel_photos: Array<{
    url_original: string
    main_photo?: boolean
  }>
  hotel_policies: Array<{
    name: string
    content: string
    type: string
  }>
  room_data: RoomData
  all_rooms_available: RoomInfo[]
  discount: number
  price_without_discount: number
  reviews: Reviews
  can_be_removed: boolean
  is_selected: boolean
  price_per_night: number
  price_per_night_without_discount: number
}

export interface Reviews {
  reviewsCount: number
  review_score: number
  ratingScores: {
    name: string
    translation: string
    value: number
  }[]
  reviewCard: Review[]
  review_score_word: string
}

export interface Review {
  guestDetails: {
    countryName: string
    username: string
    avatarUrl: string
    guestTypeTranslation: 'Solo traveler' | 'Group' | 'Couple' | 'Family'
  }
  reviewedDate: number
  isApproved: boolean
  reviewScore: number
  textDetails: {
    negativeText: string
    positiveText: string
  }
  partnerReply: {
    reply: string
  }
}

export interface RoomData {
  number_of_rooms: number
  max_n_people: number
  rooms: Array<{
    max_n_people: number
    name: string
    facilities: Array<{
      name: string
    }>
    price: number
    photo: Array<string>
    breakfast_included: boolean
    half_board: boolean
    full_board: boolean
    all_inclusive: boolean
  }>
}

export interface RoomInfo {
  room_id: number
  block_id: string
  name: string
  facilities: Array<{
    name: string
  }>
  price: number
  max_n_people: number
  max_n_adults: number
  max_n_children: number
  number_of_rooms_left: number
  photo: Array<string>
  breakfast_included: boolean
  half_board: boolean
  full_board: boolean
  all_inclusive: boolean
  breakfast_cost: number
  half_board_cost: number
  full_board_cost: number
  all_inclusive_cost: number
}
