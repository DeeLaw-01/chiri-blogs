import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getCitiesQuery() {
  const url = API_URL_TRIP_DETAILS + '/slugs'

  return { url, method: Method.GET, json: true }
}
