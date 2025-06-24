import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const url = API_USER_PROFILE_DATA + '/traveler'

export default function getSavedPassengersQuery() {
  return { url, method: Method.GET }
}
