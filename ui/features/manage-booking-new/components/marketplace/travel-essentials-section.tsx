import { Grid, GridItem, GridProps, VStack } from '@chakra-ui/react'

import LuggageBanner from './banners/luggage'
import MarketplaceBanner from './banners/marketplace'
import SeatsBanner from './banners/seats'
import InsuranceBanner from './banners/insurance'
import AccommodationBanner from './banners/accommodation'
import { BookingType } from '../../types/booking.type'
import { useResponsiveSizes } from 'src/contexts/responsive'

type TravelEssentialsSectionProps = {
  booking: BookingType
} & GridProps

export default function TravelEssentialsSection({
  booking,
  ...rest
}: TravelEssentialsSectionProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, minmax(0, 1fr))',
        md: 'repeat(4, minmax(0, 1fr))',
      }}
      gap={{ base: 2, md: 4 }}
      w="full"
      maxW="full"
      {...rest}
    >
      <GridItem colSpan={2}>
        <AccommodationBanner />
      </GridItem>
      <GridItem colSpan={1}>
        <LuggageBanner />
      </GridItem>
      <GridItem colSpan={1}>
        <VStack
          gap={4}
          h="100%"
          alignItems={'stretch'}
          justify={'space-evenly'}
        >
          <SeatsBanner booking={booking} />
          {!isMobile && <InsuranceBanner />}
        </VStack>
      </GridItem>

      <GridItem colSpan={{ base: 2, md: 4 }} maxH="fit-content">
        <MarketplaceBanner />
      </GridItem>
    </Grid>
  )
}
