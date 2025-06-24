import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './primitives/useIsomorphicLayoutEffect'

interface scrollData {
  x: number
  y: number
  lastX: number
  lastY: number
  isScrollingDown: boolean
}

function useScrollListener(enableScrollBehavior = false): scrollData {
  const [scrollData, setScrollData] = useState<scrollData>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isScrollingDown: false,
  })
  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setScrollData((last) => {
        let isScrollingDown =
          window.scrollY > 150 && window.scrollY - last.lastY > 0
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
          isScrollingDown,
        }
      })
    }

    handleScroll()
    if (enableScrollBehavior)
      window?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (enableScrollBehavior) {
        window?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [enableScrollBehavior])

  return scrollData
}

function WithScrollData({ children, enableScrollBehavior = false }) {
  const scroll = useScrollListener(enableScrollBehavior)
  return children(scroll)
}

export default useScrollListener
export { WithScrollData }
