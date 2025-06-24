import { API_URL_TRIPS } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export default function oneWayTestQuery(
  data: { query: Record<string, any>; uuid: string },
  isLoadMore?: boolean,
  category?: string
) {
  const url = API_URL_TRIPS + '/search'

  const body = {
    ...data.query,
    tripTopic: data.uuid,
    oneway_search: true,
    ...(isLoadMore && { load_more: isLoadMore.toString() }),
    ...(category && { categories: category }),
  }

  return {
    url,
    body,
    method: Method.POST,
  }
}
