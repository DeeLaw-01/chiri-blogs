import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

export default function getStationsQuery(
  origin: string,
  destination: string,
  sessionId: string,
  vehicleType: string
) {
  const baseUrl = API_URL_TRIP_DETAILS + '/get_stations?'
  const params = new URLSearchParams({
    origin: origin,
    destination: destination,
    ...(sessionId && { session_id: sessionId }),
    ...(vehicleType && { vehicle_type: vehicleType }),
  })

  const url = baseUrl + params
  return {
    url,
  }
}
