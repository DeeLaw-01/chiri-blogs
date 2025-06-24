import { Transport } from 'src/shared-types/transport.type'
import SelfTransferAlert from './self-transfer'
import SecurityAgainAlert from './security-again'
import { VStack } from '@chakra-ui/react'

type TransportDetailedAlertsProps = {
  transport: Transport
}

export default function TransportDetailedAlerts({
  transport,
}: TransportDetailedAlertsProps) {
  return (
    <VStack>
      {transport.info?.self_transfer && (
        <SelfTransferAlert info={transport.info} />
      )}
      {transport.info?.security_again && (
        <SecurityAgainAlert transport={transport} />
      )}
    </VStack>
  )
}
