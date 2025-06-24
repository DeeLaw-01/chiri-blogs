import { Method } from 'src/api/fetcher/fetcher.type'
import { API_USER_PROFILE_DATA } from '../../baseUrls'

const baseUrl = API_USER_PROFILE_DATA + '/bookmarks?'

export default function deleteBookmarkQuery(bookmark: string) {
  const params = new URLSearchParams({
    bookmark: bookmark,
  })

  const url = baseUrl + params

  return {
    url,
    method: Method.DELETE,
  }
}
