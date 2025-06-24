import { InputProps } from '@chakra-ui/react'
import { PhoneInputProps } from 'react-phone-input-2'

export type CustomPhoneInputProps = {
  style?: InputProps
} & PhoneInputProps

export type StyleType = {
  default: InputProps
}
