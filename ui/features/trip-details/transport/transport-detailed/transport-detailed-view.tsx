import { Box } from '@chakra-ui/react'
import { Transport } from 'src/shared-types/transport.type'
import TransportDetailedHeader from './transport-detailed-header'
import TransportLinedVStack from './transport-lined-vstack'
import LayoverAlert from './alerts/layover'
import TransportDetailedAlerts from './alerts'
import { getTransportSegments } from 'ui/features/new-checkout/utils/getTransportSegments'

type TransportDetailedViewProps = {
  transport: Transport
}

export default function TransportDetailedView({
  transport,
}: TransportDetailedViewProps) {
  const getTransportationArray = (): Transport[] =>
    transport.complete_itinerary.length > 0
      ? getTransportSegments(transport.complete_itinerary)
      : [transport]

  return (
    <Box w="full" mb="3">
      <TransportDetailedHeader transport={transport} />
      {getTransportationArray().map((transport, idx: number) => {
        return (
          <Box key={idx} px={4} pb={2}>
            <TransportDetailedAlerts transport={transport} />
            <TransportLinedVStack transport={transport} />
            {transport.layover_duration && (
              <LayoverAlert
                layover={{
                  destination: transport.destination,
                  duration: transport.layover_duration,
                }}
              />
            )}
          </Box>
        )
      })}
    </Box>
  )
}
