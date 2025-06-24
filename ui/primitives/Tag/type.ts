import { TagProps } from '@chakra-ui/react'

export type CustomTagProps = TagProps & {
  primary?: boolean
  purple?: boolean
  yellow?: boolean
  red?: boolean
  green?: boolean
  blue?: boolean
}

export type StyleType = {
  default: TagProps
  purple: TagProps
  yellow: TagProps
  green: TagProps
  blue: TagProps
  red: TagProps
}
