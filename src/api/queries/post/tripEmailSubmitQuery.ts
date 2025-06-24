import { API_URL_EMAIL } from 'src/api/baseUrls'

const baseUrl = API_URL_EMAIL + '?'

type tripEmailSubmitQueryType = {
  email: string
  tripId: string
  locode: string
  currency: string
  sessionId: string
}

export default function tripEmailSubmitQuery(data: tripEmailSubmitQueryType) {
  const params = new URLSearchParams({
    trip_id: data.tripId,
    email: data.email,
    event_type: 'checkout_email', // TODO: Update whenever backend supports new event
    agreed_to_marketing: 'false',
    location: data.locode,
    user_currency: data.currency,
    ...(data.sessionId && { session_id: data.sessionId }),
  })

  const url = baseUrl + params
  return { url }
}
