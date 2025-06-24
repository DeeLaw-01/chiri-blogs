import { CONFIG_SITE } from 'src/config'
import locales from 'src/data/locales'
import { countryCodes } from 'ui/shared/country-flag'

export type Locale = {
  value: string
  label: string
  countryName: countryCodes
  code: string
}

const getLocaleFromValue = (locale: string): Locale | undefined => {
  const value = locales.find((loc) => loc.value === locale)
  return value as Locale
}

const removeLocale = (url: string) => {
  const localesArr = locales.map((locale) => locale.value)

  const regex = new RegExp(`/(${localesArr.join('|')})/?`, 'gi')

  let newUrl = url.replace(regex, '/')
  return newUrl
}

const removeLocaleFromFullPathname = (pathname) => {
  const segments = pathname.split('/')
  return segments.length > 2 ? '/' + segments.slice(2).join('/') : '/'
}

const replaceLocale = (url, newLocale) => {
  let urlObj = new URL(url, CONFIG_SITE.BASE_LINK)

  let pathSegments = urlObj.pathname.split('/')

  pathSegments[1] = newLocale

  urlObj.pathname = pathSegments.join('/')

  return urlObj.toString()
}

export {
  getLocaleFromValue,
  removeLocale,
  replaceLocale,
  removeLocaleFromFullPathname,
}
