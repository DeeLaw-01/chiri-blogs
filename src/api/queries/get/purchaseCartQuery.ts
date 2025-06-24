import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

type Payload = {
  session_id: string
  purchase_id: string
  currency: string
}

export function purchaseCartQuery({
  payload,
  UID,
}: {
  payload: Payload
  UID: string
}) {
  const baseUrl = API_URL_PAYMENT_INFO + '/purchase_cart'

  return {
    url: baseUrl,
    body: payload,
    method: Method.POST,
    headers: { uuid: UID },
  }
}
