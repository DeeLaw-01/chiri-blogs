import { useResponsiveSizes } from 'src/contexts/responsive'
import FiltersDesktop from './filters-desktop'
import FiltersMobile from './filters-mobile'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'

type ChangeAccommodationFiltersProps = {
  onClose: () => void
}

export default function ChangeAccommodationFilters({
  onClose,
}: ChangeAccommodationFiltersProps) {
  const { isMobile } = useResponsiveSizes()
  const { showMobileFilters, showMap } = useChangeAccommodationAtoms()
  return (
    <>
      {isMobile && showMobileFilters && <FiltersMobile />}
      {!isMobile && !showMap && <FiltersDesktop onClose={onClose} />}
    </>
  )
}
