import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuListProps,
  MenuButtonProps,
  MenuProps,
} from '@chakra-ui/react'
import React from 'react'
import SlidersIcon from '@/icons/new/filters/sliders.svg'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

interface CustomMenuProps extends MenuProps {
  button?: React.ReactNode
  menulistProps?: MenuListProps
  menuButtonProps?: MenuButtonProps
  children: React.ReactNode
}

function Menu(props: CustomMenuProps): JSX.Element {
  const { button, children, menulistProps, menuButtonProps, ...rest } = props
  return (
    <ChakraMenu {...rest}>
      <MenuButton {...menuButtonProps}>
        {button ? (
          button
        ) : (
          <CircleIconWrapper bg={'_white'}>
            <SlidersIcon height="14" />
          </CircleIconWrapper>
        )}
      </MenuButton>

      <MenuList {...menulistProps}>{children}</MenuList>
    </ChakraMenu>
  )
}

export default Menu
