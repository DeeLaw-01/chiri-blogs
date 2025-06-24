import {
  LocationResult,
  Location,
} from 'src/api/queries/get/locationQuery/location.type'
import { Category } from './trip.types'

export type OnewaySearch = {
  initialLocation?: Location | LocationResult
  windowStart?: Date
  windowEnd?: Date
  flexibleDates?: boolean
  exactDates?: boolean
  includeLocations?: LocationResult[]
  categories?: Category
  n_adults?: number
  n_children?: number
  n_babies?: number
  avoidLocations?: LocationResult[]
}

export enum TravelingStyle {
  budget = 'budget',
  comfort = 'comfort',
  sustainable = 'sustainable',
}

export type DateType = Pick<OnewaySearch, 'flexibleDates' | 'exactDates'>
export type Dates = Pick<OnewaySearch, 'windowStart' | 'windowEnd'> & DateType

export enum OnewaySortType {
  PriceAsc = 'priceAsc',
  EarlyDeparture = 'earlyDeparture',
  LeastDuration = 'leastDuration',
  LateDeparture = 'lateDeparture',
}

export type OnewayFilters = {
  travellingStyle?: TravelingStyle
  avoidLocations?: LocationResult[]
  sortType?: OnewaySortType | ''
  max_stop_overs?: string
  vehicle_type?: string
  departure?: string
  arrival?: string
  include_airlines?: string[]
  specific_origin_station?: string
  specific_destination_station?: string
}

// Add all OnewayFilters here as well.
// This is necessary to differentiate between search/filter when populating the states
// from query because you can't directly map from a typescript type, so we need an object.
export const OnewayFilterItems: Array<keyof OnewayFilters> = [
  'travellingStyle',
  'avoidLocations',
  'sortType',
  'max_stop_overs',
  'vehicle_type',
  'departure',
  'arrival',
  'include_airlines',
  'specific_origin_station',
]
