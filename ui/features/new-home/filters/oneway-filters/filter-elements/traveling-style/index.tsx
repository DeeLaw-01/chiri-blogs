import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import CategorySelector from 'ui/shared/category-selector'

import { TravelingStyle as StyleEnum } from 'ui/features/new-home/search/hooks/useSearchAtoms/types/trip.types'
import { TravelingStyle } from './data'

export default function TravelingStyleFilter() {
  const { onewayFilters, setOnewayFilters } = useSearchAtoms()

  const handleSelect = (style: StyleEnum) => {
    setOnewayFilters((prev) => {
      delete prev.travellingStyle
      return { ...prev, ...(style && { travellingStyle: style }) }
    })
  }

  return (
    <CategorySelector
      resetButton
      val={onewayFilters?.travellingStyle}
      options={TravelingStyle}
      setRadioValue={(style) => handleSelect(style as StyleEnum)}
    />
  )
}
