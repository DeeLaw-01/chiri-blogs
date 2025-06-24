import { Radio as ChakraRadio, forwardRef } from '@chakra-ui/react'
import { styles } from './styles'
import { CustomRadioProps } from './type'

/**
 * Custom abstraction over chakra Radio element
 * to support custom Tryp style variations.
 *
 * @see Docs https://chakra-ui.com/radio
 */
const Radio = forwardRef<CustomRadioProps, 'input'>(({ ...rest }, ref) => {
  return <ChakraRadio {...styles.default} {...rest} ref={ref} />
})

export default Radio
