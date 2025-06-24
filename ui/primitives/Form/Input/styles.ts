import { StyleType } from './input.type'
import { BASE_INPUT_HEIGHT, FOCUS_STYLE, INVALID_STYLE } from '../base-styles'

export const styles = {
  default: {
    width: '100%',
    bg: '_white',
    height: BASE_INPUT_HEIGHT,
    _placeholder: { fontSize: 'sm' },
    fontSize: 'md',
    border: '1px solid',
    borderColor: '_lightgray',
    borderRadius: 'md',
    padding: '1rem',
    _invalid: INVALID_STYLE,
    _groupInvalid: INVALID_STYLE,
    _focus: FOCUS_STYLE,
    _groupFocus: FOCUS_STYLE,
  },
} as StyleType
