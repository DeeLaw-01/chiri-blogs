import { useState } from 'react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import RoomCard from './room-card/room-card'
import RoomAlerts from './alerts'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import RoomsLoading from './loading'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'

const TRIM_DEFAULT_LENGTH = 3

type AlternativeRoomsProps = {
  accommodation: HotelDetails
}

export default function AlternativeRooms({
  accommodation,
}: AlternativeRoomsProps) {
  const { roomsData, isRoomsDataLoading } = useAccommodationDetailsAtoms()
  const [showAllRooms, setShowAllRooms] = useState<boolean>(false)
  const AVAILABLE_ROOMS = roomsData?.all_rooms_available

  if (isRoomsDataLoading) return <RoomsLoading />

  return (
    <>
      <RoomAlerts accommodation={accommodation} />

      {AVAILABLE_ROOMS?.map((room, idx) => {
        if (!showAllRooms && idx > TRIM_DEFAULT_LENGTH - 1) return
        return <RoomCard key={idx} mb="8" idx={idx} room={room} />
      })}
      {AVAILABLE_ROOMS && AVAILABLE_ROOMS?.length > TRIM_DEFAULT_LENGTH && (
        <Button
          id="view-all-available-rooms"
          fontWeight="normal"
          w={'full'}
          secondary
          fontSize="sm"
          onClick={() => setShowAllRooms(!showAllRooms)}
        >
          <Text st={showAllRooms ? 'common.view.less' : 'common.view.more'} />
          {!showAllRooms && (
            <Text pl="1">({AVAILABLE_ROOMS.length - TRIM_DEFAULT_LENGTH})</Text>
          )}
        </Button>
      )}
    </>
  )
}
