import { Box, BoxProps } from '@chakra-ui/react'
import { TripDetailsResponseType } from 'src/api/queries/get/transportQuery/trip-details.type'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'

type TripAlertsProps = {
  trip: TripDetailsResponseType
} & BoxProps

export default function TripAlerts({ trip, ...rest }: TripAlertsProps) {
  return (
    <>
      {!trip.available_to_buy && (
        <Box {...rest}>
          <Alert warning icon mb={2}>
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              st="new-trip-page:alert.trip.expired"
            />
          </Alert>
        </Box>
      )}
    </>
  )
}
