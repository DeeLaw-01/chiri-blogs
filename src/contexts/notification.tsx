import { createContext, useContext, useState } from 'react'
import generateUUID from 'src/utils/generateUUID'
import {
  CreateNotificationType,
  NotificationContextType,
  NotificationType,
} from 'ui/features/notifications/notification.type'

const MAX_NOTIFICATIONS = 5
const NotificationContext = createContext<NotificationContextType | null>(null)

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])
  const [isPaused, setIsPaused] = useState<string>()

  const sendNotification = (data: NotificationType) => {
    setNotifications((prev) => {
      const newNotification = getNotificationObject(data)
      if (prev.length >= MAX_NOTIFICATIONS) {
        return [newNotification, ...prev.slice(0, prev.length - 1)]
      }
      return [newNotification, ...prev]
    })
  }

  const getNotificationObject = (
    data: CreateNotificationType
  ): NotificationType => {
    return {
      id: generateUUID(),
      creationTime: Date.now(),
      expireTime: data.expireTime ?? 10000,
      ...data,
    }
  }
  const closeNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    )
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setIsPaused,
        isPaused,
        sendNotification,
        closeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotification must be used within provider')

  return context
}
