import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import LeftIcon from '@/icons/shared/left-icon.svg'
import theme from 'src/styles/theme'
import useHistory from 'src/hooks/useHistory'
import { useRouter } from 'app/router'

export default function BackButton() {
  const router = useRouter()
  const { history, back } = useHistory()

  const handleGoBack = (): void => {
    const prev = history[history.length - 1]
    if (!prev.includes('/packages')) {
      router.back()
    } else {
      if (history.length === 1) router.push('/')
      back()
    }
  }
  return (
    <CircleIconWrapper
      bg="_white"
      onClick={handleGoBack}
      w="fit-content"
      my="5"
    >
      <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
    </CircleIconWrapper>
  )
}
