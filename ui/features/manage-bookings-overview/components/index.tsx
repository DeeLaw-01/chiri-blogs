import Container from 'ui/primitives/Container'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import OtherSection from './other'
import MarketplaceAlert from './marketplace-alert'
import UpcomingBookings from './bookings/upcoming-bookings'
import useAuth from 'src/hooks/useAuth'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { CONFIG_COMPANY } from 'src/config'
import OverviewModals from './modals'
import PreviousBookings from './bookings/previous-bookings'

export default function ManageBookingsOverview() {
  const { attributes } = useAuth()
  const { isMobile } = useResponsiveSizes()

  return (
    <>
      <Container mt="20" w="100ch">
        <Heading
          as="h1"
          fontWeight="normal"
          my={4}
          pt="4"
          st="new-manage-booking-page.user.booking.overview.heading"
          sd={{ name: attributes?.name }}
        />

        <Text
          color="_gray"
          fontSize={{ base: 'sm', md: 'md' }}
          st="new-manage-booking-page.user.booking.overview.description"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
        />

        {!isMobile && <MarketplaceAlert />}
        <Heading
          as="h2"
          fontWeight="normal"
          mb="4"
          mt="8"
          st="new-manage-booking-page.user.booking.overview.subheading.one"
        />

        <UpcomingBookings />

        <Heading
          as="h2"
          fontWeight="normal"
          mb="4"
          mt="8"
          st="new-manage-booking-page.user.booking.overview.subheading.two"
        />

        <PreviousBookings />

        <Heading
          as="h2"
          fontWeight="normal"
          mt="12"
          mb="4"
          st="new-manage-booking-page.user.booking.overview.subheading.three"
        />

        <OtherSection />
      </Container>
      <OverviewModals />
    </>
  )
}
