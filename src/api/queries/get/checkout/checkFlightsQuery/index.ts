import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'

const baseUrl = API_URL_PAYMENT_INFO + '/check_flights?'

export default function checkFlightsQuery(
  tripId: string,
  price: number,
  session: string,
  sessionId: string | null
) {
  const params = new URLSearchParams({
    trip_id: tripId,
    price: price.toString(),
    checkout_session: session,
    ...(sessionId && { session_id: sessionId }),
  })

  const url = baseUrl + params

  return { url }
}
