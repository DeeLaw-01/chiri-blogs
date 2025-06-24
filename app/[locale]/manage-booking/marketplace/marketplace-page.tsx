'use client'

import { useEffect } from 'react'
import { AuthDataProvider } from 'ui/features/manage-booking/atoms/useAuthDataAtom'

import Navbar from 'ui/features/navbar'
import Container from 'ui/primitives/Container'
import Footer from 'ui/features/shared-layout/footer'
import CheckCart from 'ui/features/marketplace/check-cart'
import FilterSelector from 'ui/features/marketplace/filter-selector'
import MarketPlacePageBanner from 'ui/features/marketplace/page-banner'
import FilteredMarketPlaceSections from 'ui/features/marketplace/sections'
import MarketplaceSummary from 'ui/features/marketplace/marketplace-summary'
import { useResponsiveSizes } from 'src/contexts/responsive'
import useMarketPlaceAtoms from 'ui/features/marketplace/atoms/useMarketPlaceAtoms'
import dynamic from 'next/dynamic'
import MarketplaceModals from 'ui/features/marketplace/marketplace-modals'
import { useSearchParams } from 'next/navigation'
import { PaymentTypes } from 'ui/shared/payment/payment.type'
import generateUUID from 'src/utils/generateUUID'

const PaymentModals = dynamic(() => import('ui/shared/payment/modals'))

export default function MarketPlace(): JSX.Element {
  const { isMobile } = useResponsiveSizes()
  const searchParams = useSearchParams()
  const { cartId, setActiveFilter, session, setSession } = useMarketPlaceAtoms()
  const isPaymentComplete = Boolean(
    searchParams?.get('complete') &&
      searchParams?.get('redirect_status') !== 'failed'
  )
  const activeFilter = searchParams?.get('filter')

  const email = searchParams.get('email')
  const transactionId = searchParams.get('bid')

  useEffect(() => {
    if (activeFilter) {
      setActiveFilter(activeFilter?.toUpperCase())
    } else {
      setActiveFilter('ALL')
    }
  }, [])

  useEffect(() => {
    if (!session) setSession(generateUUID())
  }, [])

  return (
    <AuthDataProvider>
      <Navbar showMarketplaceCart />
      <MarketPlacePageBanner />
      <CheckCart />

      <Container pb="32">
        <FilterSelector />
        <FilteredMarketPlaceSections />
      </Container>
      <Footer />

      {isMobile && <MarketplaceSummary />}
      {isPaymentComplete && (
        <PaymentModals
          type={PaymentTypes.MARKETPLACE}
          bid={`cart-${cartId}`}
          redirect={`/manage-booking?email=${email}&bid=${transactionId}`}
        />
      )}

      <MarketplaceModals />
    </AuthDataProvider>
  )
}
