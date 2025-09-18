import dynamic from 'next/dynamic'

const DynamicTrustPilotBanner = dynamic(
  () => import('ui/features/new-home/banners/trust-pilot-banner')
)
// const DynamicSupportBanner = dynamic(
//   // () => import('ui/features/new-home/banners/support-banner')
// )
// const DynamicWhyBanner = dynamic(
//   () => import('ui/features/new-home/banners/why-banner')
// )

export function DesktopBanners({ currentIndex }: { currentIndex: number }) {
  if (currentIndex !== 2) return <></>
  return (
    <>
      <DynamicTrustPilotBanner />
      {/* <DynamicSupportBanner /> */}
      {/* <DynamicWhyBanner /> */}
    </>
  )
}
