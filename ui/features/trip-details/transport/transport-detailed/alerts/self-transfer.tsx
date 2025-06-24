import { calc } from '@chakra-ui/react'
import { TransportInfo } from 'src/shared-types/transport.type'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type SelfTransferAlertProps = {
  info: TransportInfo
}

export default function SelfTransferAlert({ info }: SelfTransferAlertProps) {
  return (
    <Alert
      error
      fontSize="xs"
      width={calc('100%').subtract('55px').toString()}
      ml={'55px'}
      p="1"
      px="2"
    >
      <Text
        st="flight-info:self.transfer"
        sd={{
          origin: info.self_transfer.from,
          destination: info.self_transfer.to,
        }}
      />
    </Alert>
  )
}
