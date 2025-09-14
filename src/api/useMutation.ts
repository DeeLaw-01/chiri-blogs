import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'
import useSWRMutation, {
  SWRMutationConfiguration,
  SWRMutationResponse,
} from 'swr/mutation'
import { Key } from 'swr'
import { SWRMutationOptions } from './fetcher/options'

type QueryType = Query | ((args: any) => Query)

export default function useMutation<T, E = unknown>(
  query: QueryType,
  options?: SWRMutationConfiguration<T, E, Key, unknown, T>
): SWRMutationResponse<T, E, Key, unknown> {
  // Always use English locale
  const locale = 'en'
  const dynamic = typeof query === 'function'

  return useSWRMutation<T, E, Key, unknown>(
    dynamic ? ' ' : query,
    (_: string, { arg }: { arg: unknown }) =>
      fetcher(dynamic ? { ...query(arg), locale } : { ...query, locale }),
    { ...SWRMutationOptions, ...options }
  )
}
