import { Box, HStack, Icon, StackProps } from '@chakra-ui/react'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import { MenuItemType } from './data'

type MenuItemProps = {
  item: MenuItemType
  children?: JSX.Element
} & StackProps

export default function MenuItem({ item, children, ...rest }: MenuItemProps) {
  const Content = () => {
    return (
      <HStack
        w="full"
        role="group"
        justify="space-between"
        py={3}
        _hover={{ cursor: 'pointer' }}
        {...rest}
      >
        <HStack>
          <Icon as={item.icon} w="16px" h="16px" />
          <Text color="_darkgray" noOfLines={1} ml="2" st={item.key} />
        </HStack>
        <HStack spacing="5">
          {children}
          <Box _groupHover={{ mr: -1, ml: 1 }} transition="all .2s">
            <RightArrowSmallIcon stroke={theme.colors._darkgray} height={15} />
          </Box>
        </HStack>
      </HStack>
    )
  }

  if (item.link) {
    const isQueryParamLink = item.link.includes('?')
    return (
      <Link
        href={item.link}
        intlLinkProps={{ scroll: !isQueryParamLink }}
        _hover={{}}
      >
        <Content />
      </Link>
    )
  }

  return <Content />
}
