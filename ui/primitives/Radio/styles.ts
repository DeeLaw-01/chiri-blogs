import theme from 'src/styles/theme'

export const styles = {
  default: {
    borderRadius: 'full',
    _checked: {
      transition: 'all 0.2s ease-in-out',
      background: '_white',
      border: `0.4rem solid ${theme.colors.primary}`,
      outline: `3px solid ${theme.colors.secondary}`,
    },
  },
}
