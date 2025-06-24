import { useResponsiveSizes } from 'src/contexts/responsive'
import OptionsButtonsMobile from './options-buttons-mobile'
import OptionsButtonsDesktop from './options-buttons-desktop'

export default function OptionsButtons() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <OptionsButtonsMobile />
  return <OptionsButtonsDesktop />
}
