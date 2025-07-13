import { useResponsiveSizes } from 'src/contexts/responsive'

import { RangeKeyDict } from 'react-date-range'
import { useState } from 'react'
import DatesViewMobile from './dates-view-mobile'
import DatesViewDesktop from './dates-view-desktop'
import { Dates } from '../../../hooks/useSearchAtoms/types/trip.types'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'

export default function TripsDatesView () {
  const { isMobile } = useResponsiveSizes()
  const { search } = useSearchAtoms()
  const { state } = useHomeAtoms()
  const currentSearch = getStateSearch(state, search)

  const [dates, setDates] = useState<Dates>({
    windowStart: currentSearch?.windowStart,
    windowEnd: currentSearch?.windowEnd,
    flexibleDates: currentSearch?.flexibleDates,
    exactDates: currentSearch?.exactDates,
    stayLength: currentSearch?.stayLength
  })

  const handleChange = (ranges: RangeKeyDict) => {
    if (!ranges?.selection) return

    setDates(prev => ({
      ...prev,
      windowStart: ranges.selection.startDate,
      windowEnd: ranges.selection.endDate
    }))
  }

  return (
    <>
      {isMobile && (
        <DatesViewMobile
          dates={dates}
          setDates={setDates}
          handleChange={handleChange}
        />
      )}
      {!isMobile && (
        <DatesViewDesktop
          dates={dates}
          setDates={setDates}
          handleChange={handleChange}
        />
      )}
    </>
  )
}
