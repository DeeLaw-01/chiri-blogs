import { useRef } from 'react'

export default function useScrollToElement<T extends HTMLElement>(
  /** Offset from the element to scroll to, kinda like a margin. */
  offset = 60,
  /** Delay before running the scroll, helpful if you're waiting for animations to finish.  */
  delay = 100
) {
  const elementToScrollRef = useRef<T>()

  const scrollToElement = () => {
    setTimeout(() => {
      // timeout needed for when accordion is closing
      if (elementToScrollRef.current) {
        const element = elementToScrollRef.current
        const headerOffset = offset
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, delay)
  }

  return { scrollToElement, elementToScrollRef }
}
