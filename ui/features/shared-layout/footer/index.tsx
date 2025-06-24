'use client'

import { useResponsiveSizes } from 'src/contexts/responsive'
import FooterMobile from './footer-mobile'
import FooterDesktop from './footer-desktop'
import useTranslation from 'src/hooks/useTranslation'
import Container from 'ui/primitives/Container'
import Newsletter from '../newsletter'

export default function Footer() {
  const { isMobile } = useResponsiveSizes()
  const { t } = useTranslation()
  const phone = t('footer.contact.phone').replace(/ /g, '')

  return (
    <>
      <Newsletter />
      <Container mt={10} pb={{ base: 14, md: 0 }}>
        {isMobile ? (
          <FooterMobile phone={phone} />
        ) : (
          <FooterDesktop phone={phone} />
        )}
      </Container>
    </>
  )
}
