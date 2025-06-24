import { Box } from '@chakra-ui/react'
import { Transport } from 'src/shared-types/transport.type'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'

type TransportCardAlertsProps = {
  transport: Transport
}
export default function TransportCardAlerts({
  transport,
}: TransportCardAlertsProps) {
  return (
    <>
      {transport.info?.self_transfer && (
        <Alert info icon mb={3}>
          <Box>
            <Text
              fontWeight="medium"
              fontSize="sm"
              st="new-manage-booking-page.selfTransfer.heading"
            />

            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              mr="40px"
              st="new-manage-booking-page.selfTransfer.description"
            />
          </Box>
        </Alert>
      )}
      {transport.info?.security_again && (
        <Alert info icon mb={3}>
          <Box>
            <Text
              fontWeight="medium"
              fontSize="sm"
              st="new-manage-booking-page.security.again.heading"
            />

            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              mr="40px"
              st="new-manage-booking-page.security.again.description"
              sd={{ source: transport.origin_station_name }}
            />
          </Box>
        </Alert>
      )}
    </>
  )
}
