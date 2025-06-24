import Container from 'ui/primitives/Container'
import { useResponsiveSizes } from 'src/contexts/responsive'
import CookieConsentDesktop from './desktop'
import CookieConsentMobile from './mobile'
import ConfigurationModal from './configuration'
import { useDisclosure } from '@chakra-ui/react'
import { useCookieConsent } from 'src/contexts/cookie-consent'
import { CookiePreferences } from 'src/contexts/cookie-consent/cookie.type'

export default function CookieConsent(): JSX.Element {
  const { isMobile, isDesktop } = useResponsiveSizes()
  const { consent, setConsent } = useCookieConsent()
  const { isOpen, onClose, onOpen } = useDisclosure()

  const handleAccept = () => {
    setConsent({ functional: true, analytics: true })
  }

  const handleConfig = (pref: CookiePreferences): void => {
    setConsent(pref)
    onClose()
  }

  if (consent) return <></>

  return (
    <Container w="full">
      {isMobile && !isOpen && (
        <CookieConsentMobile handleAccept={handleAccept} openConfig={onOpen} />
      )}
      {isDesktop && !isOpen && (
        <CookieConsentDesktop handleAccept={handleAccept} openConfig={onOpen} />
      )}

      <ConfigurationModal handleConfig={handleConfig} isOpen={isOpen} />
    </Container>
  )
}
