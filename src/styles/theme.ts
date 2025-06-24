import { extendTheme } from '@chakra-ui/react'

const PRIMARY_COLOR = '#3DA23C'
const SECONDARY_COLOR = '#EDFFF9'

const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    _white: '#FFFFFF',
    _black: '#000000',
    _darkgray: '#292929',
    _gray: '#636363',
    _lightgray: '#E3E3E3',
    _lightestgray: '#F7F7F7',
    _green: '#157c00',
    _lightgreen: '#eeffeb',
    _red: '#E53E3E',
    _lightred: '#FAEAEA',
    _orange: '#dd6b20',
    _lightorange: '#fefcbf',
    _purple: '#7F39FB',
    _lightpurple: '#EEE3FA',
    _blue: '#1869b3',
    _lightblue: '#F1F6F9',
  },
  gradients: {
    primary: `linear(to-br, ${PRIMARY_COLOR} 55%, color-mix(in srgb, ${PRIMARY_COLOR} 70%, white) 100%)`,
  },
  styles: {
    global: {
      '*': {
        borderColor: '_lightgray',
      },
    },
  },
  components: {
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ['dialog, dialogContainer'],
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: '_gray',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: '_gray',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: '_gray',
      },
    },
  },
  breakpoints: {
    md: '62em',
  },
  shadows: {
    outline: `0 0 0 2px ${SECONDARY_COLOR}`,
  },
}

export { theme }

export default extendTheme(theme)
