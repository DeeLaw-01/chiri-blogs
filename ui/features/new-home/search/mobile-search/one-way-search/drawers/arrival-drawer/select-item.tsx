import { Box, HStack, Icon, VStack, StackProps } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import MapPinIcon from '@/icons/map-pin.svg'
import PlusIcon from '@/icons/shared/plus.svg'
import CrossIcon from '@/icons/shared/x.svg'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'

type SelectItemProps = {
  loc: LocationResult
  isSelected?: boolean
  handleSelect: (v: LocationResult) => void
} & StackProps

export default function SelectItem({
  loc,
  isSelected,
  handleSelect,
  ...rest
}: SelectItemProps) {
  return (
    <HStack
      borderBottom="1px"
      textAlign="left"
      borderColor="_lightgray"
      w="full"
      py={3}
      minH="4rem"
      _hover={{ cursor: 'pointer' }}
      {...rest}
    >
      <Box minW="5" color="primary">
        <Icon as={MapPinIcon} stroke="_black" height="16px" width="16px" />
      </Box>
      <Box w="full" noOfLines={1}>
        <VStack alignItems={'flex-start'} gap="0">
          <Text>{loc.value}</Text>
          <Text color="_gray" fontSize="xs">
            {loc.country}
          </Text>
        </VStack>
      </Box>
      <VStack
        bg={isSelected ? 'primary' : 'secondary'}
        borderRadius="lg"
        w="2rem"
        aspectRatio={1 / 1}
        justify={'space-around'}
        onClick={(e) => {
          e.stopPropagation()
          handleSelect(loc)
        }}
      >
        <Icon
          as={isSelected ? CrossIcon : PlusIcon}
          stroke={isSelected ? 'secondary' : 'primary'}
          height="16px"
          width="16px"
        />
      </VStack>
    </HStack>
  )
}
