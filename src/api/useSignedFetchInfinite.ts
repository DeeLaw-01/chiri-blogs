import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import { useLocale } from 'next-intl'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'
import signRequest from 'src/utils/signRequest'
import { SWRFetchOptions } from './fetcher/options'

export function useSignedFetchInfinite<T, E = unknown>(
  getKey: (idx: number, prev: T | null) => Query | null,
  options?: SWRInfiniteConfiguration<T, E>
) {
  const locale = useLocale()

  return useSWRInfinite<T, E>(
    (idx, prev) => {
      const query = getKey(idx, prev)
      return query === null ? null : { ...query, locale }
    },
    async (query) => {
      const signed = await signRequest(query!)
      return fetcher({ ...signed, body: query!.body, locale })
    },
    { ...SWRFetchOptions, ...options }
  )
}
