import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

type getSeatsQueryBody = {
  purchase_id?: string
  session_id: string
  trip_id?: string
}

export default function getSeatsQuery(payload: getSeatsQueryBody) {
  const baseUrl = API_URL_PAYMENT_INFO + '/seats'

  return { method: Method.POST, url: baseUrl, body: payload }
}
