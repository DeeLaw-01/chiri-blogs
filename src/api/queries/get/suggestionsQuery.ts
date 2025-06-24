import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

const baseUrl = API_URL_TRIP_DETAILS + '/trip_suggestions?'

export default function getSuggestionsQuery(
  tripId: string,
  count: number,
  sessionId: string | undefined,
  locale: string
) {
  const params = new URLSearchParams({
    tripID: tripId,
    session_id: sessionId,
    number_suggestions: count.toString(),
  })
  const url = baseUrl + params

  return [url, locale]
}
