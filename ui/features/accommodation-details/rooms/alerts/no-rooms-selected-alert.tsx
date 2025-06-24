import { Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'
import { useAccommodationDetailsAtoms } from '../../useAccommodationDetailsAtoms'

export default function NoRoomsSelectedAlert() {
  const { roomsData, selectedRooms } = useAccommodationDetailsAtoms()

  if (roomsData?.all_rooms_available.length === 0) return <></>

  if (selectedRooms.length || roomsData?.main_rooms?.length) return <></>

  return (
    <Alert warning icon mb="2">
      <Box>
        <Text
          fontWeight="medium"
          fontSize="sm"
          st="new-hotel-page.no.rooms.selected.heading"
        />

        <Text
          fontSize={{ base: 'xs', md: 'sm' }}
          mr="40px"
          st="new-hotel-page.no.rooms.selected.description"
        />
      </Box>
    </Alert>
  )
}
