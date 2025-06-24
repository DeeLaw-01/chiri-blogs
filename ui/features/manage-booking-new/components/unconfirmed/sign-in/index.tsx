import { useResponsiveSizes } from 'src/contexts/responsive'
import SignInMobile from './mobile'
import SignInDesktop from './desktop'

export default function SignIn() {
  const { isMobile } = useResponsiveSizes()

  return (
    <>
      {isMobile && <SignInMobile />}
      {!isMobile && <SignInDesktop />}
    </>
  )
}
