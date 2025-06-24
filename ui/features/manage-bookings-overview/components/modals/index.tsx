import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import FindBooking from './find-booking'

export default function OverviewModals() {
  const { showFindBooking, setShowFindBooking } = useManageBookingAtoms()
  return (
    <>
      {showFindBooking && (
        <FindBooking
          isOpen={showFindBooking}
          onClose={() => setShowFindBooking(false)}
        />
      )}
    </>
  )
}
