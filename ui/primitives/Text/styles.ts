import { StyleType } from './text.type'

export const styles: StyleType = {
  default: {
    letterSpacing: '-0.01em',
  },
  notag: {
    as: 'span',
  },
  secondary: {
    color: '_gray',
    fontSize: { base: 'xs', md: 'sm' },
  },
}
