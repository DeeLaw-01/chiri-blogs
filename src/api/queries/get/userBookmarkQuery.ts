import { API_USER_PROFILE_DATA } from '../../baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function getUserProfileBookmarksDataQuery() {
  let url = API_USER_PROFILE_DATA + '/bookmarks'

  return { url, method: Method.GET }
}
