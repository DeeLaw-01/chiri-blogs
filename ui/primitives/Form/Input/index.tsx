import { Input as ChakraInput, forwardRef } from '@chakra-ui/react'
import { CustomInputProps } from './input.type'
import { styles } from './styles'

const Input = forwardRef<CustomInputProps, 'input'>(
  ({ children, ...rest }, ref) => {
    return (
      <ChakraInput ref={ref} {...styles.default} {...rest}>
        {children}
      </ChakraInput>
    )
  }
)

export default Input
