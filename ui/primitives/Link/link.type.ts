import { LinkProps } from '@chakra-ui/react'

export type CustomLinkProps = {
  href: string
  isExternal?: boolean
  intlLinkProps?: Record<string, any>
} & LinkProps

export type StyleType = {
  default: LinkProps
}
