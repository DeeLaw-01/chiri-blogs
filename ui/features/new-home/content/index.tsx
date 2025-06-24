import Container from 'ui/primitives/Container'
import { useHomeAtoms } from '../hooks/useHomeAtoms'
import { HomeState } from '../hooks/useHomeAtoms/types'
import OnewayContent from './oneway'
import AccommodationContent from './accommodation'
import TripContent from './trip'

export default function Content() {
  const { state } = useHomeAtoms()

  // TODO: Probably should have a shared loading state until home-state is defined
  // For a few ms the content is blank until the home-state is set.
  // At the moment we just use the tripcontent-loading when it's undefined.
  return (
    <Container minH="80vh" mt={{ base: 4, md: 6 }} mb={6}>
      {state === HomeState.ONEWAY && <OnewayContent />}
      {state === HomeState.ACCOMMODATION && <AccommodationContent />}
      {(!state || state === HomeState.TRIP) && <TripContent />}
    </Container>
  )
}
