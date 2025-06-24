import MobileDrawerButton from './mobile-drawer-button'
import FilterIcon from '@/icons/new/filters/filter.svg'
import MapIcon from '@/icons/new/map/map.svg'
import SortIcon from '@/icons/new/arrow/arrow-up-down.svg'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'
import Text from 'ui/primitives/Text'

export default function OptionsButtonsMobile() {
  const { setShowMobileFilters, setShowMap, setShowSort, showSort } =
    useChangeAccommodationAtoms()

  return (
    <>
      <MobileDrawerButton
        isActive={showSort}
        icon={SortIcon}
        onClick={() => setShowSort(true)}
      >
        <Text st="common.general.sort" notag />
      </MobileDrawerButton>
      <MobileDrawerButton
        icon={FilterIcon}
        onClick={() => setShowMobileFilters(true)}
      >
        <Text st="common.filters" notag />
      </MobileDrawerButton>
      <MobileDrawerButton onClick={() => setShowMap(true)} icon={MapIcon}>
        <Text st="hotel-info:summary.map" notag />
      </MobileDrawerButton>
    </>
  )
}
