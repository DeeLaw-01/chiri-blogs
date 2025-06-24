import { FormLabel as ChakraLabel } from '@chakra-ui/react'
import { CustomLabelProps } from './label.type'
import { styles } from './styles'

export default function Label({ children, ...rest }: CustomLabelProps) {
  return (
    <ChakraLabel {...styles.default} {...rest}>
      {children}
    </ChakraLabel>
  )
}
