import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { CoinsRequest } from './coins.type'

const baseUrl = API_URL_PAYMENT_INFO + '/promocode?'

export default function coinsQuery(data: CoinsRequest) {
  const params = new URLSearchParams({
    trip_id: data.tripId,
    with_coins: 'true',
    checkout_session: data.session,
    remove_coins: (!data.coins).toString(),
    ...(data.sessionId && { session_id: data.sessionId }),
  })

  const url = baseUrl + params

  return { url, method: Method.GET }
}
