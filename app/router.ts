import { useRouter as useRouterFromNext } from 'next-nprogress-bar'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export function useRouter() {
  const router = useRouterFromNext()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = useMemo(() => Object.fromEntries(searchParams), [searchParams])

  // Since we removed locale prefixes, pathname is already clean
  const pathnameWithoutLocale = pathname

  // Always use English locale
  const localeFromPathname = 'en'

  const push = (
    param: string | { pathname?: string; query?: Record<string, string> }
  ) => {
    if (typeof param === 'string') {
      router.push(param)
    } else {
      const url = new URL(
        param.pathname ? param.pathname : pathname,
        window.location.origin
      )

      Object.entries(param.query || {}).forEach(([key, value]) => {
        url.searchParams.append(key, value as string)
      })

      router.push(url.toString())
    }
  }

  return {
    ...router,
    push,
    locale: localeFromPathname,
    isReady: true,
    pathname: pathnameWithoutLocale,
    query,
  }
}
