import ItineraryMobile from './itinerary-mobile'
import ItineraryDesktop from './itinerary-desktop'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { ItineraryContentType } from 'src/shared-types/trip-details.type'

type ItineraryProps = {
  itinerary: ItineraryContentType[]
}

export default function Itinerary({ itinerary }: ItineraryProps) {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <ItineraryMobile itinerary={itinerary} />
  return <ItineraryDesktop itinerary={itinerary} />
}
