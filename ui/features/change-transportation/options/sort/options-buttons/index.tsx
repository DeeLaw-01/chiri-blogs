import { useResponsiveSizes } from 'src/contexts/responsive'
import OptionsButtonsDesktop from './options-buttons-desktop'
import OptionsButtonsMobile from './options-buttons-mobile'

export default function OptionsButtons() {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <OptionsButtonsMobile />
  return <OptionsButtonsDesktop />
}
