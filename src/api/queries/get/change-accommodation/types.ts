import { HotelDetails } from 'src/shared-types/hotel-details.type'

export type ChangeAccommodationResponseType = {
  has_more_hotels: boolean
  new_hotel: HotelDetails[]
  number_of_filters: FiltersType
  purchase_id?: string
  session_id?: string
}

export type FiltersType = {
  distance_to_city_center: {
    [key: string]: number
  }
  accomodation_type: {
    [key: string]: number
  }
  min_review_score: {
    [key: string]: number
  }
  stars: {
    [key: string]: number
  }
  mealplan: {
    [key: string]: number
  }
  hotel_facilities: {
    [key: string]: number
  }
  best_deals: {
    [key: string]: number
  }
}
