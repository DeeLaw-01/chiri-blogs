import { VStack } from '@chakra-ui/react'
import DepartureInput from './inputs/departure'
import ArrivalInput from './inputs/arrival'
import DatesInput from './inputs/dates'
import TravelersInput from './inputs/travelers'

export default function OneWaySearch() {
  return (
    <VStack mt="4" w="full" gap="1rem">
      <DepartureInput />
      <ArrivalInput />
      <DatesInput />
      <TravelersInput />
    </VStack>
  )
}
