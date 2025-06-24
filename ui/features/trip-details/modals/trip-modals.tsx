import dynamic from 'next/dynamic'

import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import { TripDetails } from 'src/shared-types/trip-details.type'
import { TripMapDrawerProps } from 'ui/features/trip-map/trip-map-drawer'
import { ChangeTravelersModalProps } from './change-travelers-modal'
import { TransportDetailedModalProps } from '../transport/transport-detailed'
import { ChangeAccommodationDrawerProps } from 'ui/features/change-accommodation'
import { ChangeTransportationDrawerProps } from 'ui/features/change-transportation'
import { CoinsModalProps } from 'ui/shared/modals/coins-modal'

const DynamicTripMap = dynamic<TripMapDrawerProps>(
  () => import('ui/features/trip-map/trip-map-drawer')
)

const DynamicCoinsModal = dynamic<CoinsModalProps>(
  () => import('ui/shared/modals/coins-modal')
)

const DynamicTripScoreModal = dynamic(
  () => import('ui/features/trip-details/modals/trip-score-modal')
)

const DynamicRemoveAccommodationModal = dynamic(
  () => import('ui/features/trip-details/modals/remove-accommodation-modal')
)

const DynamicHotelViewDetailsDrawer = dynamic(
  () => import('ui/features/hotel-info-drawer')
)

const DynamicChangeAccommodationDrawer =
  dynamic<ChangeAccommodationDrawerProps>(
    () => import('ui/features/change-accommodation')
  )

const DynamicTransportDetailedModal = dynamic<TransportDetailedModalProps>(
  () => import('ui/features/trip-details/transport/transport-detailed')
)

const DynamicChangeTransportationDrawer =
  dynamic<ChangeTransportationDrawerProps>(
    () => import('ui/features/change-transportation')
  )

const DynamicChangeTravelersModal = dynamic<ChangeTravelersModalProps>(
  () => import('ui/features/trip-details/modals/change-travelers-modal')
)

const DynamicCityView = dynamic(
  () => import('ui/features/trip-details/city-view/city-view-modal')
)

const DynamicLuggageInfoModal = dynamic(
  () => import('ui/features/trip-details/modals/luggage-info-modal')
)

type TripModalsProps = {
  trip: TripDetails
}

export default function TripModals({ trip }: TripModalsProps) {
  const {
    showMap,
    setShowMap,
    showCoins,
    setShowCoins,
    showHotelDetails,
    setShowHotelDetails,
    showChangeAccommodation,
    setShowChangeAccommodation,
    showTransportDetails,
    setShowTransportDetails,
    showChangeTransportation,
    setShowChangeTransportation,
    showTripScore,
    setShowTripScore,
    showChangeTravelers,
    setShowChangeTravelers,
    showCityView,
    setShowCityView,
    showRemoveAccommodation,
    setShowRemoveAccommodation,
    showLuggageInfo,
    setShowLuggageInfo,
    setTrip,
  } = useTripDetailsAtoms()

  return (
    <>
      {showMap && (
        <DynamicTripMap isOpen={showMap} onClose={() => setShowMap(false)} />
      )}
      <DynamicTripScoreModal
        score={9.7}
        isOpen={showTripScore}
        onClose={() => setShowTripScore(false)}
      />
      <DynamicRemoveAccommodationModal
        isOpen={showRemoveAccommodation}
        onClose={() => setShowRemoveAccommodation(false)}
      />

      {showHotelDetails?.hotel && (
        <DynamicHotelViewDetailsDrawer
          hotel={showHotelDetails.hotel}
          isOpen={showHotelDetails.hotel !== null}
          onClose={() => setShowHotelDetails({})}
          callback={(data) => {
            setShowChangeAccommodation({})
            setShowHotelDetails({})
            setTrip({
              data: data.trip,
              isLoading: false,
              error: false,
              isValidating: false,
            })
          }}
        />
      )}
      {showChangeAccommodation.hotel && (
        <DynamicChangeAccommodationDrawer
          accommodation={showChangeAccommodation.hotel}
          isOpen={showChangeAccommodation.hotel !== null}
          onOpenAccommodation={(accommodation) =>
            setShowHotelDetails({ hotel: accommodation })
          }
          onClose={() => {
            setShowChangeAccommodation({})
          }}
        />
      )}

      {showTransportDetails.transport && (
        <DynamicTransportDetailedModal
          addChangeButton
          isOpen={showTransportDetails.transport !== null}
          transport={showTransportDetails.transport}
          onClose={() => {
            setShowTransportDetails({})
          }}
        />
      )}
      {showChangeTransportation.transport && (
        <DynamicChangeTransportationDrawer
          transport={showChangeTransportation.transport}
          isOpen={showChangeTransportation.transport !== null}
          onClose={() => {
            setShowChangeTransportation({})
          }}
          callback={(data) => {
            setShowChangeTransportation({})
            setTrip({
              data: data.trip,
              isLoading: false,
              error: false,
              isValidating: false,
            })
          }}
        />
      )}
      {showChangeTravelers && (
        <DynamicChangeTravelersModal
          isOpen={showChangeTravelers}
          onClose={() => {
            setShowChangeTravelers(false)
          }}
          trip={trip}
        />
      )}
      {showCityView.content && (
        <DynamicCityView
          content={showCityView.content}
          isOpen={showCityView.content !== null}
          onClose={() => setShowCityView({})}
        />
      )}
      <DynamicLuggageInfoModal
        isOpen={showLuggageInfo}
        onClose={() => setShowLuggageInfo(false)}
      />
      {showCoins && (
        <DynamicCoinsModal
          isOpen={showCoins}
          onClose={() => setShowCoins(false)}
        />
      )}
    </>
  )
}
