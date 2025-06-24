import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'

const baseUrl = API_URL_TRIP_DETAILS + '/trip?'

export default function getTransportQuery(queryId, sessionId) {
  if (!queryId) return null

  const params = new URLSearchParams({
    tripID: queryId,
    ...(sessionId && { session_id: sessionId }),
  })

  const url = baseUrl + params

  return { url }
}
