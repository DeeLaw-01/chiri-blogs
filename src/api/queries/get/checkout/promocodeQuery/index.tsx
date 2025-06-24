import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { PromocodeRequest } from './promocode.type'

const baseUrl = API_URL_PAYMENT_INFO + '/promocode?'

export default function promocodeQuery(data: PromocodeRequest) {
  const params = new URLSearchParams({
    trip_id: data.tripId,
    promocode: data.promocode,
    with_coins: 'false',
    checkout_session: data.session,
    ...(data.remove && { remove_promocode: 'true' }),
    ...(data.sessionId && { session_id: data.sessionId }),
  })

  const url = baseUrl + params

  return { url, method: Method.GET }
}
