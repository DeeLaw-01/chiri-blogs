import { VStack } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'

import PriceChangeQuery from 'src/api/queries/get/checkout/PriceChangeQuery'
import useMutation from 'src/api/useMutation'
import { useRouter } from 'src/i18n/router'
import { Changes } from 'ui/features/new-checkout/checkout.type'
import { useCheckoutAtoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

type AcceptDeclineButtonProps = {
  changes: Changes
  onClose: () => void
}

export default function AcceptDeclineButton({
  changes,
  onClose,
}: AcceptDeclineButtonProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { trip, setTrip } = useCheckoutAtoms()
  const { trigger, isMutating } = useMutation((d) => PriceChangeQuery(d))

  if (!trip) return <></>

  const postResponse = async (res: boolean) => {
    const payload = {
      tripId: changes.after.trip_id,
      response: res,
      sessionId: sessionId,
    }

    return await trigger(payload)
  }

  const updateTrip = () => {
    setTrip(() => {
      if (trip.id !== changes.after.trip_id) {
        router.replace(`/checkout/${changes.after.trip_id}`)
      }

      return {
        ...changes.after.itinerary,
        id: changes.after.trip_id,
        price: {
          ...trip.price,
          price_transports: changes.after.price_flights,
          price_hotels: changes.after.price_hotels,
        },
      }
    })
  }

  const handleAcceptChange = async () => {
    await postResponse(true)
    updateTrip()
    onClose()
  }

  const handleDenyChange = async () => {
    await postResponse(false)
    router.push('/')
  }

  return (
    <VStack w={'full'} gap={4} pb={4} mt="4">
      <Button
        primary
        w={'100%'}
        isLoading={isMutating}
        onClick={() => handleAcceptChange()}
        id="trip-price-change-accept-button"
      >
        <Text st="common.general.acceptandcontinue" />
      </Button>

      <Button
        asLink
        color={'primary'}
        fontSize="sm"
        onClick={() => handleDenyChange()}
        id="create-new-package-button"
      >
        <Text notag st="checkout-page.price.changed.new.search" />
      </Button>
    </VStack>
  )
}
