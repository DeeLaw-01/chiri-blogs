import MobileSkeleton from './mobile-skeleton'
import DesktopSkeleton from './desktop-skeleton'
import { useResponsiveSizes } from 'src/contexts/responsive'

export default function SkeletonLoading() {
  const { isMobile } = useResponsiveSizes()
  return <>{isMobile ? <MobileSkeleton /> : <DesktopSkeleton />}</>
}
