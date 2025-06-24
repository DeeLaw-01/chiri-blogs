import { Wrap } from '@chakra-ui/react'
import {
  Filters,
  useChangeAccommodationAtoms,
} from '../useChangeAccommodationAtoms'
import getFiltersCount from '../utils/getFiltersCount'
import { data as StarsData } from './filter-elements/stars/data'
import { data as MealPlanData } from './filter-elements/mealplan/data'
import { data as ScoreData } from './filter-elements/score'
import { data as AmenitiesData } from './filter-elements/amenities'
import { data as DistanceData } from './filter-elements/distance'
import { data as TypeData } from './filter-elements/type'
import { data as BestDealsData } from './filter-elements/deals'
import ActiveFilterButton from 'ui/shared/active-filter-button'

export default function ActiveFilters() {
  const { filters, setFilters } = useChangeAccommodationAtoms()

  if (getFiltersCount(filters) === 0) return <></>

  const hasValue = (key: keyof Filters) => {
    const value = filters[key]
    return Array.isArray(value) ? value.length > 0 : !!value
  }

  const getLabels = (key: keyof Filters, value: any) => {
    switch (key) {
      case 'stars':
        return StarsData.filter((d) => value.includes(d.value))
      case 'mealplan':
        return MealPlanData.filter((d) => d.value === value)
      case 'score':
        return ScoreData.filter((d) => d.value === value)
      case 'amenities':
        return AmenitiesData.filter((d) => value.includes(d.value))
      case 'search':
        return [{ label: value }]
      case 'distance':
        return DistanceData.filter((d) => d.value === value)
      case 'type':
        return TypeData.filter((d) => d.value === value)
      case 'best_deals':
        return BestDealsData
    }
  }

  const removeFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(prev[key])
        ? prev[key].filter((v) => v !== value)
        : '',
    }))
  }

  return (
    <Wrap spacing={2} mb={2}>
      {(Object.keys(filters) as (keyof Filters)[]).map((key) => {
        if (!hasValue(key)) return
        return getLabels(key, filters[key])?.map((item: any, idx: number) => (
          <ActiveFilterButton
            id={item?.value}
            key={idx}
            label={item?.label}
            onClick={() => removeFilter(key, item.value)}
          />
        ))
      })}
    </Wrap>
  )
}
