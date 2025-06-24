import { SWRConfiguration } from 'swr'
import { SWRInfiniteConfiguration } from 'swr/infinite'
import { SWRMutationConfiguration } from 'swr/mutation'

/**
 * For useFetch and useFetchInfinite hooks
 */
export const SWRFetchOptions: SWRConfiguration & SWRInfiniteConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: true,
  errorRetryCount: 3,
}

/**
 * For useMutation hook
 */
export const SWRMutationOptions: SWRMutationConfiguration<any, any> = {}
