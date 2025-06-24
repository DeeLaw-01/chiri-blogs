import { getCookieItem } from './cookieUtils'

export const getSource = () => {
  const source = getCookieItem('source')
  return source || ''
}
