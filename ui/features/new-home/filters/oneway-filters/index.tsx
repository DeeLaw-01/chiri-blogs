import { VStack } from '@chakra-ui/react'
import TransportFilter from './transport-filters'
import TripFilters from './trip-filters'

export default function OnewayFilters() {
  return (
    <VStack alignItems="flex-start" w="full" h="full" position="relative">
      <TripFilters />
      <TransportFilter />
    </VStack>
  )
}
