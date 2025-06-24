'use client'

import { atom, useAtom } from 'jotai'
import { PackageDetails } from 'src/shared-types/package-details.type'
import { TripModification } from 'src/api/queries/ws/tripWs/trip.type'
import { SortTripType } from '../../search/hooks/useSearchAtoms/types'
import { ScopeProvider } from 'jotai-scope'

const atoms = {
  trips: atom<PackageDetails[]>([]),
  loadMore: atom<boolean>(false), // A boolean used to trigger a "load-more" search in useTripEffects
  showLoadMore: atom<boolean>(true),
  tripsLoading: atom<boolean>(true),
  tripsModification: atom<TripModification[]>([]),
  previousQuery: atom<{ [k: string]: any } | undefined>(undefined), // Store previous query to avoid overwriting unnecessary searches
  sortType: atom<SortTripType | undefined>(undefined),
}

export function useTripAtoms() {
  const [trips, setTrips] = useAtom(atoms.trips)
  const [showLoadMore, setShowLoadMore] = useAtom(atoms.showLoadMore)
  const [loadMore, setLoadMore] = useAtom(atoms.loadMore)
  const [tripsLoading, setTripsLoading] = useAtom(atoms.tripsLoading)
  const [tripsModification, setTripsModification] = useAtom(
    atoms.tripsModification
  )
  const [sortType, setSortType] = useAtom(atoms.sortType)

  const [previousQuery, setPreviousQuery] = useAtom(atoms.previousQuery)

  return {
    trips,
    setTrips,
    showLoadMore,
    setShowLoadMore,
    loadMore,
    setLoadMore,
    tripsLoading,
    setTripsLoading,
    tripsModification,
    setTripsModification,
    sortType,
    setSortType,
    previousQuery,
    setPreviousQuery,
  }
}

export function TripAtomsProvider({ children }: { children: JSX.Element }) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
