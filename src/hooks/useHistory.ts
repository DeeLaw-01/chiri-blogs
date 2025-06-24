import { useRouter, usePathname } from 'src/i18n/router'
import { useEffect } from 'react'
import useSessionStorage from './useSessionStorage'
import { useSearchParams } from 'next/navigation'

interface IUseHistory {
  /** Route back to the previous page and update history object */
  back: () => void
  /** Get the previous history stored in localStorage */
  history: string[]
}

/** Hook for obtaining the user history stored inside localStorage as nextjs doesn't keep it per default
 */
export default function useHistory(): IUseHistory {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams ? Object.fromEntries(searchParams.entries()) : {}
  const [history, setHistory] = useSessionStorage<string[]>('history', [])

  function back(): void {
    if (history.length === 1) {
      push('/')
      return
    }
    for (let i = history.length - 2; i >= 0; i--) {
      const route = history[i]
      if (!route.includes('#') && route !== pathname) {
        push(route)
        const newHistory = history.slice(0, i)
        setHistory(newHistory)
        break
      }
    }
  }

  useEffect(() => {
    if (!pathname) return
    const pathNameWithQueryParams = `${pathname}${
      Object.keys(query).length > 0
        ? `?${new URLSearchParams(query).toString()}`
        : ''
    }`

    if (pathNameWithQueryParams === history[history.length - 1]) return
    // Maximum store 10 urls in the history array. As it probably doesn't make sense to have more.
    // This is magic number that can be updated if a usecase requires it.
    if (history.length > 10) history.shift()

    const newHistory = [...history, pathNameWithQueryParams]
    setHistory(newHistory)
  }, [pathname, query])

  return { back, history }
}
