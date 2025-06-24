import { HeadingProps } from '@chakra-ui/react'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'

export type CustomHeadingProps = {
  as: asStyleType
  st?: AllTranslationKeys
  sd?: object
  asStyle?: asStyleType
} & HeadingProps

export type StyleType = {
  default: HeadingProps
  h1: HeadingProps
  h2: HeadingProps
  h3: HeadingProps
  h4: HeadingProps
  h5: HeadingProps
}

export type asStyleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
