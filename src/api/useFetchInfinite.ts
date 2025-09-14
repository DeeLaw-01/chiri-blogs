import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'
import { SWRFetchOptions } from './fetcher/options'

export function useFetchInfinite<T, E = unknown>(
  getKey: (pageIndex: number, previousPageData: T | null) => Query | null,
  options?: SWRInfiniteConfiguration
) {
  // Always use English locale
  const locale = 'en'

  return useSWRInfinite<T, E>(
    (pageIndex, previousPageData) => {
      const query = getKey(pageIndex, previousPageData)
      return query === null ? null : { ...query, locale }
    },
    (query) => fetcher(query!),
    { ...SWRFetchOptions, ...options }
  )
}
