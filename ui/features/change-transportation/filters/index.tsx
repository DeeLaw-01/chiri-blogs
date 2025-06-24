import { useResponsiveSizes } from 'src/contexts/responsive'
import { Transport } from 'src/shared-types/transport.type'
import FiltersDesktop from './filters-desktop'
import FiltersMobile from './filters-mobile'
import { useChangeTransportationAtoms } from '../hooks/useChangeTransportationAtoms'

type ChangeTransportationfiltersProps = {
  transport: Transport
  onClose: () => void
}

export default function ChangeTransportationFilters({
  transport,
  onClose,
}: ChangeTransportationfiltersProps) {
  const { isMobile } = useResponsiveSizes()
  const { showMobileFilters } = useChangeTransportationAtoms()
  return (
    <>
      {isMobile && showMobileFilters && <FiltersMobile transport={transport} />}
      {!isMobile && <FiltersDesktop transport={transport} onClose={onClose} />}
    </>
  )
}
