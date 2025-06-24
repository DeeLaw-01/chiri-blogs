import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import CategorySelector from 'ui/shared/category-selector'
import { Cities } from './data'

export default function CitiesFilter() {
  const { tripFilters, setTripFilters } = useSearchAtoms()

  const handleSelect = (city: number) => {
    setTripFilters((prev) => {
      delete prev.n_cities
      return { ...prev, ...(city && { n_cities: city }) }
    })
  }

  return (
    <CategorySelector
      resetButton
      val={tripFilters?.n_cities?.toString()}
      options={Cities}
      setRadioValue={(city) => handleSelect(city as number)}
    />
  )
}
