import { StyleType } from './date-input.type'
import { BASE_INPUT_HEIGHT, BASE_INPUT_BORDER_COLOR } from '../base-styles'

export const styles = {
  default: {
    width: '100%',
    overflow: 'hidden',
    gap: '1px',
    bg: BASE_INPUT_BORDER_COLOR,
    height: BASE_INPUT_HEIGHT,
    borderRadius: 'md',
    border: '1px solid',
    borderColor: BASE_INPUT_BORDER_COLOR,
  },
  day: {
    type: 'number',
    min: 0,
    maxLength: 2,
    placeholder: 'DD',
    w: '25%',
    _focus: { border: 'none', boxShadow: 'none' },
    _groupFocus: { border: 'none', boxShadow: 'none' },
    _invalid: { border: 'none', boxShadow: 'none' },
    _groupInvalid: { border: 'none', boxShadow: 'none' },
    borderRadius: 'none',
    border: 'none !important',
  },
  month: {
    w: '50%',
    border: 'none',
    borderRadius: 'none',
    _focus: { border: 'none', boxShadow: 'none' },
    _invalid: { border: 'none', boxShadow: 'none' },
  },
  year: {
    type: 'number',
    min: 0,
    maxLength: 4,
    placeholder: 'YYYY',
    w: '25%',
    _focus: { border: 'none', boxShadow: 'none' },
    _groupFocus: { border: 'none', boxShadow: 'none' },
    _invalid: { border: 'none', boxShadow: 'none' },
    _groupInvalid: { border: 'none', boxShadow: 'none' },
    borderRadius: 'none',
    border: 'none !important',
  },
} as StyleType
