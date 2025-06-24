import { useResponsiveSizes } from 'src/contexts/responsive'
import { DesktopBanners } from './desktop-banners'
import { MobileBanners } from './mobile-banners'

export function Banners({ currentIndex }: { currentIndex: number }) {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <MobileBanners currentIndex={currentIndex} />
  return <DesktopBanners currentIndex={currentIndex} />
}
