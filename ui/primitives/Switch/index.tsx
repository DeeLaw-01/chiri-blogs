import { forwardRef, Switch as ChakraSwitch } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomSwitchProps } from './switch.type'

const Switch = forwardRef<CustomSwitchProps, 'input'>(
  ({ children, ...rest }, ref) => {
    return (
      <ChakraSwitch ref={ref} {...styles.default} {...rest}>
        {children}
      </ChakraSwitch>
    )
  }
)

export default Switch
