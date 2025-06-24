import { Divider } from '@chakra-ui/react'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'
import { useOnewayAtoms } from 'ui/features/new-home/content/oneway/useOnewayAtoms'
import Heading from 'ui/primitives/Heading'
import TravelingStyleFilter from '../filter-elements/traveling-style'
import AvoidLocationsFilter from '../filter-elements/avoid-locations'

export default function TripFilters() {
  const { searchType } = useOnewayAtoms()

  if (searchType !== OnewayResponseType.TRIP) return <></>

  return (
    <>
      <Heading as="h5" st="home-page.step3.radiogroup.header" />
      <TravelingStyleFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      <Heading as="h5" st="home-page.trip.avoid.header" />
      <AvoidLocationsFilter />
      <Divider w="80%" alignSelf="center" py={2} />
    </>
  )
}
