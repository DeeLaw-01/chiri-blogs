import { Divider, VStack } from '@chakra-ui/react'

import Heading from 'ui/primitives/Heading'

import MealplanFilter from './filter-elements/mealplan/mealplan'
import BudgetFilter from './filter-elements/budget'
import ScoreFilter from './filter-elements/score'
import StarsFilter from './filter-elements/stars/stars'
import TypeFilter from './filter-elements/type'
import DistanceFilter from './filter-elements/distance'
import AmenitiesFilter from './filter-elements/amenities'
import SearchFilter from './filter-elements/search'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import DealsFilter from './filter-elements/deals'

export type FilterValue = {
  value: any
  label: any
  count?: number
}

export default function FiltersView() {
  const { data } = useChangeAccommodationAtoms()
  const availableFilters = data?.isLoading ? undefined : data?.filters

  return (
    <VStack alignItems="flex-start" w="full" h="full" position="relative">
      {/* Deals */}
      <Heading as="h5" st="hotel-info.hotel.modal.deals.title" />
      <DealsFilter available={availableFilters?.best_deals} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Stars */}
      <Heading as="h5" st="hotel-info.hotel.modal.stars.title" />
      <StarsFilter available={availableFilters?.stars} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Budget */}
      <Heading as="h5" st="hotel-info.hotel.modal.budget.title" />
      <BudgetFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Mealplan */}
      <Heading as="h5" st="hotel-info.hotel.modal.mealplan.title" />
      <MealplanFilter available={availableFilters?.mealplan} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Score */}
      <Heading as="h5" st="hotel-info.hotel.modal.review.title" />
      <ScoreFilter available={availableFilters?.min_review_score} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Search */}
      <Heading as="h5" st="hotel-info.hotel.modal.search.title" />
      <SearchFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Distance */}
      <Heading as="h5" st="hotel-info.hotel.modal.distance.title" />
      <DistanceFilter available={availableFilters?.distance_to_city_center} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Type */}
      <Heading as="h5" st="hotel-info.hotel.modal.type.accomodation.title" />
      <TypeFilter available={availableFilters?.accomodation_type} />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Amenities */}
      <Heading as="h5" st="hotel-info.hotel.modal.amenities.title" />
      <AmenitiesFilter available={availableFilters?.hotel_facilities} />
      <Divider w="80%" alignSelf="center" py={2} />
    </VStack>
  )
}
