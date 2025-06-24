import { useResponsiveSizes } from 'src/contexts/responsive'
import SearchPillMobile from './search-pill-mobile'
import SearchPillDesktop from './search-pill-desktop'

export default function SearchPill() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <SearchPillMobile />
  return <SearchPillDesktop />
}
