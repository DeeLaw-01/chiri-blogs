import theme from 'src/styles/theme'
import { StyleType } from './types'

export const styles: StyleType = {
  default: {
    fontSize: 'xs',
    bg: '_lightgray',
    color: '_gray',
    boxShadow: 'none',
    borderRadius: 'md',
    border: '1px solid',
  },
  purple: {
    bg: '_lightpurple',
    color: '_purple',
    borderColor: `${theme.colors._purple}35`,
    boxShadow: `1px 1px 0px 0px ${theme.colors._purple}50`,
  },
  yellow: {
    bg: '_lightorange',
    color: '_orange',
    borderColor: `${theme.colors._orange}35`,
    boxShadow: `1px 1px 0px 0px ${theme.colors._orange}50`,
  },
  green: {
    bg: '_lightgreen',
    color: '_green',
    borderColor: `${theme.colors._green}35`,
    boxShadow: `1px 1px 0px 0px ${theme.colors._green}50`,
  },
  blue: {
    bg: '_lightblue',
    color: '_blue',
    borderColor: `${theme.colors._blue}35`,
    boxShadow: `1px 1px 0px 0px ${theme.colors._blue}50`,
  },
  red: {
    bg: '_lightred',
    color: '_red',
    borderColor: `${theme.colors._red}35`,
    boxShadow: `1px 1px 0px 0px ${theme.colors._red}50`,
  },
}
