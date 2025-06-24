import { AlertProps } from '@chakra-ui/react'

export interface CustomAlertProps extends AlertProps {
  warning?: boolean
  error?: boolean
  success?: boolean
  info?: boolean
  icon?: boolean
}

export type StyleType = {
  default: AlertProps
  warning: AlertProps
  error: AlertProps
  success: AlertProps
  info: AlertProps
}
