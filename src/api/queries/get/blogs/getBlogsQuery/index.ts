import { API_BLOG } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export const PAGE_SIZE = '12'

export default function getBlogsQuery(page: number, pageSize?: number) {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize?.toString() ?? PAGE_SIZE,
  })

  const url = API_BLOG + 'all?' + params

  return {
    url,
    method: Method.GET,
  }
}
