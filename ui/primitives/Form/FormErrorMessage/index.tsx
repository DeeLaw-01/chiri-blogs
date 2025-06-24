import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui/react'
import { CustomFormErrorMessageProps } from './error.type'
import { styles } from './styles'

export default function FormErrorMessage({
  children,
  ...rest
}: CustomFormErrorMessageProps) {
  return (
    <ChakraFormErrorMessage {...styles.default} {...rest}>
      {children}
    </ChakraFormErrorMessage>
  )
}
