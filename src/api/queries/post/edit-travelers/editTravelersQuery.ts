import { getSessionId } from 'src/utils/sessionIdHelper'
import { API_EDIT_TRIP_DETAILS } from 'src/api/baseUrls'
import { TravelerForm } from 'ui/features/trip-details/modals/change-travelers-modal/change-travelers.type'

export default function editTravelersQuery(
  tripId: string,
  travelers: TravelerForm
) {
  const baseUrl = API_EDIT_TRIP_DETAILS + '/edit_trip?'

  const params = new URLSearchParams({
    tripID: tripId,
    n_adults: travelers.adults.toString(),
    n_children: travelers.children.toString(),
    n_babies: travelers.infants.toString(),
    session_id: getSessionId(),
  })

  const url = baseUrl + params

  return { url }
}
