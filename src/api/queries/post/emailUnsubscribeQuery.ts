import { API_URL_EMAIL } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function emailUnsubscribeQuery(data) {
  const baseUrl = API_URL_EMAIL + '/preferences'

  const url = baseUrl

  return { url, body: data, method: Method.POST }
}
