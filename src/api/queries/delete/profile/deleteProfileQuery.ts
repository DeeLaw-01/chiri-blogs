import { Method } from 'src/api/fetcher/fetcher.type'
import { API_USER_PROFILE_DATA } from '../../../baseUrls'

const baseUrl = API_USER_PROFILE_DATA + '/profile'

export default function deleteProfileQuery() {
  return {
    url: baseUrl,
    method: Method.DELETE,
  }
}
