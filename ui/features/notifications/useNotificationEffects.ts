import { useEffect } from 'react'
import { useNotification } from 'src/contexts/notification'
import { usePathname } from 'next/navigation.js'
import { removeLocaleFromFullPathname } from 'src/utils/languageUtils'

export const useNotificationEffects = () => {
  const pathname = usePathname()
  const path = removeLocaleFromFullPathname(pathname)
  const { notifications, closeNotification, isPaused } = useNotification()

  /* Timer to auto-close notifications after x seconds */
  useEffect(() => {
    if (!notifications) return
    const interval = setInterval(() => {
      const now = Date.now()
      notifications.forEach((n) => {
        if (n.id === isPaused) return
        if (now - n.creationTime >= n.expireTime) {
          closeNotification(n.id)
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [notifications, isPaused])

  /* Handle new notifications on pathname changes */
  useEffect(() => {}, [path])

  return {}
}
