import { Box, HStack, Icon, VStack, StackProps } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import MapPinIcon from '@/icons/map-pin.svg'
import TickIcon from '@/icons/shared/tick-icon.svg'
import {
  LocationResult,
  Location,
} from 'src/api/queries/get/locationQuery/location.type'

type SelectItemProps = {
  loc: LocationResult | Location
  isSelected?: boolean
} & StackProps

export default function SelectItem({
  loc,
  isSelected,
  ...rest
}: SelectItemProps) {
  return (
    <HStack
      borderBottom="1px"
      textAlign="left"
      borderColor="_lightgray"
      w="full"
      py={3}
      _hover={{ cursor: 'pointer' }}
      {...rest}
    >
      <Box minW="5" color="primary">
        {isSelected && <TickIcon height="15" width="15" />}
      </Box>
      <Box w="full">
        <VStack alignItems={'flex-start'} gap="0">
          <Text>{loc.value}</Text>
          <Text color="_gray" fontSize="xs">
            {loc.country}
          </Text>
        </VStack>
      </Box>
      <Box>
        <Icon as={MapPinIcon} stroke="_black" height="16px" width="16px" />
      </Box>
    </HStack>
  )
}
