import { PlacementWithLogical, PopoverContentProps } from '@chakra-ui/react'

export type CustomTipProps = {
  content: string | JSX.Element
  placement?: PlacementWithLogical
  primary?: boolean
  purple?: boolean
  yellow?: boolean
  green?: boolean
  blue?: boolean
  red?: boolean
} & PopoverContentProps

export type StyleType = {
  default: PopoverContentProps
  purple: PopoverContentProps
  yellow: PopoverContentProps
  green: PopoverContentProps
  blue: PopoverContentProps
  red: PopoverContentProps
}
