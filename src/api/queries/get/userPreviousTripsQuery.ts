import { API_USER_PROFILE_DATA } from '../../baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getUserProfilePreviousTripsDataQuery() {
  const url = API_USER_PROFILE_DATA + '/trips/purchased'

  return { url, method: Method.GET }
}
