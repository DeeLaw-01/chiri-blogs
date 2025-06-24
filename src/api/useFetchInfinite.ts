import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import { useLocale } from 'next-intl'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'
import { SWRFetchOptions } from './fetcher/options'

export function useFetchInfinite<T, E = unknown>(
  getKey: (pageIndex: number, previousPageData: T | null) => Query | null,
  options?: SWRInfiniteConfiguration
) {
  const locale = useLocale()

  return useSWRInfinite<T, E>(
    (pageIndex, previousPageData) => {
      const query = getKey(pageIndex, previousPageData)
      return query === null ? null : { ...query, locale }
    },
    (query) => fetcher(query!),
    { ...SWRFetchOptions, ...options }
  )
}
