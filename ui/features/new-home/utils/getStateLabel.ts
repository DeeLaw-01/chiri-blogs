import { HomeState } from '../hooks/useHomeAtoms/types'
import GlobeIcon from '@/icons/new/travel/globe.svg'
import PlaneIcon from '@/icons/new/plane.svg'
import ArrowsRepeatIcon from '@/icons/new/arrow/arrows-repeat.svg'

export const getLabel = (state?: HomeState) => {
  switch (state) {
    case HomeState.TRIP:
      return [GlobeIcon, 'home-page.home.state.trips']
    case HomeState.ROUNDTRIP:
      return [ArrowsRepeatIcon, 'home-page.home.state.roundtrip']
    case HomeState.ONEWAY:
      return [PlaneIcon, 'home-page.home.state.oneway']
    default:
      return [null, '']
  }
}
