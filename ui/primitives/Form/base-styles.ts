import theme from 'src/styles/theme'

export const BASE_INPUT_BORDER_COLOR = theme.colors._lightgray
export const BASE_INPUT_HEIGHT = { base: 10, md: 12 }
export const FOCUS_BORDER_COLOR = theme.colors._gray
export const INVALID_BORDER_COLOR = theme.colors._red

export const INVALID_STYLE = {
  borderColor: INVALID_BORDER_COLOR,
  boxShadow: `0 0 0 1px ${INVALID_BORDER_COLOR}`,
}

export const FOCUS_STYLE = {
  borderColor: `${FOCUS_BORDER_COLOR} !important`,
  boxShadow: `0 0 0 1px ${FOCUS_BORDER_COLOR} !important`,
}
