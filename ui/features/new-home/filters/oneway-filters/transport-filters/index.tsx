import { Divider } from '@chakra-ui/react'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import { useOnewayAtoms } from 'ui/features/new-home/content/oneway/useOnewayAtoms'
import Heading from 'ui/primitives/Heading'
import ArrivalStationsFilter from '../filter-elements/arrival-stations'
import CarriersFilter from '../filter-elements/carriers'
import DepartureStationsFilter from '../filter-elements/departure-stations'
import ModeFilter from '../filter-elements/mode'
import StopsFilter from '../filter-elements/stops'
import SortOneway from '../filter-elements/sort-oneway'

export default function TransportFilter() {
  const { searchType } = useOnewayAtoms()

  if (searchType !== OnewayResponseType.ONEWAY) return <></>

  return (
    <>
      <Heading as="h5" st="home-page.sort.by.title" />
      <SortOneway />
      <Divider w="80%" alignSelf="center" py={2} />
      <Heading as="h5" st="flight-info.filter.max.stops" />
      <StopsFilter />
      <Divider w="80%" alignSelf="center" py={2} />
      <Heading
        as="h5"
        st="flight-info.change.transportation.filter.transport"
      />
      <ModeFilter />
      <Divider w="80%" alignSelf="center" py={2} />
      <Heading as="h5" st="flight-info.change.transportation.filter.carriers" />
      <CarriersFilter />
      <Divider w="80%" alignSelf="center" py={2} />
      <Heading
        as="h5"
        st="flight-info.change.transportation.filter.departure"
      />
      <DepartureStationsFilter />
      <Divider w="80%" alignSelf="center" py={2} />
      <Heading as="h5" st="flight-info.change.transportation.filter.arrival" />
      <ArrivalStationsFilter />
      <Divider w="80%" alignSelf="center" py={2} />
    </>
  )
}
