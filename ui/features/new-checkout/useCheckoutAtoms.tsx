'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { CartItem } from './hooks/useCheckoutCart/cart.type'
import { Contact, Passenger } from './checkout.type'
import { ChangesModalProps } from './modals/changes-modal'
import {
  BaggageInfo,
  Seats,
} from 'src/api/queries/get/checkout/checkFlightsQuery/check-flights.type'
import { TripDetails } from 'src/shared-types/trip-details.type'
import { Step } from './hooks/useCheckoutSteps/step.type'
import { Transport } from 'src/shared-types/transport.type'
import { HotelDetails } from 'src/shared-types/hotel-details.type'

type TransportDetailsAtom = {
  transport?: Transport
}

type AccommodationDetailsAtom = {
  accommodation?: HotelDetails
}

export const atoms = {
  trip: atom<TripDetails | null>(null),
  session: atom<string | null>(null),
  cart: atom<CartItem[]>([]),
  luggage: atom<BaggageInfo | null>(null),
  seats: atom<Seats | null>(null),
  promocode: atom<string>(''),
  passengers: atom<Passenger[]>([]),
  contact: atom<Contact | null>(null),
  step: atom<Step>(Step.Contact),
  steps: atom<Step[]>([]),
  completeModal: atom<boolean>(false),
  changesModal: atom<ChangesModalProps | null>(null),
  soldOutModal: atom<boolean>(false),
  paymentLoading: atom<boolean>(false),
  showTransportDetails: atom<TransportDetailsAtom>({}),
  showAccommodationDetails: atom<AccommodationDetailsAtom>({}),
  showEmailTrip: atom<boolean>(false),
}

export function useCheckoutAtoms() {
  const [trip, setTrip] = useAtom(atoms.trip)
  const [session, setSession] = useAtom(atoms.session)
  const [cart, setCart] = useAtom(atoms.cart)
  const [luggage, setLuggage] = useAtom(atoms.luggage)
  const [seats, setSeats] = useAtom(atoms.seats)
  const [promocode, setPromocode] = useAtom(atoms.promocode)
  const [step, setStep] = useAtom(atoms.step)
  const [steps, setSteps] = useAtom(atoms.steps)
  const [contact, setContact] = useAtom(atoms.contact)
  const [passengers, setPassengers] = useAtom(atoms.passengers)
  const [paymentLoading, setPaymentLoading] = useAtom(atoms.paymentLoading)

  const [completeModal, setCompleteModal] = useAtom(atoms.completeModal)
  const [changesModal, setChangesModal] = useAtom(atoms.changesModal)
  const [soldOutModal, setSoldOutModal] = useAtom(atoms.soldOutModal)
  const [showTransportDetails, setShowTransportDetails] = useAtom(
    atoms.showTransportDetails
  )
  const [showAccommodationDetails, setShowAccommodationDetails] = useAtom(
    atoms.showAccommodationDetails
  )
  const [showEmailTrip, setShowEmailTrip] = useAtom(atoms.showEmailTrip)

  atoms.session.onMount = (set) => {
    const onUnmount = () => set(null)
    return onUnmount
  }

  return {
    trip,
    setTrip,
    session,
    setSession,
    cart,
    setCart,
    luggage,
    setLuggage,
    seats,
    setSeats,
    promocode,
    setPromocode,
    step,
    setStep,
    steps,
    setSteps,
    passengers,
    setPassengers,
    contact,
    setContact,
    paymentLoading,
    setPaymentLoading,

    completeModal,
    setCompleteModal,
    changesModal,
    setChangesModal,
    soldOutModal,
    setSoldOutModal,
    showTransportDetails,
    setShowTransportDetails,
    showAccommodationDetails,
    setShowAccommodationDetails,
    showEmailTrip,
    setShowEmailTrip,
  }
}

export function CheckoutAtomsProvider({ children }: { children: JSX.Element }) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
