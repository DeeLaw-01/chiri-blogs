import { Box } from '@chakra-ui/react'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'
import { useAuthAtoms } from '../../useAuthAtoms'
import { useSearchParams } from 'next/navigation'

export enum AlertStatus {
  SUCCESS = 'success',
  ERROR = 'failed',
  RESET = 'password-reset',
}

export default function LoginAlerts() {
  const { status } = useAuthAtoms() // To be used on next refactor

  const searchParams = useSearchParams()
  const paramstatus = searchParams.get('confirmation_status')

  const getAlert = () => {
    switch (paramstatus) {
      case AlertStatus.SUCCESS:
        return (
          <Alert success icon>
            <Text st="common.verified.email.success" />
          </Alert>
        )
      case AlertStatus.ERROR:
        return (
          <Alert error icon>
            <Text st="common.verified.email.failed" />
          </Alert>
        )
      case AlertStatus.RESET:
        return (
          <Alert success icon>
            <Text st="common.password.reset.message" />
          </Alert>
        )
    }
  }
  return (
    <Box w="full" mt={8} mb={5} fontSize={{ base: 'xs', md: 'sm' }}>
      {getAlert()}
    </Box>
  )
}
