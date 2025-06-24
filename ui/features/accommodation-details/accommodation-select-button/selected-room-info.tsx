import { Box, Grid, Skeleton } from '@chakra-ui/react'
import TickIcon from '@/icons/shared/tick-icon.svg'
import BedIcon from '@/icons/trip-details-page/bed-icon.svg'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import { Fragment } from 'react'
import { CONFIG_COMPANY } from 'src/config'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'

function SelectedRoomInfo() {
  const { roomsData, selectedRooms, breakfastIncluded, isRoomsDataLoading } =
    useAccommodationDetailsAtoms()

  return (
    <Grid
      my={4}
      rowGap={1}
      columnGap={2}
      fontSize="sm"
      color="_darkgray"
      templateColumns="auto 1fr"
    >
      {isRoomsDataLoading && (
        <>
          <BedIcon
            stroke={theme.colors._darkgray}
            width="14"
            height="14"
            strokeWidth="1.5"
          />
          <Skeleton display="block" w="10rem" h="0.8rem" endColor="gray.300" />
        </>
      )}

      {selectedRooms?.length === 0 &&
        roomsData?.main_rooms.map((room, idx) => {
          return (
            <Fragment key={idx}>
              <Box mt="1">
                <BedIcon
                  stroke={theme.colors._darkgray}
                  width="14"
                  height="14"
                  strokeWidth="1.5"
                />
              </Box>
              <Text>1x {room.name}</Text>
            </Fragment>
          )
        })}

      {selectedRooms.map((room, idx) => {
        return (
          <Fragment key={idx}>
            <Box mt="1">
              <BedIcon
                stroke={theme.colors._darkgray}
                width="14"
                height="14"
                strokeWidth="1.5"
              />
            </Box>
            <Text>
              {room.amount}x {room.name}
            </Text>
          </Fragment>
        )
      })}

      <Box mt="0.5">
        <TickIcon stroke={theme.colors._green} width="14" height="14" />
      </Box>
      <Text
        st="new-hotel-page:exclusive.price"
        sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
      />
      {(breakfastIncluded ||
        (selectedRooms.length === 0 &&
          roomsData?.main_rooms[0]?.breakfast_included)) && (
        <Fragment>
          <Box mt="0.5">
            <TickIcon stroke={theme.colors._green} width="14" height="14" />
          </Box>
          <Text color="_green" st="common:hotel.room.breakfast.included" />
        </Fragment>
      )}
    </Grid>
  )
}
export default SelectedRoomInfo
