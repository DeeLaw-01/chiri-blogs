import { usePathname } from 'src/i18n/router'
import isTransparent from '../utils/isTransparent'
import theme from 'src/styles/theme'
import { AppProgressBar } from 'next-nprogress-bar'

export default function LoadingProgressBar() {
  const pathname = usePathname()
  const transparent = isTransparent(pathname)

  if (pathname === '/') return <></>
  return (
    <AppProgressBar
      shallowRouting
      height="4px"
      options={{ showSpinner: false }}
      color={transparent ? theme.colors._white : theme.colors.primary}
    />
  )
}
