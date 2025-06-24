import { Box } from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import SmallAccommodationCardSkeleton from './accommodation-small/accommodation-small-skeleton'
import BigAccommodationCardSkeleton from './accommodation-big/accommodation-big-skeleton'

type AccommodationSkeletonProps = {
  count: number
}

export default function AccommodationSkeleton({
  count,
}: AccommodationSkeletonProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <Box w="full">
      {[...Array(count)].map((_, idx) => {
        if (isMobile) return <SmallAccommodationCardSkeleton key={idx} />
        else return <BigAccommodationCardSkeleton key={idx} />
      })}
    </Box>
  )
}
