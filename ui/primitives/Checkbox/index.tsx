import { Checkbox as ChakraCheckbox, forwardRef } from '@chakra-ui/react'
import { CheckboxProps } from './checkbox.type'
import { styles } from './styles'

const Checkbox = forwardRef<CheckboxProps, 'input'>(
  ({ children, ...rest }, ref) => {
    return (
      <ChakraCheckbox type={'checkbox'} ref={ref} {...styles.default} {...rest}>
        {children}
      </ChakraCheckbox>
    )
  }
)

export default Checkbox
