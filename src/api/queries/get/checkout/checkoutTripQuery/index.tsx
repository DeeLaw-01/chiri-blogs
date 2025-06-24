import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

const baseUrl = API_URL_TRIP_DETAILS + '/trip?'

export default function checkoutTripQuery(tripId: string, sessionId: string) {
  const params = new URLSearchParams({
    tripID: tripId,
    extra_items: 'false',
    ...(sessionId && { session_id: sessionId }),
  })

  const url = baseUrl + params

  return { url }
}
