import { Box, HStack, VStack } from '@chakra-ui/react'
import NoAccommodationCard from './accommodation/no-accommodation-card'
import { useState } from 'react'
import ArrowDownIcon from 'ui/icons/navbar/arrow-down.svg'
import theme from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import FlashSaleBanner from 'ui/features/manage-booking-new/components/itinerary/accommodation/flash-sale'
import TransportCardBooking from './transport/transport-card-booking'
import { ItineraryType } from '../../types/itinerary.type'
import BookingAccommodationCard from './accommodation/accommodation-card/accommodation-booking-card'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import getHoursFromPurchaseTime from '../../utils/getHoursSincePurchase'
import isTripDisabled from '../../utils/isTripDisabled'
import Text from 'ui/primitives/Text'

type ItinerarySectionProps = {
  itinerary: ItineraryType[]
}

export default function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  const { booking } = useManageBookingAtoms()
  const [showAll, setShowAll] = useState<boolean>(false)

  const getSegmentElement = (segment: ItineraryType) => {
    switch (segment.type) {
      case 'transport':
        return <TransportCardBooking transport={segment.content} />
      case 'accommodation':
        if (segment.content.bought)
          return <BookingAccommodationCard accommodation={segment.content} />
        else if (isTripDisabled(booking?.trip.status)) return
        else if (getHoursFromPurchaseTime(booking?.trip.purchase_time) < 24)
          return <FlashSaleBanner accommodation={segment.content} />
        else return <NoAccommodationCard destination={segment.content.city} />
    }
  }
  return (
    <Box w="full">
      {itinerary.map((item, idx) => {
        if (!showAll && idx > 1 && itinerary.length > 3) return
        else return <Box key={idx}>{getSegmentElement(item)}</Box>
      })}
      {!showAll && itinerary.length > 3 && (
        <HStack
          w="full"
          h="5rem"
          position="relative"
          ml="-1rem"
          width={'calc(100% + 2rem)'}
          mt="-5rem"
          bgGradient={'linear(to-t, white 70%, transparent)'}
          zIndex="9"
          pt="3rem"
        >
          <VStack w="full">
            <VStack
              onClick={() => setShowAll(true)}
              textAlign="center"
              _hover={{ cursor: 'pointer' }}
              role="group"
              gap="0.2rem"
            >
              <Button
                asLink
                id="view-full-itinerary"
                color="primary"
                fontWeight="medium"
                _hover={{}}
              >
                <Text st="new-manage-booking-page.view.full.itinerary" />
              </Button>
              <Box _groupHover={{ mt: 1, mb: -1 }} transition="all .2s">
                <ArrowDownIcon
                  height="20"
                  width="20"
                  stroke={theme.colors.primary}
                />
              </Box>
            </VStack>
          </VStack>
        </HStack>
      )}
    </Box>
  )
}
