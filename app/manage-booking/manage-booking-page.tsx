'use client'

import { Box } from '@chakra-ui/react'
import Footer from 'ui/features/shared-layout/footer'
import Navbar from 'ui/features/navbar'

import ManageBookingView from 'ui/features/manage-booking-new/components'
import { useManageBookingEffects } from 'ui/features/manage-booking-new/hooks/useManageBookingEffects'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
// import ManageBookingsOverview from 'ui/features/manage-bookings-overview/components'
// import useAuth from 'src/hooks/useAuth'
import { useRef } from 'react'
import ManageBookingLoadingView from 'ui/features/manage-booking-new/components/loading'
import UnconfirmedView from 'ui/features/manage-booking-new/components/unconfirmed'
// import AppRedirect from 'ui/shared/app-redirect'

export default function ManageBooking(): JSX.Element {
  const { booking, loading } = useManageBookingAtoms()
  // const { isUserLoggedIn } = useAuth()
  useManageBookingEffects()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Navbar showMarketplaceCart />
      <Box
        ref={containerRef}
        overflowY={'inherit'}
        h={'100vh'}
        overflowX="hidden"
      >
        {/* <AppRedirect /> */}
        {loading && <ManageBookingLoadingView />}
        {!loading && (
          <>
            {/* {isUserLoggedIn && !booking && <ManageBookingsOverview />}
            {!isUserLoggedIn && !booking && <UnconfirmedView />} */}
            {!booking && <UnconfirmedView />}
            {booking && (
              <ManageBookingView
                booking={booking}
                containerRef={containerRef}
              />
            )}
          </>
        )}
        <Footer />
      </Box>
    </>
  )
}
