import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { useRouter, usePathname } from 'src/i18n/router'

interface IUseUrlState {
  /** Method for setting the URL state value based on the hook queryId
   * @param queryvalue The individual single query value to set
   */
  setUrlState: (queryValue: string) => void
}

/**
 * Hook for handling URL states
 * @param queryId The individual single query param id to use
 */
export default function useUrlState(queryId: string): IUseUrlState {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = useMemo(() => Object.fromEntries(searchParams), [searchParams])

  const setUrlState = (queryValue: string): void => {
    router.push(
      {
        pathname: pathname,
        query: { ...query, [queryId]: queryValue },
      },
      {
        scroll: false,
      }
    )
  }

  return { setUrlState }
}
