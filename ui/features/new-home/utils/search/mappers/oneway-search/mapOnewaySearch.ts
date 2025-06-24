import {
  LocationResult,
  Location,
} from 'src/api/queries/get/locationQuery/location.type'
import { formatISO } from 'date-fns'
import {
  OnewaySearch,
  OnewayFilters,
} from 'ui/features/new-home/search/hooks/useSearchAtoms/types/oneway.types'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'

export function mapOnewaySearch(
  search?: OnewaySearch & OnewayFilters
): Record<string, number | boolean | string | undefined> {
  if (!search) return {}
  // Exclude sortType from the query and dates params so a search does'nt happen on change of sort-filters
  const {
    sortType,
    exactDates,
    flexibleDates,
    include_airlines,
    max_stop_overs,
    specific_destination_station,
    specific_origin_station,
    vehicle_type,
    ...filteredSearch
  } = search

  const addTransportFilters =
    search.includeLocations?.length === 1 && search.includeLocations[0].isCity

  return {
    ...filteredSearch,
    ...(addTransportFilters
      ? {
          include_airlines: include_airlines?.toString() || '',
          max_stop_overs,
          specific_destination_station,
          specific_origin_station,
          vehicle_type,
        }
      : {}),
    initialLocation: mapLocation(search.initialLocation),
    includeLocations: mapLocations(search.includeLocations),
    windowStart: mapDate(search.windowStart),
    avoidLocations: mapLocations(search.avoidLocations),
    windowEnd: mapDate(search.windowEnd),
    type: HomeState.ONEWAY,
  }
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
