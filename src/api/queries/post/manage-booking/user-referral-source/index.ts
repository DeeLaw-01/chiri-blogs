import { API_MANAGE_BOOKING } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'
import { ReferralSourceRequest } from './type'

export default function submitReferralSourceQuery(body: ReferralSourceRequest) {
  const url = API_MANAGE_BOOKING + '/how_user_found_us'
  return { url, body, method: Method.POST }
}
