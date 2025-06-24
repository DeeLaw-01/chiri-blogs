import theme from 'src/styles/theme'
import { StyleType } from './type'

export const styles: StyleType = {
  default: {
    borderRadius: 'md',
    bg: '_lightgray',
    color: '_darkgray',
    border: '1px solid',
    borderColor: `${theme.colors._darkgray}10`,
    fontSize: { base: 'xs', md: 'sm' },
    textAlign: 'left',
  },
  warning: {
    bg: '_lightorange',
    color: '_orange',
    borderColor: `${theme.colors._orange}10`,
  },
  error: {
    bg: '_lightred',
    color: '_red',
    borderColor: `${theme.colors._red}10`,
  },
  success: {
    bg: '_lightgreen',
    color: '_green',
    borderColor: `${theme.colors._green}10`,
  },
  info: {
    bg: '_lightblue',
    color: '_blue',
    borderColor: `${theme.colors._blue}10`,
  },
}
