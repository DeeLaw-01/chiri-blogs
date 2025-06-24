import { calc } from '@chakra-ui/react'
import { Transport } from 'src/shared-types/transport.type'
import Alert from 'ui/primitives/Alert'
import Text from 'ui/primitives/Text'

type SecurityAgainAlertProps = {
  transport: Transport
}

export default function SecurityAgainAlert({
  transport,
}: SecurityAgainAlertProps) {
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
        st="flight-info.security.again.description"
        sd={{ source: transport.origin_station_name }}
      />
    </Alert>
  )
}
