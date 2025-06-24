import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import CategorySelector from 'ui/shared/category-selector'
import { TravelingStyle } from './data'
import { TravelingStyle as StyleEnum } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'

export default function TravelingStyleFilter() {
  const { tripFilters, setTripFilters } = useSearchAtoms()

  const handleSelect = (style: StyleEnum) => {
    setTripFilters((prev) => {
      delete prev.travellingStyle
      return { ...prev, ...(style && { travellingStyle: style }) }
    })
  }

  return (
    <CategorySelector
      resetButton
      val={tripFilters?.travellingStyle}
      options={TravelingStyle}
      setRadioValue={(style) => handleSelect(style as StyleEnum)}
    />
  )
}
