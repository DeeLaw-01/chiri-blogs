import { RefObject } from 'react'
import TabsScrollNavigation from 'ui/shared/tabs-scroll-navigation'
import Text from 'ui/primitives/Text'

export default function AccommodationTabs({
  hasReviews,
  drawerBodyRef,
}: {
  hasReviews: boolean
  drawerBodyRef: RefObject<HTMLDivElement>
}) {
  const TabSections = [
    { label: <Text st="new-hotel-page:section.images" />, id: 'hotel-images' },
    {
      label: <Text st="new-hotel-page:section.details" />,
      id: 'hotel-details',
    },
    {
      label: <Text st="new-hotel-page:section.features" />,
      id: 'hotel-features',
    },
    {
      label: <Text st="new-hotel-page:section.location" />,
      id: 'hotel-location',
    },
    ...(hasReviews
      ? [
          {
            label: <Text st="new-hotel-page:section.reviews" />,
            id: 'hotel-reviews',
          },
        ]
      : []),
    { label: <Text st="new-hotel-page:section.rooms" />, id: 'hotel-rooms' },
  ]

  return (
    <TabsScrollNavigation containerRef={drawerBodyRef} tabData={TabSections} />
  )
}
