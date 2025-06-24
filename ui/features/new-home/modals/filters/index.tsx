import useSearch from '../../search/hooks/useSearch'
import FiltersDrawer from './filters-drawer'
import { useResponsiveSizes } from 'src/contexts/responsive'
import FiltersModal from './filters-modal'
import { useTripAtoms } from '../../content/trip/useTripAtoms'

export type FiltersProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Filters({ isOpen, onClose }: FiltersProps) {
  const { isMobile } = useResponsiveSizes()
  const { makeSearch, resetFiltersState } = useSearch()
  const { setSortType } = useTripAtoms()

  const handleSearch = () => {
    makeSearch()
    onClose()
  }

  const handleReset = () => {
    setSortType(undefined)
    resetFiltersState()
  }

  return (
    <>
      {isMobile ? (
        <FiltersDrawer
          handleSearch={handleSearch}
          isOpen={isOpen}
          onClose={onClose}
          handleReset={handleReset}
        />
      ) : (
        <FiltersModal
          handleSearch={handleSearch}
          isOpen={isOpen}
          onClose={onClose}
          handleReset={handleReset}
        />
      )}
    </>
  )
}
