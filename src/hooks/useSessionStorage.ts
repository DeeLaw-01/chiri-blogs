import { useState } from 'react'

const useSessionStorage = <T>(
  keyName: string,
  defaultValue?: T
): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(keyName)

      if (value) {
        return JSON.parse(value)
      } else {
        if (!defaultValue) return
        window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = (newValue) => {
    try {
      window.sessionStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (err) {
      return
    }
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useSessionStorage
