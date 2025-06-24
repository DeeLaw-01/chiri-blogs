import { fetcher } from './fetcher/fetcher'
import useSWR, { SWRResponse, SWRConfiguration } from 'swr'
import { Query } from './fetcher/fetcher.type'
import signRequest from 'src/utils/signRequest'
import { useLocale } from 'next-intl'
import { SWRFetchOptions } from './fetcher/options'

export function useSignedFetch<T = any, E = unknown>(
  query: Query,
  options?: SWRConfiguration<T, E>
): SWRResponse<T, E> {
  const locale = useLocale()

  const signedFetcher = async () => {
    const signedRequest = await signRequest({ ...query, locale })
    return fetcher({ ...signedRequest, body: query.body, locale })
  }

  return useSWR<T, E>(query, signedFetcher, { ...SWRFetchOptions, ...options })
}
