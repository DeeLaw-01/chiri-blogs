import { StyleType } from './animatedbutton.type'

export const styles: StyleType = {
  default: {
    overflow: 'hidden',
    role: 'group',
    position: 'relative',
    _hover: { filter: 'brightness(100%) !important' },
  },
  motion: {
    zIndex: -1,
    _groupHover: { opacity: 100 },
    pos: 'absolute',
    pointerEvents: 'none',
    opacity: 0,
    inset: 0,
  },
}
