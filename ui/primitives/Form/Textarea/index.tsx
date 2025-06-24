import { Textarea as ChakraTextarea, forwardRef } from '@chakra-ui/react'
import { styles } from './styles'

const Textarea = forwardRef(({ children, ...rest }, ref) => {
  return (
    <ChakraTextarea ref={ref} {...styles.default} {...rest}>
      {children}
    </ChakraTextarea>
  )
})

export default Textarea
