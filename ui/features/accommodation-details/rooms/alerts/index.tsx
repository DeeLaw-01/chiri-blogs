import { HotelDetails } from 'src/shared-types/hotel-details.type'
import NoRoomsSelectedAlert from './no-rooms-selected-alert'
import RoomsSoldOutAlert from './rooms-sold-out-alert'

type RoomAlertsProps = {
  accommodation: HotelDetails
}

export default function RoomAlerts({ accommodation }: RoomAlertsProps) {
  return (
    <>
      <RoomsSoldOutAlert accommodation={accommodation} />
      <NoRoomsSelectedAlert />
    </>
  )
}
