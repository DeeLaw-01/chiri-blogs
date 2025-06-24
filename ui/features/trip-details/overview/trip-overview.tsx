import { Box, HStack } from '@chakra-ui/react'

import Itinerary from './itinerary/itinerary'
import LuggageCard from './luggage-card'
import InsuranceCard from './insurance-card'
import MapCard from './map-card/map-card'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import { TripDetailsResponseType } from 'src/api/queries/get/transportQuery/trip-details.type'

import ChevronDown from '@/icons/shared/chevron-down-icon.svg'
import InfoTooltip from '../info-tooltip'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { CONFIG_SETTINGS } from 'src/config'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import CityOverview from './city-overview'
import CoinsCard from './coins-card'

type TripOverviewProps = {
  trip: TripDetailsResponseType
}

export default function TripOverview({ trip }: TripOverviewProps) {
  const { isMobile } = useResponsiveSizes()
  const { setShowChangeTravelers } = useTripDetailsAtoms()

  return (
    <Box w="full">
      <HStack w="full" justifyContent="space-between">
        {' '}
        <Heading
          as="h1"
          mb="2"
          fontWeight="normal"
          st="new-trip-page:overview.header.trip"
        />
        {isMobile && (
          <Button
            asLink
            id="change-passengers"
            color={'_darkgray'}
            fontWeight="normal"
            fontSize="sm"
            isDisabled={trip.available_to_buy}
            rightIcon={
              <ChevronDown
                width="10"
                height="10"
                stroke={theme.colors.primary}
              />
            }
            onClick={() => {
              setShowChangeTravelers(true)
            }}
          >
            <Text
              notag
              st="common:travelers"
              sd={{ count: trip.passengers.total_passengers }}
            />
          </Button>
        )}
      </HStack>

      {/* City views */}
      <CityOverview tripId={trip.id} />

      {/* Itinerary */}
      <Box>
        <HStack w="full" justifyContent={'space-between'}>
          <Heading
            as="h1"
            mb="2"
            fontWeight="normal"
            st="new-trip-page:overview.header.itinerary"
          />
        </HStack>
        <Itinerary itinerary={trip.itinerary} />
      </Box>

      {/* Map */}
      <Box mt={10} position="relative">
        <Heading
          as="h1"
          mb="2"
          fontWeight="normal"
          st="new-trip-page:overview.header.map"
        />
        <MapCard />
      </Box>

      {/* Luggage */}
      <Box mt="10" position="relative">
        <HStack alignItems="flex-start">
          <Heading
            as="h1"
            fontWeight="normal"
            st="new-trip-page:overview.header.luggage"
          />
          <InfoTooltip
            h={{ base: 7, md: 8 }}
            w={{ base: 7, md: 8 }}
            pt={{ base: '1.5', md: '2.5' }}
            label={'new-trip-page:overview.luggage.label'}
          />
        </HStack>
        <LuggageCard numberOfPeople={trip.passengers.total_passengers} />
      </Box>

      {/* Discount */}
      <Box mt={10} position="relative">
        <Heading
          as="h1"
          mb="2"
          fontWeight="normal"
          st="new-trip-page.overview.discount.heading"
        />
        <CoinsCard />
      </Box>

      {/* Insurance */}
      {trip.protection_available && (
        <Box mt="10" position="relative">
          <HStack alignItems="flex-start">
            <Heading
              as="h1"
              fontWeight="normal"
              st="new-trip-page:overview.header.insurance"
            />
            <InfoTooltip
              h={{ base: 7, md: 8 }}
              w={{ base: 7, md: 8 }}
              pt={{ base: '1.5', md: '2.5' }}
              label={'new-trip-page:overview.insurance.label'}
              sd={{ INSURANCE_FLEX_NAME: CONFIG_SETTINGS.INSURANCE_FLEX_NAME }}
            />
          </HStack>
          <InsuranceCard />
        </Box>
      )}
    </Box>
  )
}
