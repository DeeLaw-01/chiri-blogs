import { Box } from '@chakra-ui/react'
import { CardProps } from './card.type'
import { styles } from './styles'

export default function Card({ children, ...rest }: CardProps) {
  return (
    <Box {...styles.default} {...rest}>
      {children}
    </Box>
  )
}
