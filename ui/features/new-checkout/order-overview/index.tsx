import { useResponsiveSizes } from 'src/contexts/responsive'
import MobileOrderOverview from './mobile-overview'
import DesktopOrderOverview from './desktop-overview'

export default function OrderOverview() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <MobileOrderOverview />
  return <DesktopOrderOverview />
}
