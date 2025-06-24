import { Divider, VStack } from '@chakra-ui/react'

import Heading from 'ui/primitives/Heading'

import CarriersFilter from './filter-elements/carriers'
import DepartureFilter from './filter-elements/departure'
import ArrivalFilter from './filter-elements/arrival'
import { Transport } from 'src/shared-types/transport.type'
import StopsFilter from './filter-elements/stops'
import ModeFilter from './filter-elements/mode'

export type FilterValue = {
  value: any
  label: any
}

type FiltersViewProps = {
  transport: Transport
}

export default function FiltersView({ transport }: FiltersViewProps) {
  return (
    <VStack alignItems="flex-start" w="full" h="full">
      {/* Stops */}
      <Heading as="h5" st="flight-info.filter.max.stops" />
      <StopsFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Carriers */}
      <Heading as="h5" st="flight-info.change.transportation.filter.carriers" />
      <CarriersFilter transport={transport} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Transport mode */}
      <Heading
        as="h5"
        st="flight-info.change.transportation.filter.transport"
      />
      <ModeFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Departure station */}
      <Heading
        as="h5"
        st="flight-info.change.transportation.filter.departure"
      />
      <DepartureFilter transport={transport} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Arrival station */}
      <Heading as="h5" st="flight-info.change.transportation.filter.arrival" />
      <ArrivalFilter transport={transport} />
      <Divider w="80%" alignSelf="center" py={2} />
    </VStack>
  )
}
