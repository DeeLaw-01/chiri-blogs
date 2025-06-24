import dynamic from 'next/dynamic'
import { useHomeModals } from '../hooks/useHomeModals'
import { FiltersModalProps } from './filters'
import { MobileSearchDrawerProps } from './mobile-search-drawer'

const DynamicFiltersModal = dynamic<FiltersModalProps>(
  () => import('ui/features/new-home/modals/filters')
)

const DynamicMobileSearchDrawer = dynamic<MobileSearchDrawerProps>(
  () => import('ui/features/new-home/modals/mobile-search-drawer')
)

export default function HomeModals() {
  const { showFilters, setShowFilters, showMobileSearch, setShowMobileSearch } =
    useHomeModals()

  return (
    <>
      <DynamicFiltersModal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
      <DynamicMobileSearchDrawer
        isOpen={showMobileSearch}
        onClose={() => setShowMobileSearch(false)}
      />
    </>
  )
}
