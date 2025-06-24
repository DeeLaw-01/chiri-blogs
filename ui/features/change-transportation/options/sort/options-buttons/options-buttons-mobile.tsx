import MobileDrawerButton from 'ui/features/change-accommodation/options-buttons/mobile-drawer-button'
import SortIcon from '@/icons/new/arrow/arrow-up-down.svg'
import FilterIcon from '@/icons/new/filters/filter.svg'
import Text from 'ui/primitives/Text'
import { useChangeTransportationAtoms } from 'ui/features/change-transportation/hooks/useChangeTransportationAtoms'

export default function OptionsButtonsMobile() {
  const { setShowMobileFilters, showSort, setShowSort } =
    useChangeTransportationAtoms()
  return (
    <>
      <MobileDrawerButton
        isActive={showSort}
        icon={SortIcon}
        w={'full'}
        onClick={() => setShowSort(true)}
      >
        <Text st="common.general.sort" notag />
      </MobileDrawerButton>
      <MobileDrawerButton
        w={'full'}
        icon={FilterIcon}
        onClick={() => setShowMobileFilters(true)}
      >
        <Text st="common.filters" notag />
      </MobileDrawerButton>
    </>
  )
}
