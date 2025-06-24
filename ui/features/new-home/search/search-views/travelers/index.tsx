import { useResponsiveSizes } from 'src/contexts/responsive'
import { useSearchAtoms } from '../../hooks/useSearchAtoms/useSearchAtoms'
import { useState } from 'react'
import { Travelers } from '../../hooks/useSearchAtoms/types/trip.types'
import TravelersViewMobile from './travelers-view-mobile'
import TravelersViewDesktop from './travelers-view-desktop'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'

export default function TravelersView() {
  const { search } = useSearchAtoms()
  const { state } = useHomeAtoms()
  const stateSearch = getStateSearch(state, search)
  const { isMobile } = useResponsiveSizes()
  const [travelers, setTravelers] = useState<Travelers>({
    n_adults: stateSearch?.n_adults,
    n_babies: stateSearch?.n_babies,
    n_children: stateSearch?.n_children,
  })

  const handleChange = (type: keyof Travelers, value: number) => {
    setTravelers((prev) => ({ ...prev, [type]: value }))
  }

  return (
    <>
      {isMobile && (
        <TravelersViewMobile
          travelers={travelers}
          handleChange={handleChange}
        />
      )}
      {!isMobile && (
        <TravelersViewDesktop
          travelers={travelers}
          handleChange={handleChange}
        />
      )}
    </>
  )
}
