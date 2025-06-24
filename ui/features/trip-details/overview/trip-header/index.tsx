import { useResponsiveSizes } from 'src/contexts/responsive'
import MobileTripHeader from './mobile-trip-header'
import DesktopTripHeader from './desktop-trip-header'
import { TripDetails } from 'src/shared-types/trip-details.type'

const TripHeader = ({ trip }: { trip: TripDetails }) => {
  const { isMobile } = useResponsiveSizes()

  return (
    <>
      {isMobile ? (
        <MobileTripHeader trip={trip} />
      ) : (
        <DesktopTripHeader trip={trip} />
      )}
    </>
  )
}

export default TripHeader
