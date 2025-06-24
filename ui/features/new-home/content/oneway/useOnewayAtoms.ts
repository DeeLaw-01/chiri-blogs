'use client'

import { atom, useAtom } from 'jotai'
import {
  Modification,
  OnewayResponseType,
} from 'src/api/queries/ws/onewayWs/oneway.type'
import { OnewayTripDetails } from 'src/shared-types/oneway-response-type'
import { TripDetails } from 'src/shared-types/trip-details.type'

const atoms = {
  oneway: atom<TripDetails[]>([]),
  previousQuery: atom<{ [k: string]: any } | undefined>(undefined), // Store previous query to avoid overwriting unnecessary searches
  modification: atom<Modification[]>([]),
  onewayLoading: atom<boolean>(true),
  onewayTrips: atom<OnewayTripDetails[]>([]),
  searchType: atom<OnewayResponseType | undefined>(undefined),
  loadMore: atom<boolean>(false),
  showLoadMore: atom<boolean>(true),
}

export function useOnewayAtoms() {
  const [oneway, setOneway] = useAtom(atoms.oneway)
  const [onewayTrips, setOnewayTrips] = useAtom(atoms.onewayTrips)
  const [previousQuery, setPreviousQuery] = useAtom(atoms.previousQuery)
  const [modification, setModification] = useAtom(atoms.modification)
  const [onewayLoading, setOnewayLoading] = useAtom(atoms.onewayLoading)
  const [searchType, setSearchType] = useAtom(atoms.searchType)
  const [showLoadMore, setShowLoadMore] = useAtom(atoms.showLoadMore)
  const [loadMore, setLoadMore] = useAtom(atoms.loadMore)

  return {
    oneway,
    setOneway,
    modification,
    setModification,
    onewayLoading,
    setOnewayLoading,
    onewayTrips,
    setOnewayTrips,
    previousQuery,
    setPreviousQuery,
    searchType,
    setSearchType,
    showLoadMore,
    setShowLoadMore,
    loadMore,
    setLoadMore,
  }
}
