import { Container as ChakraContainer } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomContainerProps } from './container.type'

export default function Container({ children, ...rest }: CustomContainerProps) {
  return (
    <ChakraContainer {...styles.default} {...rest}>
      {children}
    </ChakraContainer>
  )
}
