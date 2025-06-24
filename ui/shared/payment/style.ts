import theme from 'src/styles/theme'
import { FOCUS_STYLE, INVALID_STYLE } from 'ui/primitives/Form/base-styles'

export const appearance = {
  theme: 'stripe',
  variables: {
    spacingUnit: '5px',
    borderRadius: '5px',
  },
  rules: {
    '.AccordionPanel': {
      overflow: 'visible',
    },
    '.AccordionItem': {
      boxShadow: 'none',
      border: '0px',
      borderRadius: 'none',
      borderBottom: `1px solid ${theme.colors._lightgray}`,
      color: theme.colors._gray,
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '0',
      paddingRight: '0',
    },
    '.AccordionItem--selected': {
      color: theme.colors._darkgray,
    },
    '.Error': {
      color: theme.colors._red,
      fontSize: '0.75rem',
    },
    '.Label': {
      color: theme.colors._gray,
      fontSize: '0.875rem',
    },
    '.Input--invalid': {
      ...INVALID_STYLE,
    },
    '.Input:focus': {
      ...FOCUS_STYLE,
    },
    '.Input::placeholder': {
      fontSize: '0.875rem',
    },
  },
} as const

export const options = {
  layout: {
    type: 'accordion',
    defaultCollapsed: true,
    radios: true,
    spacedAccordionItems: false,
  },
} as const
