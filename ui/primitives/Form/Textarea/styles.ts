import { FOCUS_STYLE, INVALID_STYLE } from '../base-styles'
import { StyleType } from './textarea.type'

export const styles = {
  default: {
    rows: 5,
    _invalid: INVALID_STYLE,
    _groupInvalid: INVALID_STYLE,
    _focus: FOCUS_STYLE,
    _groupFocus: FOCUS_STYLE,
  },
} as StyleType
