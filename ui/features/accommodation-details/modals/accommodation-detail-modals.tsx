import dynamic from 'next/dynamic'

import { HotelDetails } from 'src/shared-types/hotel-details.type'

import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'

const DynamicAccommodationDetailsMapModal = dynamic(
  () =>
    import('ui/features/accommodation-details/modals/accommodation-map-modal')
)

const DynamicFacilitiesModal = dynamic(
  () => import('ui/features/accommodation-details/modals/facilities-modal')
)

const DynamicReviewsModal = dynamic(
  () => import('ui/features/accommodation-details/modals/reviews-modal')
)

type AccommodationDetailModalsProps = {
  hotel: HotelDetails
}

export default function AccommodationDetailModals({
  hotel,
}: AccommodationDetailModalsProps) {
  const {
    showMap,
    setShowMap,
    showReviews,
    setShowReviews,
    showFacilities,
    setShowFacilities,
    showRoomFacilities,
    setShowRoomFacilities,
    roomsData,
  } = useAccommodationDetailsAtoms()

  return (
    <>
      {showMap && (
        <DynamicAccommodationDetailsMapModal
          isOpen={showMap}
          onClose={() => setShowMap(false)}
          hotel={hotel}
        />
      )}
      <DynamicFacilitiesModal
        isOpen={showFacilities}
        onClose={() => setShowFacilities(false)}
      />
      {showRoomFacilities && (
        <DynamicFacilitiesModal
          isOpen={!!showRoomFacilities}
          onClose={() => setShowRoomFacilities(null)}
          facilities={showRoomFacilities.facilities}
        />
      )}
      <DynamicReviewsModal
        isOpen={showReviews}
        onClose={() => setShowReviews(false)}
        reviews={roomsData?.reviews}
        rating={{ word: hotel.review_score_word, score: hotel.review_score }}
      />
    </>
  )
}
