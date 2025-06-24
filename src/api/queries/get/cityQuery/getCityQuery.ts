import { API_URL_TRIP_DETAILS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const baseUrl = API_URL_TRIP_DETAILS + '/location_info?'

export default function getCityQuery(city: string, tripId: string = '') {
  const params = new URLSearchParams({
    tripId: tripId,
    locode: city,
  })
  const url = baseUrl + params // + '/location_info?' + queryParam + city

  return { url, method: Method.GET }
}
