import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

const baseUrl = API_URL_TRIP_DETAILS + '/metadata?'

export default function getPackageMetadataQuery(
  tripId: string,
  sessionId: string,
  locale: string
) {
  const params = new URLSearchParams({
    trip_id: tripId,
    ...(sessionId && { session_id: sessionId }),
  })

  const url = baseUrl + params

  return { url, locale }
}
