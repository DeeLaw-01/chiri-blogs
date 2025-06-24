import { BASE_FONT_FAMILY } from '../Text/base-styles'
import { StyleType } from './heading.type'

export const styles: StyleType = {
  default: {
    fontWeight: 'medium',
    letterSpacing: '-0.03em',
    fontFamily: BASE_FONT_FAMILY,
  },
  h1: {
    fontSize: { base: '2xl', md: '3xl' },
  },
  h2: {
    fontSize: { base: 'xl', md: '2xl' },
  },
  h3: {
    fontSize: { base: 'lg', md: 'xl' },
  },
  h4: {
    fontSize: 'lg',
  },
  h5: {
    fontSize: 'md',
  },
}
