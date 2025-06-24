import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function checkCartQuery(payload) {
  const url = API_URL_PAYMENT_INFO + '/check_cart'

  return { url, body: payload, method: Method.POST }
}
