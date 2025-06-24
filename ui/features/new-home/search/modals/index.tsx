import dynamic from 'next/dynamic'
import { useSearchModalsAtoms } from '../hooks/useSearchModals'
import { TravelersDrawerProps } from '../mobile-search/trip-search/drawers/travelers-drawer'
import { DepartureDrawerProps } from '../mobile-search/trip-search/drawers/departure-drawer'
import { ArrivalDrawerProps } from '../mobile-search/trip-search/drawers/arrival-drawer'
import { DatesDrawerProps } from '../mobile-search/trip-search/drawers/dates-drawer'
import { StaylengthModalProps } from '../search-views/dates/selected-dates-view/staylength/staylength-modal'
import { useResponsiveSizes } from 'src/contexts/responsive'

const DynamicDepartureDrawer = dynamic<DepartureDrawerProps>(
  () =>
    import(
      'ui/features/new-home/search/mobile-search/trip-search/drawers/departure-drawer'
    )
)

const DynamicArrivalDrawer = dynamic<ArrivalDrawerProps>(
  () =>
    import(
      'ui/features/new-home/search/mobile-search/trip-search/drawers/arrival-drawer'
    )
)

const DynamicDatesDrawer = dynamic<DatesDrawerProps>(
  () =>
    import(
      'ui/features/new-home/search/mobile-search/trip-search/drawers/dates-drawer'
    )
)

const DynamicStaylengthModal = dynamic<StaylengthModalProps>(
  () =>
    import(
      'ui/features/new-home/search/search-views/dates/selected-dates-view/staylength/staylength-modal'
    )
)

const DynamicTravelersDrawer = dynamic<TravelersDrawerProps>(
  () =>
    import(
      'ui/features/new-home/search/mobile-search/trip-search/drawers/travelers-drawer'
    )
)

export default function SearchModals() {
  const { isMobile } = useResponsiveSizes()
  const {
    showDeparture,
    setShowDeparture,
    showArrival,
    setShowArrival,
    showTravelers,
    setShowTravelers,
    showDates,
    setShowDates,
    showStaylength,
    setShowStaylength,
  } = useSearchModalsAtoms()

  return (
    <>
      {isMobile && (
        <>
          <DynamicDepartureDrawer
            isOpen={showDeparture}
            onClose={() => setShowDeparture(false)}
          />

          <DynamicArrivalDrawer
            isOpen={showArrival}
            onClose={() => setShowArrival(false)}
          />
          <DynamicDatesDrawer
            isOpen={showDates}
            onClose={() => setShowDates(false)}
          />

          <DynamicTravelersDrawer
            isOpen={showTravelers}
            onClose={() => setShowTravelers(false)}
          />

          {showStaylength && (
            <DynamicStaylengthModal
              isOpen={showStaylength !== null}
              onClose={() => setShowStaylength(null)}
              handleSelect={showStaylength.handleSelect}
              dates={showStaylength.dates}
            />
          )}
        </>
      )}
    </>
  )
}
