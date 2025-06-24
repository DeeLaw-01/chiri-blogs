import { API_URL_USER_LOCATION_NEW } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

const PAGESIZE = 10

const baseUrl = API_URL_USER_LOCATION_NEW + '/typeahead/v1/search?'

export default function typeaheadSearchQuery(
  locode: string | undefined,
  search: string,
  page: number,
  all: boolean = true
) {
  const params = new URLSearchParams({
    ...(locode && { initial_location: locode }),
    ...(search && { query: search }),
    page: page.toString(),
    pageSize: PAGESIZE.toString(),
    all: all.toString(),
  })

  const url = baseUrl + params

  return { url, method: Method.GET }
}
