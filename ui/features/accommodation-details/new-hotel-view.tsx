import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import Container from 'ui/primitives/Container'
import PageGrid from '../shared-layout/page-grid'

import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import BookNowBanner from './book-now-banner'
import HotelMapCard from './map-card'
import AccommodationHeader from './accommodation-header'
import PropertyFacilities from './property-facilities'
import AccommodationTabs from './accommodation-tabs'
import PropertyDescription from './property-description'
import AccommodationDetailModals from './modals/accommodation-detail-modals'
import AccommodationSelectButton from './accommodation-select-button'
import AlternativeRooms from './rooms/alternative-rooms'
import Button from 'ui/primitives/Button'
import AccommodationReviews from './accommodation-reviews/accommodation-reviews'
import { useAccommodationDetailsAtoms } from './useAccommodationDetailsAtoms'
import { useAccommodationDetailsEffects } from './useAccommodationDetailsEffects'
import SelectedRoom from './rooms/selected-room'

type AccommodationViewProps = {
  hotel: HotelDetails
  onClose: () => void
  drawerBodyRef: React.RefObject<HTMLDivElement>
  viewOnly?: boolean
  prefetch?: (hotel: HotelDetails) => boolean
  callback?: (hotel: HotelDetails) => void
}
export default function AccommodationView({
  hotel,
  onClose,
  drawerBodyRef,
  viewOnly,
  prefetch,
  callback,
}: AccommodationViewProps) {
  useAccommodationDetailsEffects(hotel)
  const { setViewOnly, setShowMap, roomsData } = useAccommodationDetailsAtoms()
  setViewOnly(!!viewOnly)

  return (
    <Box my={5} overflowX={'clip'}>
      <Container>
        <AccommodationHeader hotel={hotel} onClose={onClose} />

        <PageGrid
          width="20rem"
          m="0 !important"
          sideComp={
            <AccommodationSelectButton
              hotel={hotel}
              prefetch={prefetch}
              callback={callback}
            />
          }
          sideCompProps={{ zIndex: 'sticky' }}
        >
          <VStack alignItems="flex-start" w="full" maxW={'calc(100vw - 3rem)'}>
            <AccommodationTabs
              hasReviews={!!hotel.reviews}
              drawerBodyRef={drawerBodyRef}
            />
            <Box
              position={'relative'}
              w="full"
              mt="4"
              mb="2"
              data-section
              id="hotel-details"
            >
              <Heading
                as="h1"
                mb="4"
                fontWeight="normal"
                st="new-hotel-page:details.heading"
              />
              <PropertyDescription />
            </Box>
            <BookNowBanner />
            <Divider my="4" w="80%" alignSelf={'center'} />
            {roomsData?.main_rooms && roomsData?.main_rooms?.length > 0 && (
              <>
                <Box
                  w="full"
                  position={'relative'}
                  id="hotel-rooms"
                  data-section
                >
                  <Heading
                    as="h1"
                    mb="4"
                    fontWeight="normal"
                    st="new-hotel-page:selected.room.header"
                  />

                  <SelectedRoom />
                </Box>

                <Divider my="4" w="80%" alignSelf={'center'} />
              </>
            )}
            {!viewOnly && (
              <Box position={'relative'} w="full">
                <Heading
                  as="h1"
                  fontWeight="normal"
                  id="hotel-alternative-rooms"
                  mb="4"
                  st="new-hotel-page:alternative.rooms.header"
                />

                <AlternativeRooms accommodation={hotel} />
              </Box>
            )}

            <Divider my="4" w="80%" alignSelf={'center'} />

            <Box
              position={'relative'}
              w="full"
              id="hotel-features"
              data-section
            >
              <Heading
                as="h1"
                mb="4"
                fontWeight="normal"
                st="new-hotel-page:features.heading"
              />

              <PropertyFacilities />
            </Box>
            <Divider my="4" w="80%" alignSelf={'center'} />
            {roomsData?.reviews && (
              <>
                <Box
                  w="full"
                  position={'relative'}
                  id="hotel-reviews"
                  data-section
                >
                  <Heading
                    as="h1"
                    fontWeight="normal"
                    st="new-hotel-page:reviews.heading"
                  />

                  <AccommodationReviews reviews={roomsData.reviews} />
                </Box>
                <Divider my="4" w="80%" alignSelf={'center'} />
              </>
            )}
            <Box
              position={'relative'}
              w="full"
              id="hotel-location"
              data-section
            >
              <HStack justify="space-between" w="full">
                <Heading
                  as="h1"
                  fontWeight="normal"
                  mb="4"
                  st="new-hotel-page:location.heading"
                />

                <Button
                  id="open-full-map"
                  fontWeight="normal"
                  fontSize="sm"
                  asLink
                  onClick={() => setShowMap(true)}
                >
                  <Text st="common:view.map" />
                </Button>
              </HStack>
              <HotelMapCard hotel={hotel} />
            </Box>
            <Divider my="4" w="80%" alignSelf={'center'} />
          </VStack>
        </PageGrid>
      </Container>
      <AccommodationDetailModals hotel={hotel} />
    </Box>
  )
}
