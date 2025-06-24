import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import CategorySelector from 'ui/shared/category-selector'
import { MultiCityOptions } from './data'

export default function MultiCityFilter() {
  const { tripFilters, setTripFilters } = useSearchAtoms()

  const handleSelect = (style: boolean) => {
    setTripFilters((prev) => {
      delete prev.multiCity
      return { ...prev, ...(style && { multiCity: style }) }
    })
  }

  return (
    <CategorySelector
      resetButton
      val={tripFilters?.multiCity?.toString()}
      options={MultiCityOptions}
      setRadioValue={(style) => handleSelect(style as boolean)}
    />
  )
}
