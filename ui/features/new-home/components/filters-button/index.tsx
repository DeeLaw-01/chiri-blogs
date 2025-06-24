import { useResponsiveSizes } from 'src/contexts/responsive'
import FiltersButtonDesktop from './filters-button-desktop'
import FiltersButtonMobile from './filters-button-mobile'

export default function FiltersButton() {
  const { isMobile } = useResponsiveSizes()

  return (
    <>
      {isMobile && <FiltersButtonMobile />}
      {!isMobile && <FiltersButtonDesktop />}
    </>
  )
}
