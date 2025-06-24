import { CustomInputProps } from '../Input/input.type'
import { CustomSelectProps } from '../Select/select.type'

export type CustomDateInputProps = {} & CustomInputProps

export type StyleType = {
  default: CustomInputProps
  day: CustomInputProps
  month: CustomSelectProps
  year: CustomInputProps
}
