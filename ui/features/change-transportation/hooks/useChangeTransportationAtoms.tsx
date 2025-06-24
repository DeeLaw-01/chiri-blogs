'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import {
  ChangeTransport,
  ChangeTransportResponseType,
} from 'src/shared-types/change-transport.type'
import { Transport } from 'src/shared-types/transport.type'
import { DateItemType } from '../header/change-transportation-dates'
import { SortType } from '../utils/getSortedOptions'
import { ChangeTransportationSortType } from '../options/sort/sort-options'

export type Filters = {
  stops: string
  departure: string
  arrival: string
  carriers: string[]
  mode: string
  date?: string
}

type ConfirmAtoms = {
  transport?: ChangeTransport
}

type ShowDetailsAtoms = {
  transport?: Transport
}

export const initialFilters = {
  stops: '',
  departure: '',
  arrival: '',
  carriers: [],
  mode: '',
}

export type ChangeTransportationDataAtomType = {
  transports?: ChangeTransportResponseType
  isLoading: boolean
  error: boolean
  isValidating: boolean
}

const atoms = {
  data: atom<ChangeTransportationDataAtomType | undefined>(undefined),
  availableDates: atom<DateItemType[] | undefined>(undefined),
  sortType: atom<SortType>({
    type: ChangeTransportationSortType.RECOMMENDED,
    asc: true,
  }),
  filters: atom<Filters>(initialFilters),
  showConfirm: atom<ConfirmAtoms>({}),
  showDetails: atom<ShowDetailsAtoms>({}),
  showMobileFilters: atom<boolean>(false),
  showSort: atom<boolean>(false),
}

export function useChangeTransportationAtoms() {
  const [data, setData] = useAtom(atoms.data)
  const [availableDates, setAvailableDates] = useAtom(atoms.availableDates)
  const [sortType, setSortType] = useAtom(atoms.sortType)
  const [filters, setFilters] = useAtom(atoms.filters)

  const resetFilters = () => setFilters(initialFilters)

  // Modals
  const [showConfirm, setShowConfirm] = useAtom(atoms.showConfirm)
  const [showDetails, setShowDetails] = useAtom(atoms.showDetails)
  const [showMobileFilters, setShowMobileFilters] = useAtom(
    atoms.showMobileFilters
  )
  const [showSort, setShowSort] = useAtom(atoms.showSort)

  return {
    data,
    setData,
    availableDates,
    setAvailableDates,
    sortType,
    setSortType,
    filters,
    setFilters,
    resetFilters,

    // Modals
    showConfirm,
    setShowConfirm,
    showDetails,
    setShowDetails,
    showMobileFilters,
    setShowMobileFilters,
    showSort,
    setShowSort,
  }
}

export function ChangeTransportationAtomsProvider({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
