import { useResponsiveSizes } from 'src/contexts/responsive'

import { RangeKeyDict } from 'react-date-range'
import { useState } from 'react'

import { Dates } from '../../../hooks/useSearchAtoms/types/trip.types'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import DatesViewDesktop from './dates-view-desktop'
import DatesViewMobile from './dates-view-mobile'

export default function OnewayDatesView() {
  const { isMobile } = useResponsiveSizes()
  const { onewaySearch } = useSearchAtoms()

  const [dates, setDates] = useState<Dates>({
    windowStart: onewaySearch?.windowStart,
    windowEnd: onewaySearch?.windowEnd,
    flexibleDates: onewaySearch?.flexibleDates,
    exactDates: onewaySearch?.exactDates,
  })

  const handleChange = (ranges: RangeKeyDict) => {
    if (!ranges?.selection) return
    const { startDate, endDate } = ranges.selection

    setDates((prev) => ({
      ...prev,
      windowStart: startDate,
      windowEnd: endDate,
      exactDates: startDate?.toISOString() === endDate?.toISOString(),
      flexibleDates: startDate?.toISOString() !== endDate?.toISOString(),
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
