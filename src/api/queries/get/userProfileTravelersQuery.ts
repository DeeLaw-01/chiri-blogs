import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getSignedUserProfileTravelersDataQuery() {
  let url = API_USER_PROFILE_DATA + '/traveler'

  return { url, method: Method.GET }
}
