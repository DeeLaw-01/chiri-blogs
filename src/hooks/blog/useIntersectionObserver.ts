import { useEffect, useRef, useState, useCallback } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delayMs?: number
}

interface IntersectionObserverState {
  isVisible: boolean
  isIntersecting: boolean
  hasBeenVisible: boolean
  entry: IntersectionObserverEntry | null
}

// Hook for intersection observer with enhanced controls
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '100px',
    triggerOnce = true,
    delayMs = 0
  } = options

  const elementRef = useRef<HTMLElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [state, setState] = useState<IntersectionObserverState>({
    isVisible: false,
    isIntersecting: false,
    hasBeenVisible: false,
    entry: null
  })

  const setRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      const isCurrentlyIntersecting = entry.isIntersecting

      if (isCurrentlyIntersecting) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }

        // Apply delay if specified
        if (delayMs > 0) {
          timeoutRef.current = setTimeout(() => {
            setState(prev => ({
              ...prev,
              isVisible: true,
              isIntersecting: true,
              hasBeenVisible: true,
              entry
            }))
          }, delayMs)
        } else {
          setState(prev => ({
            ...prev,
            isVisible: true,
            isIntersecting: true,
            hasBeenVisible: true,
            entry
          }))
        }
      } else {
        // Clear timeout if element is no longer intersecting
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }

        // Only update visibility if not triggerOnce or hasn't been visible yet
        if (!triggerOnce || !state.hasBeenVisible) {
          setState(prev => ({
            ...prev,
            isVisible: false,
            isIntersecting: false,
            entry
          }))
        } else {
          // Keep isVisible true but update isIntersecting
          setState(prev => ({
            ...prev,
            isIntersecting: false,
            entry
          }))
        }
      }
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    observerRef.current.observe(element)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, triggerOnce, delayMs, state.hasBeenVisible])

  const reset = useCallback(() => {
    setState({
      isVisible: false,
      isIntersecting: false,
      hasBeenVisible: false,
      entry: null
    })
  }, [])

  return {
    ref: setRef,
    isVisible: state.isVisible,
    isIntersecting: state.isIntersecting,
    hasBeenVisible: state.hasBeenVisible,
    entry: state.entry,
    reset
  }
}

// Hook specifically for lazy loading components with staggered timing
export const useLazyComponentLoader = (
  componentType: string,
  priority: number = 5
) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const hasTriggeredRef = useRef(false)

  // Base delay calculation based on priority
  const calculateDelay = useCallback((priority: number) => {
    // Higher priority (lower number) = shorter delay
    // Priority 1: 0ms, Priority 2: 500ms, Priority 3: 1000ms, etc.
    return Math.max(0, (priority - 1) * 500)
  }, [])

  const {
    ref,
    isVisible,
    isIntersecting,
    hasBeenVisible
  } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '150px', // Start loading a bit earlier
    triggerOnce: true,
    delayMs: calculateDelay(priority)
  })

  // Trigger loading when component becomes visible
  useEffect(() => {
    if (isVisible && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true
      setShouldLoad(true)
      
      console.log(`👁️ LazyLoader: ${componentType} became visible (priority: ${priority})`)
    }
  }, [isVisible, componentType, priority])

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const finishLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const reset = useCallback(() => {
    setShouldLoad(false)
    setIsLoading(false)
    hasTriggeredRef.current = false
  }, [])

  return {
    ref,
    shouldLoad,
    isLoading,
    isVisible,
    isIntersecting,
    hasBeenVisible,
    startLoading,
    finishLoading,
    reset
  }
}

// Hook for managing component loading with queue integration
export const useQueuedComponentLoader = (
  componentType: string,
  priority?: number
) => {
  const actualPriority = priority ?? (() => {
    switch (componentType) {
      case 'RoundTripEstimate': return 1
      case 'PackageSearchSection': return 2
      case 'CheapestAirline': return 3
      case 'AirlineFlights': return 4
      case 'StopsAnalysisSection': return 5
      default: return 5
    }
  })()

  const {
    ref,
    shouldLoad,
    isLoading,
    isVisible,
    isIntersecting,
    hasBeenVisible,
    startLoading,
    finishLoading,
    reset
  } = useLazyComponentLoader(componentType, actualPriority)

  return {
    ref,
    shouldLoad,
    isLoading,
    isVisible,
    isIntersecting,
    hasBeenVisible,
    startLoading,
    finishLoading,
    reset,
    priority: actualPriority
  }
}