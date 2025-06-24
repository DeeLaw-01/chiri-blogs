import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import TripSearch from '../trip-search'
import AccommodationSearch from '../accommodation-search'
import OneWaySearch from '../one-way-search'

export default function SearchView() {
  const { state } = useHomeAtoms()

  switch (state) {
    case HomeState.TRIP:
      return <TripSearch />
    case HomeState.ACCOMMODATION:
      return <AccommodationSearch />
    case HomeState.ONEWAY:
      return <OneWaySearch />
    default:
      return <></>
  }
}
