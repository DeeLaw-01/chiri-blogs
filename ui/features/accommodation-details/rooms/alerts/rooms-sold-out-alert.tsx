import { Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'
import Button from 'ui/primitives/Button'
import Trans from 'ui/shared/trans'
import { useTripDetailsAtoms } from 'ui/features/trip-details/useTripDetailsAtoms'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useAccommodationDetailsAtoms } from '../../useAccommodationDetailsAtoms'

export default function RoomsSoldOutAlert({
  accommodation,
}: {
  accommodation: HotelDetails
}) {
  const { roomsData } = useAccommodationDetailsAtoms()
  const { setShowChangeAccommodation, setShowHotelDetails } =
    useTripDetailsAtoms()

  const handleChangeAccommodation = () => {
    setShowHotelDetails({})
    setShowChangeAccommodation({ hotel: accommodation })
  }

  if (roomsData?.all_rooms_available.length !== 0) return <></>

  return (
    <Alert error icon mb="2">
      <Box>
        <Text fontSize={{ base: 'xs', md: 'sm' }} mr="40px">
          <Trans
            st="new-hotel-page.rooms.sold.out.alert"
            sd={{
              tos: (chunks) => (
                <Button
                  asLink
                  fontSize={'sm'}
                  color={'inherit'}
                  id="details-change-accommodation"
                  onClick={handleChangeAccommodation}
                >
                  {chunks}
                </Button>
              ),
            }}
          />
        </Text>
      </Box>
    </Alert>
  )
}
