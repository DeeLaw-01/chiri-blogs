import { API_USER_PROFILE_DATA } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getUserProfileGamificationDataQuery() {
  let url = API_USER_PROFILE_DATA + '/gamification'

  return {
    url,
    method: Method.POST,
    body: {
      type: 'get_user_gamification_info',
    },
  }
}
