import { BadgeProps } from '@chakra-ui/react'

export type StyleType = {
  default: BadgeProps
  primary: BadgeProps
  green: BadgeProps
}

export type CustomBadgeProps = BadgeProps & {
  /** Primary Tryp style for a badge */
  primary?: boolean
  green?: boolean
}
