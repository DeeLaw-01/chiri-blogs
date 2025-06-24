import theme from 'src/styles/theme'
import { StyleType } from './card.type'

export const styles = {
  default: {
    position: 'relative',
    borderRadius: 'lg',
    bg: `${theme.colors.white}`,
    w: 'full',
    boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 5px',
  },
} as StyleType
