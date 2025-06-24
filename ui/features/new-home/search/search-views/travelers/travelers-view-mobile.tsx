import { Box } from '@chakra-ui/react'
import { Travelers } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import Heading from 'ui/primitives/Heading'
import ConfirmButton from '../../mobile-search/search-view/confirm-button.tsx'
import { useSearchModalsAtoms } from '../../hooks/useSearchModals'
import PeopleSelector from 'ui/shared/people-selector'
import { getTotalTravellers } from 'ui/features/new-home/utils/getTotalTravelers'

type TravelersViewMobileProps = {
  handleChange: (travelers: keyof Travelers, value: number) => void
  travelers: Travelers
}

export default function TravelersViewMobile({
  handleChange,
  travelers,
}: TravelersViewMobileProps) {
  const { setShowTravelers } = useSearchModalsAtoms()

  const total = getTotalTravellers(
    travelers.n_adults,
    travelers.n_children,
    travelers.n_babies
  )

  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontWeight="normal"
          st="home-page.desktop.pill3.heading"
        />
        <Box px="1" mt={4}>
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
      </Box>
      <ConfirmButton
        searchUpdate={travelers}
        callback={() => setShowTravelers(false)}
      />
    </>
  )
}
