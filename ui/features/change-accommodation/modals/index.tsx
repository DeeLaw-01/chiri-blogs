import dynamic from 'next/dynamic'
import { useChangeAccommodationAtoms } from '../useChangeAccommodationAtoms'

const DynamicMobileSortDrawer = dynamic(() => import('./mobile-sort-view'), {
  ssr: false,
})

export default function ChangeAccommodationModals() {
  const { showSort, setShowSort } = useChangeAccommodationAtoms()

  return (
    <>
      {showSort && (
        <DynamicMobileSortDrawer
          isOpen={showSort}
          onClose={() => setShowSort(false)}
        />
      )}
    </>
  )
}
