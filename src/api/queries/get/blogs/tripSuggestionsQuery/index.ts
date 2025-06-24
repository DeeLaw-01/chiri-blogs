import { API_EDIT_TRIP_DETAILS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const baseUrl = API_EDIT_TRIP_DETAILS + '/trip_suggestions?'

export default function getTripSuggestionsQuery(query: string) {
  const url = baseUrl + query

  return { url, method: Method.GET }
}
