import { VStack, Icon, StackProps } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { NavItem } from './data'

type MobileNavItemProps = {
  item: NavItem
  isActive: boolean
} & StackProps

export default function MobileNavItem({
  item,
  isActive,
  ...rest
}: MobileNavItemProps) {
  return (
    <VStack gap="2px" color={isActive ? 'primary' : '_gray'} flex={1} {...rest}>
      <Icon
        stroke={isActive ? 'primary' : '_gray'}
        height="25"
        width="25"
        as={item.icon}
      />
      <Text pt="1" st={item.text} />
    </VStack>
  )
}
