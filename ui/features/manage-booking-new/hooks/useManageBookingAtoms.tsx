'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { TransportBookingData } from '../types/itinerary.type'
import { BookingType } from '../types/booking.type'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type showBoardingPassAtoms = {
  transport: TransportBookingData
}

type showAccommodationBookingAtoms = {
  accommodation: HotelDetails
}

const atoms = {
  email: atom<string>(''),
  bookingId: atom<string>(''),
  booking: atom<BookingType | undefined>(undefined),
  loading: atom<boolean>(false),

  // Modals
  showBoardingPass: atom<showBoardingPassAtoms | undefined>(undefined),
  showMissingFields: atom<boolean>(false),
  showRefund: atom<boolean>(false),
  showEditDetails: atom<boolean>(false),
  showAccommodationBooking: atom<showAccommodationBookingAtoms | undefined>(
    undefined
  ),
  showFindBooking: atom<boolean>(false),
  showQuestionnaire: atom<boolean>(false),
}

export function useManageBookingAtoms() {
  const [booking, setBooking] = useAtom(atoms.booking)
  const [loading, setLoading] = useAtom(atoms.loading)

  // Modals
  const [showBoardingPass, setShowBoardingPass] = useAtom(
    atoms.showBoardingPass
  )
  const [showMissingFields, setShowMissingFields] = useAtom(
    atoms.showMissingFields
  )
  const [showRefund, setShowRefund] = useAtom(atoms.showRefund)
  const [showEditDetails, setShowEditDetails] = useAtom(atoms.showEditDetails)

  const [showAccommodationBooking, setShowAccommodationBooking] = useAtom(
    atoms.showAccommodationBooking
  )

  const [showFindBooking, setShowFindBooking] = useAtom(atoms.showFindBooking)
  const [showQuestionnaire, setShowQuestionnaire] = useAtom(
    atoms.showQuestionnaire
  )

  return {
    booking,
    setBooking,
    loading,
    setLoading,

    // Modals
    showBoardingPass,
    setShowBoardingPass,
    showMissingFields,
    setShowMissingFields,
    showRefund,
    setShowRefund,
    showEditDetails,
    setShowEditDetails,
    showAccommodationBooking,
    setShowAccommodationBooking,
    showFindBooking,
    setShowFindBooking,
    showQuestionnaire,
    setShowQuestionnaire,
  }
}

export function ManageBookingAtomsProvider({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
