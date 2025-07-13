'use client'

import { atom, useAtom } from 'jotai'
import initialStates from './initialStates'
import { TripFilters, TripSearch } from './types/trip.types'
import {
  AccommodationFilters,
  AccommodationSearch
} from './types/accommodation.types'
import { Filters, Search } from './types'
import { OnewayFilters, OnewaySearch } from './types/oneway.types'

const atoms = {
  tripSearch: atom<TripSearch | undefined>(undefined),
  tripFilters: atom<TripFilters>(initialStates.tripFilters),
  roundtripSearch: atom<TripSearch>(initialStates.roundtripSearch),
  roundtripFilters: atom<TripFilters>(initialStates.roundtripFilters),
  onewaySearch: atom<OnewaySearch>(initialStates.onewaySearch),
  onewayFilters: atom<OnewayFilters>(initialStates.onewayFilters),
  accommodationSearch: atom<AccommodationSearch>(
    initialStates.accommodationSearch
  ),
  accommodationFilters: atom<AccommodationFilters>(
    initialStates.accommodationFilters
  )
}

export function useSearchAtoms () {
  const [tripSearch, setTripSearch] = useAtom(atoms.tripSearch)
  const [tripFilters, setTripFilters] = useAtom(atoms.tripFilters)
  const resetTripFilters = () => setTripFilters(initialStates.tripFilters)
  const resetTripSearch = () => setTripSearch(initialStates.tripSearch)

  const [roundtripSearch, setRoundtripSearch] = useAtom(atoms.roundtripSearch)
  const [roundtripFilters, setRoundtripFilters] = useAtom(
    atoms.roundtripFilters
  )
  const resetRoundtripFilters = () =>
    setRoundtripFilters(initialStates.roundtripFilters)
  const resetRoundtripSearch = () =>
    setRoundtripSearch(initialStates.roundtripSearch)

  const [onewaySearch, setOnewaySearch] = useAtom(atoms.onewaySearch)
  const [onewayFilters, setOnewayFilters] = useAtom(atoms.onewayFilters)
  const resetOneWayFilters = () => setOnewayFilters(initialStates.onewayFilters)
  const resetOnewaySearch = () => setOnewaySearch(initialStates.onewaySearch)

  const [accommodationSearch, setAccommodationSearch] = useAtom(
    atoms.accommodationSearch
  )
  const [accommodationFilters, setAccommodationFilters] = useAtom(
    atoms.accommodationFilters
  )
  const resetAccommodationFilters = () =>
    setAccommodationFilters(initialStates.accommodationFilters)
  const resetAccommodationSearch = () =>
    setAccommodationSearch(initialStates.accommodationSearch)

  const search: Search = {
    trip: tripSearch,
    roundtrip: roundtripSearch,
    accommodation: accommodationSearch,
    oneway: onewaySearch
  }

  const filters: Filters = {
    trip: tripFilters,
    roundtrip: roundtripFilters,
    accommodation: accommodationFilters,
    oneway: onewayFilters
  }

  return {
    tripSearch,
    setTripSearch,
    tripFilters,
    setTripFilters,
    resetTripFilters,
    resetTripSearch,

    roundtripSearch,
    setRoundtripSearch,
    roundtripFilters,
    setRoundtripFilters,
    resetRoundtripFilters,
    resetRoundtripSearch,

    onewaySearch,
    setOnewaySearch,
    onewayFilters,
    setOnewayFilters,
    resetOneWayFilters,
    resetOnewaySearch,

    accommodationSearch,
    setAccommodationSearch,
    accommodationFilters,
    setAccommodationFilters,
    resetAccommodationFilters,
    resetAccommodationSearch,

    search,
    filters
  }
}
