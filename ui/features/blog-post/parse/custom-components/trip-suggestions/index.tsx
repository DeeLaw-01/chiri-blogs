'use client'

import { TripSuggestionsResponse } from 'src/api/queries/get/blogs/tripSuggestionsQuery/suggestion.type'
import getTripSuggestionsQuery from 'src/api/queries/get/blogs/tripSuggestionsQuery'
import { useFetch } from 'src/api/useFetch'
import CommonCard from 'ui/features/common-card'
import HorizontalSlider from 'ui/shared/horizontal-slider'
import CommonCardSkeleton from 'ui/features/common-card/skeleton-loading'
import { Box } from '@chakra-ui/react'

type TripSuggestionsProps = {
  query?: string
}

export default function TripSuggestions({ query }: TripSuggestionsProps) {
  const {
    data: trips,
    error,
    isLoading,
  } = useFetch<TripSuggestionsResponse>(getTripSuggestionsQuery(query ?? ''))

  if (error) return <></>

  // TODO: Redesign this amd fix the ts!
  return (
    <HorizontalSlider>
      {isLoading &&
        [...Array(3)].map((_, idx) => {
          return (
            <Box w="full" key={idx}>
              <CommonCardSkeleton />
            </Box>
          )
        })}
      {trips?.map((trip) => {
        return <CommonCard key={trip.id} trip={trip} />
      })}
    </HorizontalSlider>
  )
}
