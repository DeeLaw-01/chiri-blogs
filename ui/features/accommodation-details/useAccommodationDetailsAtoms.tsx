import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { AlternativeRoomsResponse } from 'src/api/queries/post/accommodation-rooms/rooms.type'

export type SelectedRooms = {
  position: number
  amount: number
  name: string
  mealplan?: Mealplan
  price: number
  block_id: string
  room_id: number
}

export type Mealplan =
  | ''
  | 'BREAKFAST'
  | 'ALLINCLUSIVE'
  | 'HALFBOARD'
  | 'FULLBOARD'

export type RoomFacilities = {
  facilities: { name: string }[]
}

const atoms = {
  viewOnly: atom<boolean>(false),
  selectedRooms: atom<SelectedRooms[]>([]),
  showMap: atom<boolean>(false),
  showReviews: atom<boolean>(false),
  showFacilities: atom<boolean>(false),
  showRoomFacilities: atom<RoomFacilities | null>(null),
  roomsData: atom<AlternativeRoomsResponse | undefined>(undefined),
  isRoomsDataLoading: atom<boolean>(true),
}

export function useAccommodationDetailsAtoms() {
  const [viewOnly, setViewOnly] = useAtom(atoms.viewOnly)
  const [selectedRooms, setSelectedRooms] = useAtom(atoms.selectedRooms)
  const [showMap, setShowMap] = useAtom(atoms.showMap)
  const [showReviews, setShowReviews] = useAtom(atoms.showReviews)
  const [showFacilities, setShowFacilities] = useAtom(atoms.showFacilities)
  const [showRoomFacilities, setShowRoomFacilities] = useAtom(
    atoms.showRoomFacilities
  )

  const [roomsData, setRoomsData] = useAtom(atoms.roomsData)
  const [isRoomsDataLoading, setIsRoomsDataLoading] = useAtom(
    atoms.isRoomsDataLoading
  )

  const breakfastIncluded =
    selectedRooms.length > 0
      ? selectedRooms.every((room) => room.mealplan === 'BREAKFAST')
      : false

  return {
    viewOnly,
    setViewOnly,
    selectedRooms,
    setSelectedRooms,
    breakfastIncluded,
    showMap,
    setShowMap,
    showReviews,
    setShowReviews,
    showFacilities,
    setShowFacilities,
    showRoomFacilities,
    setShowRoomFacilities,
    roomsData,
    setRoomsData,
    isRoomsDataLoading,
    setIsRoomsDataLoading,
  }
}

export function AccommodationDetailsAtomsProvider({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
