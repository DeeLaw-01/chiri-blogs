import { Badge as ChakraBadge } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomBadgeProps } from './type'

/**
 * Custom abstraction over chakra Badge element
 * to support Tryp style variations.
 *
 * @see Docs https://chakra-ui.com/badge
 */
export default function Badge({
  primary,
  green,
  children,
  ...rest
}: CustomBadgeProps) {
  return (
    <ChakraBadge
      {...styles.default}
      {...(primary && styles.primary)}
      {...(green && styles.green)}
      {...rest}
    >
      {children}
    </ChakraBadge>
  )
}
