import { HStack, Icon, VStack, StackProps } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import PlusIcon from '@/icons/shared/plus.svg'
import CrossIcon from '@/icons/shared/x.svg'
import { LocationResult } from 'src/api/queries/get/locationQuery/location.type'
import getLocationIcon from 'ui/features/new-home/utils/search/getLocationIcon'

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
      <HStack flex="1" gap={3} alignItems="center">
        <Icon as={getLocationIcon(loc.loc_type)} height="16px" />

        <VStack alignItems={'flex-start'} gap="0">
          <Text>{loc.value}</Text>
          {loc.country && (
            <Text color="_gray" fontSize="xs">
              {loc.country}
            </Text>
          )}
        </VStack>
      </HStack>
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
