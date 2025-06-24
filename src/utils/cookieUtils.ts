import { isBrowser } from 'src/data/environments'

export const getCookieItem = (key, shouldParseAndStringify = false) => {
  if (!isBrowser) return
  return document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=')
    const storedKey = item[0]
    const storedValue = item[1]

    if (key === storedKey) {
      const decodedValue = decodeURIComponent(storedValue)
      return shouldParseAndStringify ? JSON.parse(decodedValue) : decodedValue
    }
    return total
  }, '')
}
