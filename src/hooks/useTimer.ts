import { useEffect, useState } from 'react'

export interface countdown {
  hours: number
  mins: string
  secs: string
}

/**
 * Hook for starting a countdown timer and returning it
 */
export default function useTimer(defaultValue?: countdown) {
  const [startedTime, setStartedTime] = useState<Date>(new Date())
  const [timer, setTimer] = useState(null)
  const [countdown, setCountdown] = useState<countdown>({
    hours: defaultValue?.hours ?? 0,
    mins: defaultValue?.mins ?? '00',
    secs: defaultValue?.secs ?? '00',
  })

  const [timerStarted, setTimerStarted] = useState<boolean>(false)
  const [isTimeout, setIsTimeout] = useState<boolean>(false)

  // clear timer if unmounted
  useEffect(() => {
    return () => {
      clearInterval(timer)
      setTimerStarted(false)
    }
  }, [timer])

  useEffect(() => {
    if (!startedTime || !timerStarted) {
      start(
        countdown.hours * 3600 +
          Number(countdown.mins) * 60 +
          Number(countdown.secs)
      )
      setStartedTime(new Date())
    }
  }, [])

  const getDuration = (startDuration: number) => {
    let now = new Date()
    const secondsBetweenStartAndNow = Math.round(
      Math.abs(startedTime.getTime() - now.getTime()) / 1000
    )

    return startDuration - secondsBetweenStartAndNow
  }

  /**
   * Start a countdown timer
   * @param duration A number representation in seconds
   */
  const start = (duration: number): void => {
    if (timerStarted) return
    setIsTimeout(false)
    clearInterval(timer)
    setTimerStarted(true)
    let startDuration = duration

    const loop = () => {
      let remainingDuration = getDuration(startDuration)
      const hrs = Math.floor(remainingDuration / 3600)
      const mins = Math.floor((remainingDuration % 3600) / 60)
        .toString()
        .padStart(2, '0')
      const secs = (remainingDuration % 60).toString().padStart(2, '0')

      setCountdown({ hours: hrs, mins: mins, secs: secs })

      if (remainingDuration <= 0) {
        setIsTimeout(true)
        stop()
      }
    }

    setTimer(setInterval(loop, 1000)) // run every 1 second
  }

  // eslint-disable-next-line no-undef
  const stop = (): void => {
    clearInterval(timer)
    setTimerStarted(false)
    setCountdown({
      hours: 0,
      mins: '00',
      secs: '00',
    })
  }

  return { countdown, start, isTimeout, timerStarted }
}
