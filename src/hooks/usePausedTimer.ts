import { useState, useEffect, useRef } from 'react'

type usePausedTimerType = {
  timer: number
  start: (duration?: number) => void
  pause: () => void
  reset: () => void
  isTimeout: boolean
  isActive: boolean
}
export function usePausedTimer(): usePausedTimerType {
  const countRef = useRef(null)
  const [timer, setTimer] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isTimeout, setIsTimeout] = useState<boolean>(false)

  const start = (duration?: number): void => {
    if (duration) {
      setIsActive(true)
      setIsTimeout(false)
      setTimer(duration)
      countRef.current = duration
    } else {
      // if duration is not passed, then timer is likely being unpaused
      setIsActive(true)
    }
  }

  useEffect(() => {
    let interval = null
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        countRef.current = countRef.current - 1
        setTimer(countRef.current)
      }, 1000)
    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    } else if (timer === 0) {
      setIsActive(false)
      setIsTimeout(true)
    }
    return () => clearInterval(interval)
  }, [isActive, timer])

  const pause = (): void => {
    setIsActive(false)
  }

  const reset = (): void => {
    setIsActive(false)
    setIsTimeout(false)
    setTimer(0)
    countRef.current = 0
  }

  return { timer, start, pause, reset, isTimeout, isActive }
}
