import { VStack } from '@chakra-ui/react'
import DepartureInput from '../trip-search/inputs/departure'
import ArrivalInput from '../trip-search/inputs/arrival'
import DatesInput from '../trip-search/inputs/dates'
import TravelersInput from '../trip-search/inputs/travelers'
import TripSearchTip from '../trip-search/trip-search-tip'

export default function RoundTripSearch() {
  return (
    <VStack mt="4" w="full" gap="1rem">
      <DepartureInput />
      <ArrivalInput />
      <DatesInput />
      <TravelersInput />
      <TripSearchTip />
    </VStack>
  )
}
