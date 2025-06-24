'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { FiltersType } from 'src/api/queries/get/change-accommodation/types'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { ChangeAccommodationSortType } from './options/sort/sort-data'
import { SortType } from '../change-transportation/utils/getSortedOptions'

export type Filters = {
  best_deals?: string
  budget_min?: string
  budget_max?: string
  mealplan?: string
  stars?: string[]
  amenities?: string[]
  score?: string
  type?: string
  distance?: string
  search?: string
  top_left_coordinate: MapCoordinate
  bottom_right_coordinate: MapCoordinate
}

type MapCoordinate = { lat?: string; lon?: string }

export const initialFilters = {
  best_deals: '',
  mealplan: '',
  score: '',
  stars: [],
  distance: '',
  type: '',
  amenities: [],
  search: '',
  top_left_coordinate: { lat: undefined, long: undefined },
  bottom_right_coordinate: { lat: undefined, long: undefined },
}

export type ChangeAccommodationDataAtomType = {
  accommodations: HotelDetails[]
  filters: FiltersType
  hasMoreHotels: boolean
  isLoading: boolean
  error: boolean
  isValidating: boolean
}

const atoms = {
  data: atom<ChangeAccommodationDataAtomType | null>(null),
  filters: atom<Filters>(initialFilters),
  hoverItem: atom<string>(''),
  grid: atom<boolean>(false),
  sortType: atom<SortType>({
    type: ChangeAccommodationSortType.Recommended,
    asc: true,
  }),
  showMobileFilters: atom<boolean>(false),
  showMap: atom<boolean>(false),
  showSort: atom<boolean>(false),
  filtersSortValue: atom<ChangeAccommodationSortType>(
    ChangeAccommodationSortType.Recommended
  ),
}

export function useChangeAccommodationAtoms() {
  const [data, setData] = useAtom(atoms.data)
  const [filters, setFilters] = useAtom(atoms.filters)
  const [grid, setGrid] = useAtom(atoms.grid)
  const [sortType, setSortType] = useAtom(atoms.sortType)
  const [hoverItem, setHoverItem] = useAtom(atoms.hoverItem)

  const resetFilters = () => setFilters(initialFilters)

  // Modals & views
  const [showMobileFilters, setShowMobileFilters] = useAtom(
    atoms.showMobileFilters
  )
  const [showMap, setShowMap] = useAtom(atoms.showMap)
  const [showSort, setShowSort] = useAtom(atoms.showSort)

  const [filtersSortValue, setFiltersSortValue] = useAtom(
    atoms.filtersSortValue
  )

  return {
    data,
    setData,
    filters,
    setFilters,
    resetFilters,
    grid,
    setGrid,
    sortType,
    setSortType,
    hoverItem,
    setHoverItem,
    filtersSortValue,
    setFiltersSortValue,

    // Modals & views
    showMobileFilters,
    setShowMobileFilters,
    showMap,
    setShowMap,
    showSort,
    setShowSort,
  }
}

export function ChangeAccommodationAtomsProvider({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
