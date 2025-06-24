import { TextProps } from '@chakra-ui/react'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export type CustomTextProps = {
  st?: AllTranslationKeys
  sd?: object
  notag?: boolean
  secondary?: boolean
} & TextProps

export type StyleType = {
  default: TextProps
  notag: TextProps
  secondary: TextProps
}
