import { API_MANAGE_BOOKING } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function requestRefundQuery(body) {
  const url = API_MANAGE_BOOKING + '/request_refund'

  return { url, method: Method.POST, body }
}
