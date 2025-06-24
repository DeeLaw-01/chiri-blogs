import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import useHistory from 'src/hooks/useHistory'
import { useRouter } from 'src/i18n/router'

export default function BackButton() {
  const router = useRouter()
  const { history, back } = useHistory()

  const handleGoBack = (): void => {
    const paths = ['/packages', '/checkout']

    const isInvalid = (url: string) => paths.some((p) => url.includes(p))

    const prev = history[history.length - 2]

    if (prev && !isInvalid(prev)) back()
    else if (history.length === 1) router.push('/')
    else router.push(history.findLast((item) => !isInvalid(item)) ?? '/')
  }
  return (
    <CircleIconWrapper bg="_white" onClick={handleGoBack}>
      <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
    </CircleIconWrapper>
  )
}
