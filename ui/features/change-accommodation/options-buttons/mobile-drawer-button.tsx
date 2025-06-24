import { Box, BoxProps, HStack, Icon } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'

type SortItemProps = {
  icon: JSX.Element
  isActive?: boolean
} & BoxProps

export default function MobileDrawerButton({
  icon,
  isActive = false,
  children,
  ...rest
}: SortItemProps) {
  return (
    <Box
      w="34%"
      bg={isActive ? 'secondary' : '_white'}
      borderRight="1px solid"
      borderColor="_lightgray"
      _hover={
        isActive
          ? { cursor: 'pointer' }
          : { cursor: 'pointer', bg: '_lightestgray' }
      }
      borderBottom={isActive ? `2px solid ${theme.colors.primary}` : ''}
      {...rest}
    >
      <HStack
        p={{ base: 2, md: 3 }}
        h="full"
        alignItems="center"
        color={isActive ? 'primary' : '_gray'}
        w="full"
        justify="space-between"
      >
        <Text color="_black" fontWeight="medium" noOfLines={1}>
          {children}
        </Text>

        <Icon as={icon} w="14px" />
      </HStack>
    </Box>
  )
}
