import {
  LocationResult,
  Location,
} from 'src/api/queries/get/locationQuery/location.type'
import { formatISO } from 'date-fns'
import {
  TripFilters,
  TripSearch,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

export function mapTripSearch(
  search?: TripSearch & TripFilters
): Record<string, number | boolean | string | undefined> {
  if (!search) return {}
  return {
    ...search,
    initialLocation: mapLocation(search.initialLocation),
    includeLocations: mapLocations(search.includeLocations),
    windowStart: mapDate(search.windowStart),
    windowEnd: mapDate(search.windowEnd),
    avoidLocations: mapLocations(search.avoidLocations),
    trip_id: mapSimilarPackages(search.trip_id),
    type: undefined, // This is default type on tripSearch anyway, so we dont need it.
  }
}

function mapSimilarPackages(tripIds?: number[]): string | undefined {
  return tripIds?.join(',')
}

function mapLocation(location?: Location | LocationResult): string | undefined {
  return location?.locode
}

function mapLocations(locations?: LocationResult[]): string | undefined {
  return locations?.map((loc) => loc.locode).join(',')
}

function mapDate(date?: Date): string | undefined {
  if (!date) return
  const newDate = new Date(date)
  return formatISO(newDate, { representation: 'date' })
}
