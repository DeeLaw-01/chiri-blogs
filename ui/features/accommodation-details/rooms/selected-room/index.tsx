import { Box, Skeleton, VStack } from '@chakra-ui/react'
import { useAccommodationDetailsAtoms } from '../../useAccommodationDetailsAtoms'
import DefaultRoomCard from '../default-room-card/default-room-card'
import { RoomInfo } from 'src/shared-types/hotel-details.type'
import Text from 'ui/primitives/Text'
import CheckIcon from '@/icons/new/check.svg'
import theme from 'src/styles/theme'

export default function SelectedRoom() {
  const { roomsData, isRoomsDataLoading } = useAccommodationDetailsAtoms()

  if (isRoomsDataLoading)
    return <Skeleton w="full" h="10rem" endColor="gray.300" />

  return (
    <VStack w="full" align="flex-start" spacing={8}>
      {roomsData?.main_rooms.map((room, idx) => (
        <Box
          p="1"
          w="full"
          bgGradient={theme.gradients.primary}
          key={idx}
          borderRadius="xl"
        >
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            textTransform="uppercase"
            display="flex"
            p="0.5"
            px="1"
            color="_white"
            alignItems="center"
            fontWeight="medium"
            gap="1"
          >
            <CheckIcon height="1rem" />
            <Text notag st="common.general.included" />
          </Text>
          <DefaultRoomCard room={room as RoomInfo} />
        </Box>
      ))}
    </VStack>
  )
}
