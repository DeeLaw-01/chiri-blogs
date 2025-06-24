import { useEffect, useState, useCallback, useRef } from 'react'
import { Amplify } from 'aws-amplify'

type WSFetchResponse<T> = {
  data: T | undefined
  error: boolean
  isLoading: boolean
  trigger: (query: any) => void
  unsubscribe: () => void
}

export default function useWSFetch<T>(
  gen: any,
  callback: (data?: any) => void
): WSFetchResponse<T> {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const sub = useRef<any>(null)

  const fetch = useCallback((q: any) => {
    setIsLoading(true)
    Amplify.configure(gen.config)
    sub.current = gen.subscribe(q, handleMessage, handleSubscriptionError)
  }, [])

  const unsubscribe = useCallback(() => {
    if (sub.current) {
      sub.current.unsubscribe()
      sub.current = null
    }
    setIsLoading(false)
  }, [])

  const trigger = useCallback((q: any) => {
    unsubscribe()
    fetch(q)
  }, [])

  const handleMessage = (message: any) => {
    setData(JSON.parse(message.data))
    callback(JSON.parse(message.data))
    setError(false)
  }

  const handleSubscriptionError = () => {
    setError(true)
  }

  useEffect(() => {
    return () => {
      unsubscribe()
    }
  }, [])

  return {
    data,
    error,
    isLoading,
    trigger,
    unsubscribe,
  }
}
