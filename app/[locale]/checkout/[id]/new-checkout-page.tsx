'use client'

import CheckoutContent from 'ui/features/new-checkout/content'
import CheckoutModals from 'ui/features/new-checkout/modals'
import CheckoutSideInfo from 'ui/features/new-checkout/side-info'
import { useCheckoutEffects } from 'ui/features/new-checkout/useCheckoutEffects'
import PageGrid from 'ui/features/shared-layout/page-grid'
import Container from 'ui/primitives/Container'
import { useResponsiveSizes } from 'src/contexts/responsive'
import OrderOverview from 'ui/features/new-checkout/order-overview'
import BackButton from 'ui/features/new-checkout/content/back-button'
import { atoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import { Stack } from '@chakra-ui/react'
import { TripDetails } from 'src/shared-types/trip-details.type'
import { useHydrateAtoms } from 'jotai/utils'
// import LogoIcon from '@/icons/logo.svg'

type CheckoutProps = {
  data: TripDetails
}

export default function Checkout({ data }: CheckoutProps) {
  const { isMobile } = useResponsiveSizes()
  useHydrateAtoms([[atoms.trip, data]])
  useCheckoutEffects()

  return (
    <>
      <Container>
        <Stack direction={['row', 'column']} justify={'space-between'}>
          <BackButton />
        </Stack>
        {isMobile && <OrderOverview />}
        {!isMobile && <BackButton />}
        <PageGrid width="24rem" sideComp={<CheckoutSideInfo />}>
          <CheckoutContent />
        </PageGrid>
      </Container>
      <CheckoutModals />
    </>
  )
}
