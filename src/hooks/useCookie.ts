import { useState } from 'react'
import { isBrowser } from 'src/data/environments'
import { getCookieItem } from 'src/utils/cookieUtils'

const setItem = (key, value, numberOfDays, shouldParseAndStringify = false) => {
  if (!isBrowser) return
  const now = new Date()

  // Set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000)

  const stringValue = shouldParseAndStringify ? JSON.stringify(value) : value

  document.cookie = `${key}=${encodeURIComponent(
    stringValue
  )}; expires=${now.toUTCString()}; path=/`
}

const deleteItem = (key) => {
  if (!isBrowser) return
  // If we set cookie expire to a previous date, it gets deleted
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

const useCookie = (key, defaultValue, shouldParseAndStringify = false) => {
  const getCookie = () =>
    getCookieItem(key, shouldParseAndStringify) || defaultValue || ''
  const [cookie, setCookie] = useState(getCookie())

  const updateCookie = (value, numberOfDays) => {
    setCookie(value)
    setItem(key, value, numberOfDays, shouldParseAndStringify)
  }

  const deleteCookie = () => {
    setCookie(null)
    deleteItem(key)
  }

  return [cookie, updateCookie, deleteCookie]
}

export default useCookie
