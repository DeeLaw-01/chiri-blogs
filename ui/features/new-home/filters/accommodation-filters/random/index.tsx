import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import CategorySelector from 'ui/shared/category-selector'
import { Cities } from './data'

export default function RandomFilter() {
  const { accommodationFilters, setAccommodationFilters } = useSearchAtoms()

  const handleSelect = (city: number) => {
    setAccommodationFilters((prev) => {
      delete prev.testFilterAccommodation
      return { ...prev, ...(city && { testFilterAccommodation: city }) }
    })
  }

  return (
    <CategorySelector
      resetButton
      val={accommodationFilters?.testFilterAccommodation?.toString()}
      options={Cities}
      setRadioValue={(city) => handleSelect(city as number)}
    />
  )
}
