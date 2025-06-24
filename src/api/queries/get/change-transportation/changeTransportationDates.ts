import { API_EDIT_TRIP_DETAILS } from 'src/api/baseUrls'
import { Filters } from 'ui/features/change-transportation/hooks/useChangeTransportationAtoms'

export default function changeTransportationDates(
  tripId: string,
  position: number,
  filters: Filters,
  sessionId?: string | null
) {
  const baseUrl = API_EDIT_TRIP_DETAILS + '/alternative_dates?'
  const params = new URLSearchParams({
    trip_id: tripId,
    position: position?.toString(),
    ...(sessionId && { session_id: sessionId }),
    max_stop_overs: filters.stops === '' ? '2' : filters.stops,
    specific_origin_station: filters.departure || '',
    specific_destination_station: filters.arrival || '',
    include_airlines: filters.carriers.toString() || '',
    vehicle_type: filters.mode || '',
    new_departure_date: filters.date || '',
  })

  const url = baseUrl + params

  return { url }
}
