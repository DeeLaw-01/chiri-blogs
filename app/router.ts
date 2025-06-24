import { useRouter as useRouterFromNext } from 'next-nprogress-bar'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import locales from 'src/data/locales'

export function useRouter() {
  const router = useRouterFromNext()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = useMemo(() => Object.fromEntries(searchParams), [searchParams])

  const pathnameWithoutLocale = useMemo(() => {
    const localesArr = locales.map((locale) => locale.value)
    let replacedPathName = pathname

    localesArr.forEach((locale) => {
      if (pathname.startsWith(`/${locale}`)) {
        replacedPathName = pathname.replace(`/${locale}`, '/')
      }

      if (pathname.startsWith(`/${locale}/`)) {
        replacedPathName = pathname.replace(`/${locale}/`, '/')
      }
    })

    return replacedPathName
  }, [pathname])

  const localeFromPathname = useMemo(() => {
    const localesArr = locales.map((locale) => locale.value)
    let locale = 'en'

    localesArr.forEach((localeValue) => {
      if (pathname.startsWith(`/${localeValue}`)) {
        locale = localeValue
      }

      if (pathname.startsWith(`/${localeValue}/`)) {
        locale = localeValue
      }
    })

    return locale
  }, [pathname])

  const push = (param) => {
    if (typeof param === 'string') {
      router.push(param)
    } else {
      const url = new URL(
        param.pathname ? param.pathname : pathname,
        window.location.origin
      )

      Object.entries(param.query || {}).forEach(([key, value]) => {
        url.searchParams.append(key, value)
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
