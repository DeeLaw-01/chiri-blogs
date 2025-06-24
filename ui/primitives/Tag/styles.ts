import theme from 'src/styles/theme'
import { StyleType } from './type'

export const styles: StyleType = {
  default: {
    borderRadius: 'md',
    fontSize: '0.7rem',
    maxW: 'fit-content',
    minW: 'fit-content',
    px: '0.25rem',
    py: '0.15rem',
    minH: 'unset',
    bg: '_lightgray',
    color: '_darkgray',
    border: '1px solid',
    borderColor: `${theme.colors._darkgray}10`,
  },
  purple: {
    bg: '_lightpurple',
    color: '_purple',
    borderColor: `${theme.colors._purple}10`,
  },
  yellow: {
    bg: '_lightorange',
    color: '_orange',
    borderColor: `${theme.colors._orange}10`,
  },
  green: {
    bg: '_lightgreen',
    color: '_green',
    borderColor: `${theme.colors._green}10`,
  },
  blue: {
    bg: '_lightblue',
    color: '_blue',
    borderColor: `${theme.colors._blue}10`,
  },
  red: {
    bg: '_lightred',
    color: '_red',
    borderColor: `${theme.colors._red}10`,
  },
}
