import { useEffect } from 'react'
import useSessionStorage from 'src/hooks/useSessionStorage'
import Timer from 'ui/shared/timer'

export default function TripTimer() {
  const [, setSessionTimer] = useSessionStorage('persist-timer-trip-page')

  const timer = {
    hours: 1,
    mins: '0',
    secs: '0',
  }

  useEffect(() => {
    setSessionTimer(timer)
  }, [])

  return (
    <Timer
      timerId="persist-timer-trip-page"
      countdownTime={timer}
      showTimer={false}
    />
  )
}
