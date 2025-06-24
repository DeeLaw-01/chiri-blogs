import { Box, HStack, Flex, Wrap } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Carousel from 'ui/shared/carousel'
import RoomTags from 'ui/features/trip-details/accommodation/room-tags'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import PeopleIcon from '@/icons/checkout/people-icon.svg'

import { useAccommodationDetailsAtoms } from '../../useAccommodationDetailsAtoms'
import type { RoomInfo } from 'src/shared-types/hotel-details.type'
import type { CardProps } from 'ui/primitives/Card/card.type'
import Button from 'ui/primitives/Button'
import TickIcon from '@/icons/shared/tick-icon.svg'

type RoomCardProps = {
  room: RoomInfo
} & CardProps

export default function DefaultRoomCard({ room, ...rest }: RoomCardProps) {
  const { setShowRoomFacilities } = useAccommodationDetailsAtoms()

  const handleViewMore = () => {
    setShowRoomFacilities({ facilities: room.facilities })
  }

  const handleClick = () => {
    document
      .getElementById('hotel-alternative-rooms')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Card
      {...rest}
      maxW={'60wv'}
      mx={'auto'}
      overflow={'hidden'}
      onClick={handleClick}
      cursor={'pointer'}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={0} minH="11rem">
        <Box
          position="relative"
          minW={{ base: '100%', md: '30%' }}
          overflow="hidden"
          borderRadius={'md'}
          role="group"
          borderRightRadius={0}
        >
          <Box
            w="full"
            h="full"
            _groupHover={{ transform: 'scale(1.01)' }}
            transition=".3s ease"
            bg="_lightestgray"
          >
            <FullScreenCarousel images={room.photo}>
              <Carousel
                overflow="hidden"
                altText={room.name}
                images={room.photo}
                borderTopRadius={{ base: 'lg', md: 'initial' }}
                height={{ base: '12rem', md: '100%' }}
              />
            </FullScreenCarousel>
          </Box>
        </Box>
        <Box w="full" m={{ base: 2, md: 3 }} pl={{ base: 0, md: 2 }}>
          <Heading as="h4" pr="2">
            {room.name}
          </Heading>
          <HStack w="full" alignItems="flex-start" mt="2">
            <PeopleIcon stroke={'black'} width="15px" />
            <Text
              fontSize="sm"
              mt="-0.2rem"
              st="common.travelers"
              sd={{ count: room.max_n_people }}
            />
          </HStack>
          <RoomTags roomData={room} />
          <Wrap pt="2">
            {room.facilities?.map((facility, idx) => {
              if (idx > 6) return
              return (
                <HStack key={idx} fontSize="sm" mb="1">
                  <Text color="_green">
                    <TickIcon width="0.7rem" />
                  </Text>
                  <Text color="_gray">{facility.name}</Text>
                </HStack>
              )
            })}
          </Wrap>
          {room.facilities?.length > 6 && (
            <Button
              id="view-all-facilities-room"
              asLink
              fontWeight="normal"
              fontSize="sm"
              arrow
              mt="0"
              onClick={() => handleViewMore()}
            >
              <Text st="common.view.more" />
            </Button>
          )}
        </Box>
      </Flex>
    </Card>
  )
}
