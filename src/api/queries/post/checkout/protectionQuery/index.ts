import { API_URL_PAYMENT_INFO } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { ProtectionRequest } from './protection.type'

const url = API_URL_PAYMENT_INFO + '/protection'

export default function getProtectionQuery(body: ProtectionRequest) {
  return { url, body, method: Method.POST }
}
