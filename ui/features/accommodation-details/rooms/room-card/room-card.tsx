import { Box, HStack, Divider, VStack, Flex } from '@chakra-ui/react'
import useCurrency from 'src/hooks/useCurrency'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Tag from 'ui/primitives/Tag'
import Text from 'ui/primitives/Text'
import Carousel from 'ui/shared/carousel'
import Counter from 'ui/features/trip-details/book-button/counter'
import TickIcon from '@/icons/shared/tick-icon.svg'
import theme from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import ArrowDownIcon from 'ui/icons/navbar/arrow-down.svg'
import {
  Mealplan,
  useAccommodationDetailsAtoms,
} from '../../useAccommodationDetailsAtoms'
import { useEffect, useState } from 'react'
import { RoomInfo } from 'src/shared-types/hotel-details.type'
import MealplanSelect from './mealplan-select'
import PeopleIcon from '@/icons/checkout/people-icon.svg'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import { CardProps } from 'ui/primitives/Card/card.type'

type RoomCardProps = {
  room: RoomInfo
  idx: number
} & CardProps

export default function RoomCard({ room, idx, ...rest }: RoomCardProps) {
  const [amount, setAmount] = useState<number>(0)
  const [mealplan, setMealplan] = useState<Mealplan>(getDefaultMealplan())
  const { setSelectedRooms, selectedRooms, setShowRoomFacilities } =
    useAccommodationDetailsAtoms()
  const { getConvertedCurrency } = useCurrency()
  const existingRoomIndex = selectedRooms.findIndex(
    (room) => room.position === idx
  )

  useEffect(() => {
    if (amount > 0 && existingRoomIndex === -1) addRoom()
    else if (amount === 0 && existingRoomIndex !== -1) deleteRoom()
    else if (amount > 0 && existingRoomIndex !== -1) updateRoom()
  }, [amount, mealplan])

  const deleteRoom = () => {
    setSelectedRooms((prev) => {
      prev.splice(existingRoomIndex, 1)
      return [...prev]
    })
  }

  const addRoom = () => {
    setSelectedRooms((prev) => [...prev, getRoom()])
  }

  const updateRoom = () => {
    setSelectedRooms((prev) => {
      return prev.map((room, index) =>
        index === existingRoomIndex ? getRoom() : room
      )
    })
  }

  const getRoom = () => {
    return {
      position: idx,
      name: room.name,
      amount: amount,
      block_id: room.block_id,
      room_id: room.room_id,
      price: room.price + getMealplanPrice() * amount,
      ...(mealplan && { mealplan: mealplan }),
    }
  }

  const getMealplanPrice = () => {
    switch (mealplan) {
      case 'BREAKFAST':
        return +room.breakfast_cost
      case 'ALLINCLUSIVE':
        return +room.all_inclusive_cost
      case 'FULLBOARD':
        return +room.full_board_cost
      case 'HALFBOARD':
        return +room.half_board_cost
      default:
        return 0
    }
  }

  const handleViewMore = () => {
    setShowRoomFacilities({ facilities: room.facilities })
  }

  function getDefaultMealplan() {
    if (room.breakfast_included && +room.breakfast_cost === 0)
      return 'BREAKFAST'
    return ''
  }

  return (
    <Card {...rest} maxW={'60wv'} mx={'auto'} overflow={'hidden'}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={0} minH="11rem">
        <Box
          position="relative"
          minW={{ base: '100%', md: '30%' }}
          overflow="hidden"
          role="group"
          borderRadius={0}
        >
          <Box w="full" h="full" bg="_lightestgray">
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
        <Box
          m={{ base: 2, md: 3 }}
          borderRight="1px solid"
          borderColor="_lightgray"
          w="full"
          pl={{ base: 0, md: 2 }}
        >
          <Heading as="h4" pr="2" noOfLines={2}>
            {room.name}
          </Heading>

          <HStack alignItems="flex-start" my="1" fontSize="sm" w="full">
            <PeopleIcon stroke={'black'} width="15px" />
            <Text
              mt="-0.2rem"
              st="common.general.adults"
              sd={{ count: room.max_n_adults }}
            />
            {room.max_n_children && (
              <Text
                mt="-0.2rem"
                st="common.general.children"
                sd={{ count: room.max_n_children }}
              />
            )}
          </HStack>

          {room.facilities?.length > 0 && (
            <Box pt="2" display={{ base: 'none', md: 'initial' }}>
              {room.facilities.map((facility, idx) => {
                if (idx > 3) return
                return (
                  <HStack key={idx} fontSize="sm" mb="1">
                    <Text color="_green">
                      <TickIcon width="0.7rem" />
                    </Text>
                    <Text color="_gray">{facility.name}</Text>
                  </HStack>
                )
              })}
            </Box>
          )}

          {room.facilities?.length > 3 && (
            <Button
              id="view-all-facilities-room"
              asLink
              fontWeight="normal"
              fontSize="sm"
              rightIcon={
                <ArrowDownIcon stroke={theme.colors.primary} width="10px" />
              }
              mt="0"
              onClick={() => handleViewMore()}
            >
              <Text st="common.view.more" />
            </Button>
          )}
        </Box>
        <VStack alignItems="stretch" p={{ base: 2, md: 3 }} w="full">
          <Box py={1} flexGrow={1} flexShrink={0}>
            {room.number_of_rooms_left > 1 && room.number_of_rooms_left < 6 && (
              <HStack
                w="full"
                justify={{ base: 'flex-start', md: 'flex-end' }}
                mb={{ base: 2, md: 0 }}
              >
                <Tag red>
                  <Text mr={1}>{room.number_of_rooms_left}</Text>
                  <Text st="new-hotel-page.rooms.left" />
                </Tag>
              </HStack>
            )}

            <MealplanSelect
              room={room}
              mealplan={mealplan}
              setMealplan={setMealplan}
            />
          </Box>
          <Divider />

          <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="normal">
              {getConvertedCurrency(room.price + getMealplanPrice())}
            </Text>
            <Counter
              value={amount}
              maxVal={room.number_of_rooms_left}
              onIncrement={() => setAmount((prev) => prev + 1)}
              onDecrement={() => setAmount((prev) => prev - 1)}
              minVal={0}
            />
          </HStack>
        </VStack>
      </Flex>
    </Card>
  )
}
