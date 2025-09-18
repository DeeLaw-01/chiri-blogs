import { GridItem } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const DynamicTrustPilotBanner = dynamic(
  () => import('ui/features/new-home/banners/trust-pilot-banner')
)
// const DynamicSupportBanner = dynamic(
//   () => import('ui/features/new-home/banners/support-banner')
// )

const DynamicWhyBanner = dynamic(
  () => import('ui/features/new-home/banners/why-banner')
)

const bannerIndexes = [1, 3, 5]

export function MobileBanners({ currentIndex }: { currentIndex: number }) {
  // If it's not a banner, we don't want the GridItem wrapper.
  if (!bannerIndexes.includes(currentIndex)) return <></>

  return (
    <GridItem gridColumn={'1 / -1'} mt={'-1.5rem'}>
      {currentIndex === 1 && <DynamicTrustPilotBanner />}
      {/* {currentIndex === 3 && <DynamicSupportBanner />} */}
      {currentIndex === 5 && <DynamicWhyBanner />}
    </GridItem>
  )
}
