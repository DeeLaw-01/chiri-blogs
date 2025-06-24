import { Box, BoxProps, HStack, Image } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import { CategoryItem as CategoryItemType } from './types'
import Text from 'ui/primitives/Text'
import { MotionBox } from 'ui/primitives/Motion'

type CategoryItemProps = {
  item: CategoryItemType
  isActive: boolean
} & BoxProps

export default function CategoryItem({
  item,
  isActive,
  ...rest
}: CategoryItemProps) {
  return (
    <Box pos="relative" role="group" w={'max'} {...rest}>
      <Button
        id={item.category}
        variant={'unstyled'}
        minH="fit-content"
        _groupHover={{ color: 'primary' }}
        color={isActive ? 'primary' : '_gray'}
        fontWeight="normal"
      >
        <HStack align="center">
          <Image
            src={item.imageSrc}
            alt={item.label}
            boxSize="1.5rem"
            _groupHover={{ filter: 'brightness(1.1)' }}
          />
          <Text fontSize="sm" st={item.label} />
        </HStack>
      </Button>

      {isActive && (
        <MotionBox h="2px" w="full" bg="primary" layoutId="underline" ml="1" />
      )}
    </Box>
  )
}
