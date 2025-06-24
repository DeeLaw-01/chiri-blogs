import { useFetchInfinite } from 'src/api/useFetchInfinite'
import { useSearchParams } from 'next/navigation'
import changeAccommodationQuery from 'src/api/queries/get/change-accommodation/changeAccommodationQuery'
import { useChangeAccommodationAtoms } from './useChangeAccommodationAtoms'
import { useEffect } from 'react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { ChangeAccommodationResponseType } from 'src/api/queries/get/change-accommodation/types'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

export const useChangeAccommodationEffects = (acc: HotelDetails) => {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { isMobile } = useResponsiveSizes()
  const { filters, setGrid, setData, sortType } = useChangeAccommodationAtoms()

  const {
    data: data,
    isLoading: accommodationLoading,
    error: accommodationError,
    isValidating,
    size,
    setSize,
  } = useFetchInfinite<ChangeAccommodationResponseType>(
    (idx) => {
      return changeAccommodationQuery(
        acc.trip_id,
        acc.position,
        sessionId ?? '',
        filters,
        sortType,
        idx,
        acc.purchase_id
      )
    },
    { revalidateFirstPage: false }
  )

  // We use useFetchInfinite instead of the default useSWR to allow pagination/load more.
  // This means we get data as an array of responses, instead of a single response.
  // Here we use the newest response, and add hotel suggestions from the previous ones.
  const accommodation = {
    ...(data?.[data.length - 1] || {}),
    new_hotel: data?.flatMap((item) => item.new_hotel) || [],
  }

  useEffect(() => {
    // We want to force grid-layout on mobile, with no way to change it.
    // Therefore, we manually reset it to grid if the user screen-size changes.
    if (isMobile) setGrid(true)
  }, [isMobile])

  useEffect(() => {
    setData({
      accommodations: accommodation.new_hotel,
      filters: accommodation.number_of_filters,
      hasMoreHotels: accommodation.has_more_hotels,
      isLoading: accommodationLoading,
      error: accommodationError,
      isValidating: isValidating,
    })
  }, [data, accommodationLoading, accommodationError, isValidating])

  return {
    setSize,
    size,
  }
}
