import { Method } from 'src/api/fetcher/fetcher.type'
import { API_URL_EMAIL } from '../../baseUrls'

const baseUrl = API_URL_EMAIL + '/preferences?'

export default function getUnsubscribeQuery(email) {
  const params = new URLSearchParams({
    email: email,
  })

  const url = baseUrl + params

  return { url, method: Method.GET }
}
