import signRequest from 'src/utils/signRequest'
import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import useSWRMutation, {
  SWRMutationConfiguration,
  SWRMutationResponse,
} from 'swr/mutation'
import { useLocale } from 'next-intl'
import { Key } from 'swr'
import { SWRMutationOptions } from './fetcher/options'

type QueryType = Query | ((args: any) => Query)

export default function useSignedMutation<T, E = unknown>(
  query: QueryType,
  options?: SWRMutationConfiguration<T, E, Key, unknown, T>
): SWRMutationResponse<T, E, Key, unknown> {
  const locale = useLocale()
  const isDynamic = typeof query === 'function'

  return useSWRMutation<T, E, Key, unknown>(
    isDynamic ? ' ' : (query as Key),
    async (_: string, { arg }: { arg: unknown }) => {
      const resolvedQuery = isDynamic
        ? (query as (args: any) => Query)(arg)
        : query
      const signedRequest = await signRequest({ ...resolvedQuery, locale })
      return fetcher({ ...signedRequest, body: resolvedQuery.body, locale })
    },
    { ...SWRMutationOptions, ...options }
  )
}
