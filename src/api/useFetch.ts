import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import { useLocale } from 'next-intl'
import useSWR, { SWRConfiguration } from 'swr'
import { SWRFetchOptions } from './fetcher/options'

export function useFetch<T, E = unknown>(
  query?: Query | null | '',
  options?: SWRConfiguration
) {
  const locale = useLocale()
  return useSWR<T, E>(
    query && { ...query, locale },
    () => (query ? fetcher({ ...query, locale }) : Promise.resolve(null)),
    { ...SWRFetchOptions, ...options }
  )
}
