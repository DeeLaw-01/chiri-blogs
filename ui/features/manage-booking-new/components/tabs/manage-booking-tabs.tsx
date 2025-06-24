import { RefObject } from 'react'
import TabsScrollNavigation from 'ui/shared/tabs-scroll-navigation'
import Text from 'ui/primitives/Text'

export default function ManageBookingTabs({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement>
}) {
  const TabSections = [
    {
      label: <Text st="new-manage-booking-page:section.itinerary" />,
      id: 'booking-itinerary',
    },
    {
      label: <Text st="new-manage-booking-page:section.passengers" />,
      id: 'booking-passengers',
    },
    {
      label: <Text st="new-manage-booking-page:section.essentials" />,
      id: 'booking-essentials',
    },
    {
      label: <Text st="new-manage-booking-page:section.details" />,
      id: 'booking-details',
    },
  ]

  return (
    <TabsScrollNavigation containerRef={containerRef} tabData={TabSections} />
  )
}
