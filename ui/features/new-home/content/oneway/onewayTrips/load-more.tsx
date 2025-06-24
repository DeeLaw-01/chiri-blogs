import { useResponsiveSizes } from 'src/contexts/responsive'
import LoadMoreButton from 'ui/features/new-home/components/load-more-button'
import Text from 'ui/primitives/Text'
import { useOnewayAtoms } from '../useOnewayAtoms'

export default function LoadMore() {
  const { onewayLoading, showLoadMore, onewayTrips, setLoadMore } =
    useOnewayAtoms()
  const { isMobile } = useResponsiveSizes()

  if (!showLoadMore || onewayLoading || !onewayTrips?.length) return <></>

  return (
    <LoadMoreButton onClick={() => setLoadMore(true)} minH={'12rem'}>
      {isMobile ? (
        <Text st="common.create.more" notag />
      ) : (
        <Text st="common.see.more.trips" notag />
      )}
    </LoadMoreButton>
  )
}
