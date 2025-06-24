import { Dispatch, SetStateAction } from 'react'

export type NotificationType = {
  type: NotificationActionType
  header?: JSX.Element | string
  description?: JSX.Element | string
  content?: JSX.Element | string
  id: string
  creationTime: number
  expireTime: number
  data?: any
}

export type CreateNotificationType = {
  type: NotificationActionType
  header?: JSX.Element | string
  description?: JSX.Element | string
  content?: JSX.Element | string
  id?: string
  creationTime?: number
  expireTime?: number
  data?: any
}

type NotificationActionType = 'email-trip'

export interface NotificationContextType {
  notifications: NotificationType[]
  setIsPaused: Dispatch<SetStateAction<string | undefined>>
  isPaused: string | undefined
  sendNotification: (data: CreateNotificationType) => void
  closeNotification: (id: string) => void
}
