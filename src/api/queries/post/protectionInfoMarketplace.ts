import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

type getProtectionInfoMarketPlaceBody = {
  hotels?: Number[]
  purchase_id: string
}

export default function getProtectionInfoMarketplace(
  payload: getProtectionInfoMarketPlaceBody
) {
  const baseUrl = API_URL_PAYMENT_INFO + '/protection'

  return { url: baseUrl, body: payload, method: Method.POST }
}
