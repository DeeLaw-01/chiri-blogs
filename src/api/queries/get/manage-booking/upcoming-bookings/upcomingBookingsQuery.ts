import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const baseUrl = API_USER_PROFILE_DATA + '/trips/purchased/future?'

export default function getUpcomingBookingsQuery(idx: number) {
  const params = new URLSearchParams({
    page: idx.toString(),
    page_size: '3',
  })

  const url = baseUrl + params

  return { url, method: Method.GET }
}
