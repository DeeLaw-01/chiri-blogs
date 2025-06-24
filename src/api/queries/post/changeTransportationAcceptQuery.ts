import { API_EDIT_TRIP_DETAILS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export type changeTransportationAcceptQueryParams = {
  tripId: string
  position: number
  flightKey: string
  sessionId: string
}

export default function changeTransportationAcceptQuery(
  payload: changeTransportationAcceptQueryParams
) {
  const baseUrl = API_EDIT_TRIP_DETAILS + '/accept_flight?'

  const params = new URLSearchParams({
    trip_id: payload.tripId,
    position: payload.position.toString(),
    flight_key: payload.flightKey,
    session_id: payload.sessionId,
  })

  const url = baseUrl + params
  return {
    url,
    method: Method.GET,
  }
}
