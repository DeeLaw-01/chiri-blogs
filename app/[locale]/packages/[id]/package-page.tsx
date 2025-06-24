'use client'

import { Box } from '@chakra-ui/react'
import Navbar from 'ui/features/navbar'
import Container from 'ui/primitives/Container'
import Footer from 'ui/features/shared-layout/footer'
import PageGrid from 'ui/features/shared-layout/page-grid'
import TripTimer from 'ui/features/trip-details/trip-timer'
import TripHeader from 'ui/features/trip-details/overview/trip-header'
import TripModals from 'ui/features/trip-details/modals/trip-modals'
import TripTabs from 'ui/features/trip-details/overview/tabs/tabs'
import BookButton from 'ui/features/trip-details/book-button/book-button'
import SkeletonLoading from 'ui/features/trip-details/skeleton/skeleton-loading'

import useHistory from 'src/hooks/useHistory'
import { notFound } from 'next/navigation'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useTripDetailsEffects } from 'ui/features/trip-details/useTripDetailsEffects'

export default function PackagePageClient({ id }: { id: string }) {
  const { isMobile } = useResponsiveSizes()
  const { history } = useHistory()
  const { trip } = useTripDetailsEffects(id)

  if (trip?.error) return notFound()

  return (
    <>
      <TripTimer />
      {(!isMobile || history.length <= 1) && <Navbar />}

      {trip.data ? (
        <Container
          mt={{ base: '0', md: 16 }}
          px={{ base: '0 !important', md: '1.7rem !important' }}
        >
          <TripHeader trip={trip.data} />
          <PageGrid
            width="20rem"
            m="0 !important"
            sideCompProps={{
              zIndex: { base: 1300, md: 1000 },
            }}
            sideComp={<BookButton trip={trip.data} isMobile={isMobile} />}
          >
            <Box position={'relative'} w="full">
              <TripTabs trip={trip.data} />
            </Box>
          </PageGrid>
          <TripModals trip={trip.data} />
        </Container>
      ) : (
        <SkeletonLoading />
      )}

      <Footer />
    </>
  )
}

export const TabSections = [
  { name: 'new-trip-page:section.overview', id: 0 },
  { name: 'new-trip-page:section.transport', id: 1 },
  { name: 'new-trip-page:section.accommodation', id: 2 },
  { name: 'new-trip-page:section.faqs', id: 3 },
]
