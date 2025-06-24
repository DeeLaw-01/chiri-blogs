import { StyleType } from './phone-input.type'
import { styles as InputStyles } from '../Input/styles'
import { CustomInputProps } from '../Input/input.type'

export const styles = (style?: CustomInputProps) => {
  return {
    default: {
      '#custom-phone-input': {
        pl: '3rem !important',
        overflow: 'hidden',
        ...InputStyles.default,
        ...style,
      },
      '.flag-dropdown': {
        backgroundColor: 'transparent !important',
      },
    },
  } as StyleType
}
