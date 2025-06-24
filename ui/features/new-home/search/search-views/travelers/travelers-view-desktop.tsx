import PeopleSelector from 'ui/shared/people-selector'
import { Travelers } from '../../hooks/useSearchAtoms/types/trip.types'
import { getTotalTravellers } from 'ui/features/new-home/utils/getTotalTravelers'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'
import { useSearchAtoms } from '../../hooks/useSearchAtoms/useSearchAtoms'
import useSearch from '../../hooks/useSearch'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'

type DatesViewDesktopProps = {
  handleChange: (type: keyof Travelers, value: number) => void
  travelers: Travelers
}

export default function TravlersViewDesktop({
  travelers,
  handleChange,
}: DatesViewDesktopProps) {
  const { state } = useHomeAtoms()
  const { updateSearchState } = useSearch()
  const { search } = useSearchAtoms()
  const total = getTotalTravellers(
    travelers.n_adults,
    travelers.n_children,
    travelers.n_babies
  )

  useEffect(() => {
    const stateSearch = getStateSearch(state, search)
    updateSearchState({ ...stateSearch, ...travelers })
  }, [travelers])

  return (
    <Box px={2} py={4}>
      <PeopleSelector
        babies={travelers.n_babies ?? 0}
        children={travelers.n_children ?? 0}
        adults={travelers.n_adults ?? 1}
        totalPeople={total}
        setTotalPeople={() => {}}
        setNoOfAdults={(v) => handleChange('n_adults', v)}
        setNoOfChildren={(v) => handleChange('n_children', v)}
        setNoOfBabies={(v) => handleChange('n_babies', v)}
      />
    </Box>
  )
}
