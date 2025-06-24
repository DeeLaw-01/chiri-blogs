import { TripFilters, TripSearch } from './trip.types'
import { OnewayFilters, OnewaySearch } from './oneway.types'
import {
  AccommodationFilters,
  AccommodationSearch,
} from './accommodation.types'

export type SearchType = TripSearch | OnewaySearch | AccommodationSearch

export type FilterType = TripFilters | OnewayFilters | AccommodationFilters

export type Search = {
  trip?: TripSearch
  oneway?: OnewaySearch
  accommodation?: AccommodationSearch
}

export type Filters = {
  trip: TripFilters
  oneway: OnewayFilters
  accommodation: AccommodationFilters
}

export enum SortTripType {
  PriceAsc = 'priceAsc',
  CitiesAsc = 'citiesAsc',
  CitiesDesc = 'citiesDesc',
}
