import { StyleType } from './button.type'
import { BASE_INPUT_HEIGHT } from '../Form/base-styles'
import RightArrow from './RightArrow'

export const styles = {
  default: {
    borderRadius: 'lg',
    fontWeight: 'medium',
    h: BASE_INPUT_HEIGHT,
  },
  primary: {
    bg: 'primary',
    color: '_white',
    variant: 'solid',
    _hover: { filter: 'brightness(105%)' },
    _active: { filter: 'brightness(102%)' },
    h: BASE_INPUT_HEIGHT,
  },
  secondary: {
    bg: 'secondary',
    color: 'primary',
    variant: 'solid',
    fontWeight: 'medium',
    _hover: { filter: 'brightness(102%)' },
    _active: { filter: 'brightness(101%)' },
  },
  asLink: {
    variant: 'link',
    color: 'primary',
    h: 'fit-content',
    fontSize: 'inherit',
  },
  arrow: {
    rightIcon: <RightArrow />,
  },
} as StyleType
