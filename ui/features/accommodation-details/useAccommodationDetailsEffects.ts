import { useEffect } from 'react'
import { useAccommodationDetailsAtoms } from './useAccommodationDetailsAtoms'
import { useFetch } from 'src/api/useFetch'
import { useSearchParams } from 'next/navigation'
import { AlternativeRoomsResponse } from 'src/api/queries/post/accommodation-rooms/rooms.type'
import getAccommodationRoomsQuery from 'src/api/queries/post/accommodation-rooms/getAccommodationRoomsQuery'

import type { HotelDetails } from 'src/shared-types/hotel-details.type'

export const useAccommodationDetailsEffects = (hotel: HotelDetails) => {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { setRoomsData, setIsRoomsDataLoading } = useAccommodationDetailsAtoms()

  const { data: roomsData, isLoading: isRoomsDataLoading } =
    useFetch<AlternativeRoomsResponse>(
      getAccommodationRoomsQuery(hotel, sessionId)
    )

  useEffect(() => {
    setRoomsData(roomsData)
  }, [roomsData])

  useEffect(() => {
    setIsRoomsDataLoading(isRoomsDataLoading)
  }, [isRoomsDataLoading])

  return {}
}
