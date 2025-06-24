import { Method } from 'src/api/fetcher/fetcher.type'
import { API_BLOG } from '../../../baseUrls'

export default function getBlogPostQuery(slug: string) {
  const baseUrl = API_BLOG + '?'

  const params = new URLSearchParams({
    post_slug: slug,
  })

  const url = baseUrl + params

  return {
    url,
    method: Method.GET,
  }
}
