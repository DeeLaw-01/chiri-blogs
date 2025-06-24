import OptionsButtons from '../../options-buttons'
import { HStack, StackProps } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationSortOptionsProps = {
  accommodation: HotelDetails
} & StackProps

export default function ChangeAccommodationSortOptions({
  accommodation,
  ...rest
}: ChangeAccommodationSortOptionsProps) {
  if (!accommodation) return <></>
  return (
    <HStack w="full" justify="center" {...rest}>
      <HStack
        border="1px solid"
        borderColor="_lightgray"
        borderRadius="md"
        w="full"
        mb={{ base: 2, md: 4 }}
        justify="space-evenly"
        fontSize={{ base: 'xs', md: 'sm' }}
        overflow="hidden"
        gap="0"
        alignItems="stretch"
      >
        <OptionsButtons />
      </HStack>
    </HStack>
  )
}
