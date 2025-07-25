import { useState } from 'react'
import { isBrowser } from 'src/data/environments'

export default function useLocalStorage<T>(
  key: string,
  initialValue?: string
): [T, (value) => void, () => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) return initialValue
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // .. persists the new value to localStorage.
  const setValue = (value) => {
    if (!isBrowser) return
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      return
    }
  }

  const deleteValue = () => {
    if (!isBrowser) return
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      return
    }
  }
  return [storedValue, setValue, deleteValue]
}
