import { StyleType } from './checkbox.type'

export const styles: StyleType = {
  default: {
    sx: {
      w: 'fit-content',
      _checked: {},
      "span[class*='checkbox__control']:not([data-disabled])": {
        borderColor: '_lightgray',
        borderRadius: '4px',
        bg: '_white',
        _checked: {
          bg: 'primary',
          borderColor: 'primary',
        },
        _focus: {
          _checked: {
            boxShadow: `0 0 0 2px secondary`,
          },
        },
      },
    },
  },
}
