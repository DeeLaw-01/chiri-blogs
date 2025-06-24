import { useResponsiveSizes } from 'src/contexts/responsive'

import { RangeKeyDict } from 'react-date-range'
import { useState } from 'react'
import DatesViewMobile from './dates-view-mobile'
import DatesViewDesktop from './dates-view-desktop'
import { Dates } from '../../../hooks/useSearchAtoms/types/trip.types'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'

export default function TripsDatesView() {
  const { isMobile } = useResponsiveSizes()
  const { tripSearch } = useSearchAtoms()

  const [dates, setDates] = useState<Dates>({
    windowStart: tripSearch?.windowStart,
    windowEnd: tripSearch?.windowEnd,
    flexibleDates: tripSearch?.flexibleDates,
    exactDates: tripSearch?.exactDates,
    stayLength: tripSearch?.stayLength,
  })

  const handleChange = (ranges: RangeKeyDict) => {
    if (!ranges?.selection) return

    setDates((prev) => ({
      ...prev,
      windowStart: ranges.selection.startDate,
      windowEnd: ranges.selection.endDate,
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
