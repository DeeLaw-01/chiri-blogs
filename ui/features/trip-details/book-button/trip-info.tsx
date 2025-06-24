import { Box, BoxProps, Grid } from '@chakra-ui/react'
import { TripDetails } from 'src/shared-types/trip-details.type'
import LocationIcon from '@/icons/location-pin.svg'
import FlightIcon from '@/icons/transport/flight-icon.svg'
import BedIcon from '@/icons/trip-details-page/bed-icon.svg'
import CalendarIcon from '@/icons/multi-step/calendar.svg'
import theme from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import CoinsText from './coins-text'

interface TripInfoProps extends BoxProps {
  trip: TripDetails
  price: number
}

function TripInfo({ trip, price, ...rest }: TripInfoProps) {
  const formatDate = useFormattedDate()
  const { accommodations, transportations } = useTripDetailsAtoms()

  const returnTransport = trip.itinerary.slice(-1)[0].content.is_selected

  return (
    <Grid
      my={4}
      rowGap={1}
      columnGap={2}
      fontSize="sm"
      color="_darkgray"
      templateColumns="auto 1fr"
      {...rest}
    >
      <Box mt="1">
        <LocationIcon fill={theme.colors._gray} width="14" height="14" />
      </Box>

      {returnTransport ? (
        <Text
          st="new-trip-page.included.roundtrip"
          sd={{ origin: trip.itinerary.slice(-1)[0].content.destination }}
        />
      ) : (
        <Text
          st="new-trip-page.included.oneway"
          sd={{ origin: trip.itinerary[0]?.content.destination }}
        />
      )}

      <Box mt="0.5">
        <FlightIcon stroke={theme.colors._gray} width="15" height="15" />
      </Box>
      <Text st="new-trip-page:included.transport" />

      {!!accommodations.length && (
        <>
          <Box mt="1">
            <BedIcon stroke={theme.colors._gray} width="15" height="15" />
          </Box>
          {accommodations.length === transportations.length - 1 ? (
            <Text st="new-trip-page:included.accommodation" />
          ) : (
            <Text
              st="new-trip-page.included.accommodation.partial"
              sd={{
                cities: accommodations.map((value) => value.city).join(', '),
              }}
            />
          )}
        </>
      )}

      <Box mt="0.5">
        <CalendarIcon stroke={theme.colors._gray} width="15" height="15" />
      </Box>
      <Text>{`${formatDate(trip.start_date, false)} - ${formatDate(
        trip.end_date,
        false
      )}`}</Text>
      <CoinsText price={price} />
    </Grid>
  )
}
export default TripInfo
