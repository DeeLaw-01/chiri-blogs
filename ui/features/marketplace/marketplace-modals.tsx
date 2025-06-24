import dynamic from 'next/dynamic'

import useMarketPlaceAtoms from './atoms/useMarketPlaceAtoms'
import { ChangeAccommodationDrawerProps } from '../change-accommodation'

const DynamicHotelViewDetailsDrawer = dynamic(
  () => import('ui/features/hotel-info-drawer')
)

const DynamicChangeAccommodationDrawerComponent =
  dynamic<ChangeAccommodationDrawerProps>(
    () => import('ui/features/change-accommodation')
  )

export default function MarketplaceModals() {
  const {
    showHotelDetails,
    setShowHotelDetails,
    showChangeAccommodation,
    setShowChangeAccommodation,
  } = useMarketPlaceAtoms()

  return (
    <>
      {showHotelDetails?.hotel && (
        <DynamicHotelViewDetailsDrawer
          hotel={showHotelDetails.hotel}
          isOpen={showHotelDetails.hotel !== null}
          onClose={() => setShowHotelDetails({})}
          callback={showHotelDetails.callback}
          prefetch={showHotelDetails.prefetch}
        />
      )}
      {showChangeAccommodation?.hotel && (
        <DynamicChangeAccommodationDrawerComponent
          accommodation={showChangeAccommodation.hotel}
          isOpen={showChangeAccommodation.hotel !== null}
          onOpenAccommodation={(accommodation) =>
            setShowHotelDetails({
              hotel: accommodation,
              callback: showChangeAccommodation.callback,
              prefetch: showChangeAccommodation.prefetch,
            })
          }
          onClose={() => {
            setShowChangeAccommodation({})
          }}
        />
      )}
    </>
  )
}
