import { Box, HStack, Icon, VStack, StackProps } from '@chakra-ui/react'
import { chakraComponents } from 'chakra-react-select'

import Text from 'ui/primitives/Text'
import MapPinIcon from '@/icons/map-pin.svg'
import PlusIcon from '@/icons/shared/plus.svg'
import { PackageDetails } from 'src/shared-types/package-details.type'

type SelectItemProps = {
  trip: PackageDetails
} & StackProps

export function SelectItem({ trip, ...rest }: SelectItemProps) {
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
      <Box w="full">
        <VStack alignItems={'flex-start'} gap="0">
          <Text>{trip.title}</Text>
          <Text color="_gray" fontSize="xs">
            {trip.locations.join(', ')}
          </Text>
        </VStack>
      </Box>
      <VStack
        bg="secondary"
        borderRadius="lg"
        w="2rem"
        aspectRatio={1 / 1}
        justify={'space-around'}
      >
        <Icon as={PlusIcon} stroke={'primary'} height="16px" width="16px" />
      </VStack>
    </HStack>
  )
}

export default function Option({ data, ...props }: { data: PackageDetails }) {
  return (
    // @ts-ignore
    <chakraComponents.Option {...props}>
      <SelectItem trip={data} key={data.id} />
    </chakraComponents.Option>
  )
}
