import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import useTranslation from 'src/hooks/useTranslation'

export default function ServerIssuesToast() {
  const toast = useToast()
  const { t } = useTranslation()

  useEffect(() => {
    toast({
      title: t('common.toast.title.server.issues'),
      position: 'bottom',
      status: 'error',
      duration: 9000,
      isClosable: true,
      description: t('common.toast.description.server.issues'),
    })
  }, [])

  return null
}
