import { Box, VStack } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import ManageBookingModals from '../modals/manage-booking-modals'
import BookingDetailsSection from './booking-details'
import PassengersSection from './passengers'
import TravelEssentialsSection from './marketplace/travel-essentials-section'
import OtherSection from './other'
import ItinerarySection from './itinerary'
import ManageBookingHeader from './header'
import MissingFieldsBanner from './missing-fields-banner'
import { BookingType } from '../types/booking.type'
import ManageBookingTabs from './tabs/manage-booking-tabs'
import isTripDisabled from '../utils/isTripDisabled'

type ManageBookingViewProps = {
  booking: BookingType
  containerRef: any
}

export default function ManageBookingView({
  booking,
  containerRef,
}: ManageBookingViewProps) {
  let needInfo = booking?.passengers.filter((p) => p.missing_fields?.length > 0)

  return (
    <Box w="100vw" pos="relative">
      {needInfo?.length !== 0 && <Box inset={0} pos="absolute" zIndex={1150} />}

      <ManageBookingHeader booking={booking} />
      <Container mt="10" maxW="100ch">
        <VStack alignItems="flex-start">
          <ManageBookingTabs containerRef={containerRef} />
          <MissingFieldsBanner />

          <Heading
            as="h1"
            mb="4"
            fontWeight="normal"
            mt="4"
            data-section
            id="booking-itinerary"
            st="new-manage-booking-page.booking.itinerary.heading"
          />

          <ItinerarySection itinerary={booking.itinerary} />
          <Heading
            as="h1"
            mb="4"
            fontWeight="normal"
            mt="4"
            pt="4"
            data-section
            id="booking-passengers"
            st="new-manage-booking-page.booking.passengers.heading"
          />

          <PassengersSection passengers={booking.passengers} />
          {!isTripDisabled(booking.trip.status) && (
            <>
              <Heading
                as="h1"
                mb="4"
                fontWeight="normal"
                mt="12"
                data-section
                id="booking-essentials"
                st="new-manage-booking-page.booking.essentials.heading"
              />

              <TravelEssentialsSection booking={booking} />
            </>
          )}

          <Heading
            as="h1"
            mb="4"
            fontWeight="normal"
            mt="12"
            data-section
            id="booking-details"
            st="new-manage-booking-page.booking.details.heading"
          />

          <BookingDetailsSection booking={booking} />
          <Heading
            as="h1"
            mb="4"
            fontWeight="normal"
            mt="12"
            st="new-manage-booking-page.other.section.heading"
          />

          <OtherSection booking={booking} />
        </VStack>
      </Container>
      <ManageBookingModals />
    </Box>
  )
}
