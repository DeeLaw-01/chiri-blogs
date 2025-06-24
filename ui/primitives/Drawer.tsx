import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  forwardRef,
} from '@chakra-ui/react'
import LeftArrow from '@/icons/shared/left-icon.svg'
import { theme } from 'src/styles/theme'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import { useEffect, useRef } from 'react'
import { isBrowser } from 'src/data/environments'

export interface CustomDrawerProps extends DrawerProps {
  // A boolean to render header
  header?: boolean
  // A boolean to handle overlay
  isBgBlured?: boolean
  // A value to add footer on drawer
  footer?: React.ReactNode
  // to pass props to drawer content
  contentStyle?: DrawerContentProps
  footerStyle?: DrawerContentProps
  // Prop necessary to avoid error where React does not recognize
  // the %s prop on a DOM element although it's defined in Chakra
  trapFocus?: boolean
  isFullHeight?: boolean
}

let openDrawersCount = 0

// chakra drawer implemented using -
// @see Docs https://chakra-ui.com/docs/components/drawer
const Drawer = forwardRef<CustomDrawerProps, 'div'>(
  (
    {
      isBgBlured = true,
      header = true,
      placement = 'right',
      size = 'md',
      footer,
      children,
      isOpen,
      contentStyle,
      footerStyle,
      isFullHeight,
      trapFocus,
      ...rest
    },
    ref
  ) => {
    const { height, onClose, blockScrollOnMount } = rest

    // Chakra has a known bug where two drawers/modals on top of each other causes problems.
    // This is a workaround together with blockScrollOnMount={false} to handle this.
    // Without this any accommodation drawer opened wouldn't be working with scroll-mouse-wheel.
    // See e.g https://github.com/chakra-ui/chakra-ui/issues/7588 for more info.
    const bodyRef = useRef<HTMLElement>(isBrowser ? document?.body : null)
    useEffect(() => {
      if (blockScrollOnMount !== false || !bodyRef?.current) return
      openDrawersCount += isOpen ? 1 : -1
      const shouldHideScroll = openDrawersCount > 0
      bodyRef.current.style.overflow = shouldHideScroll ? 'hidden' : ''
      bodyRef.current.style.touchAction = shouldHideScroll ? 'none' : ''

      // Cleanup
      return () => {
        if (isOpen) {
          openDrawersCount--
          if (openDrawersCount === 0 && bodyRef?.current) {
            bodyRef.current.style.overflow = ''
            bodyRef.current.style.touchAction = ''
          }
        }
      }
    }, [isOpen])

    return (
      <ChakraDrawer
        placement={placement}
        size={size}
        isOpen={isOpen}
        isFullHeight={isFullHeight}
        trapFocus={trapFocus}
        {...rest}
      >
        <DrawerOverlay
          h={isBgBlured ? '100vh' : '0'}
          maxHeight="100% !important"
        >
          <DrawerContent
            height={`calc(100% - ${height})`}
            maxHeight="100% !important"
            {...contentStyle}
          >
            {header && (
              <DrawerHeader pb="2">
                <CircleIconWrapper onClick={onClose} w="fit-content">
                  <LeftArrow
                    width="13"
                    height="13"
                    stroke={theme.colors._black}
                  />
                </CircleIconWrapper>
              </DrawerHeader>
            )}
            <DrawerBody {...rest} ref={ref}>
              {children}
            </DrawerBody>
            {footer && <DrawerFooter {...footerStyle}>{footer}</DrawerFooter>}
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    )
  }
)

export default Drawer
