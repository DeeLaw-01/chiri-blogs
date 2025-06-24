import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useTranslation from './useTranslation'

interface IUseUserOnline {
  isUserOnline: boolean
}

export default function useUserOnline(): IUseUserOnline {
  const toast = useToast()
  const { t } = useTranslation()
  const [isUserOnline, setUserOnline] = useState<boolean>(false)

  useEffect(() => {
    const onSuccess = (): void => {
      toast({
        title: t('common.user.message.online'),
        status: 'success',
      })
      setUserOnline(true)
    }

    const onError = (): void => {
      toast({
        title: t('common.user.message.offline'),
        status: 'error',
      })
      setUserOnline(false)
    }

    window.addEventListener('online', onSuccess)
    window.addEventListener('offline', onError)

    return () => {
      window.removeEventListener('online', onSuccess)
      window.removeEventListener('offline', onError)
    }
  }, [])

  return { isUserOnline }
}
