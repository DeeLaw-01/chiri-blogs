import { useChangeAccommodationAtoms } from '../../../useChangeAccommodationAtoms'
import { SimpleGrid } from '@chakra-ui/react'
import { MealPlanItem, MealPlanItemType } from './mealplan-item'
import { data } from './data'
import { mapCountToFilters } from 'ui/features/change-accommodation/utils/mapCountToFilters'

export default function MealplanFilter({ available }) {
  const { filters } = useChangeAccommodationAtoms()

  return (
    <SimpleGrid minChildWidth="70px" spacing="2" w="full">
      {mapCountToFilters(available, data).map((meal, idx) => {
        return (
          <MealPlanItem
            key={idx}
            item={meal as MealPlanItemType}
            isSelected={filters.mealplan === meal.value}
          />
        )
      })}
    </SimpleGrid>
  )
}
