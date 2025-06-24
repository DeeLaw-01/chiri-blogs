import { useResponsiveSizes } from 'src/contexts/responsive'
import SelectButtonDesktop from './select-button-desktop'
import SelectButtonMobile from './select-button-mobile'

import useUrlState from 'src/hooks/useUrlState'
import useCurrency from 'src/hooks/useCurrency'
import useUpdateTrip from 'ui/features/trip-details/hooks/useUpdateTrip'
import { useToast } from '@chakra-ui/react'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'

import type { HotelDetails } from 'src/shared-types/hotel-details.type'
import getFilteredObject from 'src/utils/getFilteredObject'

type AccommodationSelectButtonProps = {
  hotel: HotelDetails
  prefetch?: (hotel: HotelDetails) => boolean
  callback?: (hotel: HotelDetails) => void
}

export default function AccommodationSelectButton({
  hotel,
  prefetch,
  callback,
}: AccommodationSelectButtonProps) {
  const toast = useToast()
  const { setUrlState } = useUrlState('sessionId')
  const { roomsData, selectedRooms, isRoomsDataLoading } =
    useAccommodationDetailsAtoms()
  const { getConvertedCurrency } = useCurrency()
  const { isMobile } = useResponsiveSizes()
  const { updateTripHandler, isLoading } = useUpdateTrip()

  const noSelectedOrAssignedRooms =
    selectedRooms.length === 0 && roomsData?.main_rooms?.length === 0

  const disabledBtnStyles = noSelectedOrAssignedRooms
    ? {
        opacity: 0.4,
        cursor: 'not-allowed',
      }
    : {}

  const handleSelect = () => {
    if (noSelectedOrAssignedRooms) handleScrollToRoomsSection()
    else if (!prefetch || prefetch(hotel)) fetchChangeHotelQuery()
  }

  const handleScrollToRoomsSection = () => {
    const section = document.getElementById('hotel-alternative-rooms')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
    return
  }

  const getRoomsPayload = () => {
    return selectedRooms.map((room) => getFilteredObject(room, ['name']))
  }

  const fetchChangeHotelQuery = () => {
    updateTripHandler(
      {
        trip_id: hotel.trip_id,
        key: hotel.booking_id,
        position: hotel.position,
        type: 'accomodation',
        add: true,
        purchase_id: hotel.purchase_id,
        extra_infos: {
          chosen_rooms: getRoomsPayload(),
        },
      },
      callbackChangeHotelQuerySuccess,
      callbackChangeHotelQueryError
    )
  }

  const callbackChangeHotelQuerySuccess = (data): void => {
    if (data?.new_hotel) setUrlState(data.session_id)
    if (callback) callback(data)
  }

  const callbackChangeHotelQueryError = (data): void => {
    toast({
      title: data?.msg || 'An error occurred',
      status: 'warning',
      duration: 4000,
      position: isMobile ? 'top' : 'bottom',
    })
  }

  const getTotalPrice = () => {
    let price = hotel.price_per_night * hotel.nights_at
    if (selectedRooms.length > 0)
      price = selectedRooms.reduce((curr, r) => curr + r.price * r.amount, 0)
    return getConvertedCurrency(price).toString()
  }

  if (isMobile)
    return (
      <SelectButtonMobile
        hotel={hotel}
        totalPrice={getTotalPrice()}
        onClick={handleSelect}
        style={disabledBtnStyles}
        isLoading={isLoading || isRoomsDataLoading}
      />
    )

  return (
    <SelectButtonDesktop
      hotel={hotel}
      totalPrice={getTotalPrice()}
      onClick={handleSelect}
      style={disabledBtnStyles}
      isLoading={isLoading || isRoomsDataLoading}
    />
  )
}
