import { useResponsiveSizes } from 'src/contexts/responsive'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import MobileMap from './mobile-map'
import DesktopMap from './desktop-map'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type ChangeAccommodationMapProps = {
  onOpenAccommodation: (acc: HotelDetails) => void
}

export default function ChangeAccommodationMap({
  onOpenAccommodation,
}: ChangeAccommodationMapProps) {
  const { isMobile } = useResponsiveSizes()
  const { showMap } = useChangeAccommodationAtoms()

  if (!showMap) return <></>

  return (
    <>
      {isMobile && <MobileMap onOpenAccommodation={onOpenAccommodation} />}
      {!isMobile && <DesktopMap onOpenAccommodation={onOpenAccommodation} />}
    </>
  )
}
