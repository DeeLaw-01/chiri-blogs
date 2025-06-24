import { Box, VStack } from '@chakra-ui/react'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import TransportOrderDetail from './transport'
import AccommodationOrderDetail from './accommodation'
import { ItineraryContentType } from 'src/shared-types/trip-details.type'

export default function OrderDetails() {
  const { trip } = useCheckoutAtoms()

  if (!trip) return <></>

  const getOrderDetailItem = (item: ItineraryContentType) => {
    switch (item.type) {
      case 'transport':
        return <TransportOrderDetail transport={item.content} />
      case 'accommodation':
        return <AccommodationOrderDetail acc={item.content} />
    }
  }

  return (
    <VStack alignItems="flex-start">
      {trip.itinerary.map((item, idx) => {
        return (
          <Box w={'full'} key={idx}>
            {getOrderDetailItem(item)}
          </Box>
        )
      })}
    </VStack>
  )
}
