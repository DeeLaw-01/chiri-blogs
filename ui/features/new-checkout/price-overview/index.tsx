import { useResponsiveSizes } from 'src/contexts/responsive'
import DesktopPriceOverview from './desktop-overview'
import MobilePriceOverview from './mobile-overview'

export default function PriceOverview() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <MobilePriceOverview />
  return <DesktopPriceOverview />
}
