import { useTripAtoms } from '../useTripAtoms'

import { useResponsiveSizes } from 'src/contexts/responsive'
import LoadMoreButton from 'ui/features/new-home/components/load-more-button'
import Text from 'ui/primitives/Text'

export default function LoadMore() {
  const { tripsLoading, showLoadMore, setLoadMore, trips } = useTripAtoms()
  const { isMobile } = useResponsiveSizes()

  if (!showLoadMore || tripsLoading || !trips?.length) return <></>

  return (
    <LoadMoreButton onClick={() => setLoadMore(true)}>
      {isMobile ? (
        <Text st="common.create.more" notag />
      ) : (
        <Text st="common.see.more.trips" notag />
      )}
    </LoadMoreButton>
  )
}
