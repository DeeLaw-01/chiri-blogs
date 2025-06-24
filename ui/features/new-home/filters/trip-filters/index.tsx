import Heading from 'ui/primitives/Heading'
import CitiesFilter from './filter-elements/cities'
import { Divider, VStack } from '@chakra-ui/react'
import TravelingStyleFilter from './filter-elements/traveling-style'
import MultiCityFilter from './filter-elements/multi-city'
import SortPackages from './filter-elements/sort-packages'
import AvoidLocationsFilter from './filter-elements/avoid-locations'
import ShowMoreLikeThisPackage from './filter-elements/show-more-like-this'
import StopsFilter from './filter-elements/stops'
import ModeFilter from './filter-elements/mode'

export default function TripFilters() {
  return (
    <VStack alignItems="flex-start" w="full" h="full" position="relative">
      {/* Sort packages */}
      <Heading as="h5" st="home-page.sort.by.title" />
      <SortPackages />
      <Divider w="80%" alignSelf="center" py={2} />
      {/* Number of cities */}
      <Heading as="h5" st="home-page.number.cities.header" />
      <CitiesFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Stops */}
      <Heading as="h5" st="flight-info.filter.max.stops" />
      <StopsFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Modes */}
      <Heading
        as="h5"
        st="flight-info.change.transportation.filter.transport"
      />
      <ModeFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Show more like this */}

      <ShowMoreLikeThisPackage />

      {/* Avoid locations */}
      <Heading as="h5" st="home-page.trip.avoid.header" />
      <AvoidLocationsFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Traveling Style */}
      <Heading as="h5" st="home-page.step3.radiogroup.header" />
      <TravelingStyleFilter />
      <Divider w="80%" alignSelf="center" py={2} />

      {/* Type of trip */}
      <Heading as="h5" st="home-page.city.type.header" />
      <MultiCityFilter />
      <Divider w="80%" alignSelf="center" py={2} />
    </VStack>
  )
}
