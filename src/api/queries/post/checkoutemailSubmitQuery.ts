import { API_URL_EMAIL } from 'src/api/baseUrls'

const baseUrl = API_URL_EMAIL + '?'

type CheckoutemailSubmitQueryType = {
  email: string
  name: string
  tripId: string
  locode: string
  currency: string
  sessionId?: string
}

export default function checkoutemailSubmitQuery(
  body: CheckoutemailSubmitQueryType
) {
  const params = new URLSearchParams({
    email: body.email,
    name: body.name,
    event_type: 'checkout_email',
    agreed_to_marketing: 'true',
    trip_id: body.tripId,
    location: body.locode,
    user_currency: body.currency,
    ...(body.sessionId && { session_id: body.sessionId }),
  })

  const url = baseUrl + params
  return { url }
}
