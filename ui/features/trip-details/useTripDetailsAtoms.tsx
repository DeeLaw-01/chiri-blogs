'use client'

import { atom, Getter, useAtom } from 'jotai'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { Transport } from 'src/shared-types/transport.type'
import { Content } from './city-view/city-view-modal'
import { City } from 'src/api/queries/get/cityQuery/city.type'
import { ScopeProvider } from 'jotai-scope'
import { TripDetails } from 'src/shared-types/trip-details.type'

type HotelDetailsAtom = {
  hotel?: HotelDetails
  addStayButton?: boolean
}

type TransportDetailsAtom = {
  transport?: Transport
}

type CityViewAtom = {
  content?: Content
}

export type TripDataAtomType = {
  data: TripDetails | null
  isLoading: boolean
  error: boolean
  isValidating: boolean
}

type CityInfoAtom = (City & { visited: boolean })[]

function getFilteredItinerary<T>(
  get: Getter,
  type: 'transport' | 'accommodation'
): T[] {
  return (
    get(atoms.trip)
      .data?.itinerary.filter((item) => item.type === type)
      .filter((item) => item.content.is_selected)
      .map((item) => item.content as T) || []
  )
}

const atoms = {
  isAccommodationAdded: atom<boolean | null>(null),
  hotelsLoading: atom<boolean>(false),
  showMap: atom<boolean>(false),
  showCoins: atom<boolean>(false),
  showHotelDetails: atom<HotelDetailsAtom>({}),
  showChangeAccommodation: atom<HotelDetailsAtom>({}),
  showTransportDetails: atom<TransportDetailsAtom>({}),
  showChangeTransportation: atom<TransportDetailsAtom>({}),
  showTripScore: atom<boolean>(false),
  showChangeTravelers: atom<boolean>(false),
  showCityView: atom<CityViewAtom>({}),
  accommodationCheckedTrips: atom<string[]>([]),
  showRemoveAccommodation: atom<boolean>(false),
  cityInfo: atom<CityInfoAtom>([]),
  showLuggageInfo: atom<boolean>(false),
  trip: atom<TripDataAtomType>({
    data: null,
    isLoading: true,
    error: false,
    isValidating: false,
  }),
  transportations: atom<Transport[]>((get): Transport[] => {
    return getFilteredItinerary<Transport>(get, 'transport')
  }),
  accommodations: atom<HotelDetails[]>((get): HotelDetails[] => {
    return getFilteredItinerary<HotelDetails>(get, 'accommodation')
  }),
}

export function useTripDetailsAtoms() {
  const [cityInfo, setCityInfo] = useAtom(atoms.cityInfo)

  const [showCityView, setShowCityView] = useAtom(atoms.showCityView)

  const [showRemoveAccommodation, setShowRemoveAccommodation] = useAtom(
    atoms.showRemoveAccommodation
  )
  const [isAccommodationAdded, setIsAccommodationAdded] = useAtom(
    atoms.isAccommodationAdded
  )
  const [hotelsLoading, setHotelsLoading] = useAtom(atoms.hotelsLoading)

  const [showMap, setShowMap] = useAtom(atoms.showMap)
  const [showCoins, setShowCoins] = useAtom(atoms.showCoins)
  const [showHotelDetails, setShowHotelDetails] = useAtom(
    atoms.showHotelDetails
  )
  const [showChangeAccommodation, setShowChangeAccommodation] = useAtom(
    atoms.showChangeAccommodation
  )
  const [showTransportDetails, setShowTransportDetails] = useAtom(
    atoms.showTransportDetails
  )

  const [showChangeTransportation, setShowChangeTransportation] = useAtom(
    atoms.showChangeTransportation
  )

  const [showTripScore, setShowTripScore] = useAtom(atoms.showTripScore)
  const [showLuggageInfo, setShowLuggageInfo] = useAtom(atoms.showLuggageInfo)
  const [showChangeTravelers, setShowChangeTravelers] = useAtom(
    atoms.showChangeTravelers
  )

  const [trip, setTrip] = useAtom(atoms.trip)
  const [transportations] = useAtom(atoms.transportations)
  const [accommodations] = useAtom(atoms.accommodations)

  return {
    isAccommodationAdded,
    setIsAccommodationAdded,
    hotelsLoading,
    setHotelsLoading,
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
    cityInfo,
    setCityInfo,
    showLuggageInfo,
    setShowLuggageInfo,
    trip,
    setTrip,
    transportations,
    accommodations,
  }
}

export function TripDetailsAtomsProvider({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
