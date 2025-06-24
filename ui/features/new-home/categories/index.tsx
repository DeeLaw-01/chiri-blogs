import Container from 'ui/primitives/Container'

import { HStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import FiltersButton from '../components/filters-button'
import StateSelect from '../components/state-select/desktop-state-select'
import usePackagesSort from '../content/trip/usePackageSorting'
import { useTripAtoms } from '../content/trip/useTripAtoms'
import { useHomeAtoms } from '../hooks/useHomeAtoms'
import { HomeState } from '../hooks/useHomeAtoms/types'
import { TripCategories } from './trip-categories'
import OnewayNavbar from './oneway-back'

export default function Categories() {
  const { isDesktop } = useResponsiveSizes()
  const { trips, setTrips, sortType } = useTripAtoms()
  const { sort } = usePackagesSort(trips, setTrips)
  const { state } = useHomeAtoms()

  useEffect(() => {
    if (sortType && trips?.length) sort(sortType)
  }, [sortType, trips?.length])

  return (
    <Container mt={{ base: 2, md: 8 }}>
      <HStack
        gap={{ base: 4, md: '2rem' }}
        overflowX={{ base: 'auto', md: 'unset' }}
        justify={{ base: 'initial', md: 'space-between' }}
      >
        <HStack>
          {state === HomeState.ONEWAY && <OnewayNavbar />}
          {state && <StateSelect />}
        </HStack>
        {state === HomeState.TRIP && <TripCategories />}

        {isDesktop && <FiltersButton />}
      </HStack>
    </Container>
  )
}
