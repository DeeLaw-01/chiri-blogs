import { ButtonProps } from '@chakra-ui/react'

export type CustomButtonProps = {
  primary?: boolean
  secondary?: boolean
  asLink?: boolean
  arrow?: boolean
  id: string
} & ButtonProps

export type StyleType = {
  default: ButtonProps
  primary: ButtonProps
  secondary: ButtonProps
  arrow: ButtonProps
  asLink: ButtonProps
}
