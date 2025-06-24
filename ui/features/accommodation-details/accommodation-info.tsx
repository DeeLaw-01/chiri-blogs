import { Box, BoxProps, HStack } from '@chakra-ui/react'

import LocationIcon from '@/icons/location-pin.svg'
import TickIcon from '@/icons/shared/tick-icon.svg'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import { CONFIG_COMPANY } from 'src/config'
import { useAccommodationDetailsAtoms } from './useAccommodationDetailsAtoms'

import type { HotelDetails } from 'src/shared-types/hotel-details.type'
interface HotelInfoProps extends BoxProps {
  hotel: HotelDetails
}

function AccommodationInfo({ hotel, ...rest }: HotelInfoProps) {
  const { roomsData } = useAccommodationDetailsAtoms()
  const { breakfastIncluded, selectedRooms } = useAccommodationDetailsAtoms()

  return (
    <Box {...rest}>
      <HStack fontSize="sm" mt={3} color="_darkgray" justify={'space-between'}>
        <HStack>
          <Box minW="1rem">
            <TickIcon stroke={theme.colors._gray} width="15" height="15" />
          </Box>
          <Text
            st="new-hotel-page:exclusive.price"
            sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
          />
        </HStack>
      </HStack>
      <HStack fontSize="sm">
        <Box minW="1rem">
          <LocationIcon fill={theme.colors._gray} width="15" height="15" />
        </Box>
        <Text>{hotel.street_address}</Text>
      </HStack>
      {(breakfastIncluded ||
        (selectedRooms.length === 0 &&
          roomsData?.main_rooms[0]?.breakfast_included)) && (
        <HStack fontSize="sm">
          <TickIcon stroke={theme.colors._gray} width="15" height="15" />
          <Text st="common.hotel.room.breakfast.included" />
        </HStack>
      )}
    </Box>
  )
}
export default AccommodationInfo
