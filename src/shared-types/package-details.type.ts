import { countryCodes } from 'ui/shared/country-flag'

export type PackageDetails = {
  id: number
  tags: string[]
  outstanding: boolean
  start_date: string
  end_date: string
  price: {
    price_transports: number
    price_hotels: number
  }
  locations: string[]
  itinerary: Location[]
  trip_currency_code: string
  seats: number
  title: string
  price_range: string
  category: any[]
  trip_photo: string
  restrictions: boolean
  price_per_passenger: number
  creation_date: Date
  best_seller: boolean
  trending: boolean
  people_looking: number
  packages_sold: number
  avg_price: number
  exact_query_match: boolean
  sustainable_trip: boolean
  featured_location: {
    country_name: string
    country_code: countryCodes
  }
  passengers: {
    n_adults: number
    n_children: number
    n_babies: number
    total_passengers: number
  }
  urgency: {
    best_seller: boolean
    trending: boolean
    packages_sold: number
    outstanding: boolean
  }
}

export type Location = {
  locationId: null
  destination: string
  destinationLocode: string
  stayLength: number
  coordinates: null
  picture: string
  is_layover: boolean
}
