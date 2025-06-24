import { Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import PassengerDetailsCard from './passenger-details-card'
import { useCheckoutAtoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import Button from 'ui/primitives/Button'

type ConfirmDetailsProps = {
  next: () => void
}
export default function Confirm({ next }: ConfirmDetailsProps) {
  const { passengers, setStep } = useCheckoutAtoms()

  if (!passengers.length) return <></>

  return (
    <Box my={5}>
      <Text st="checkout-page.step3.header" />

      <VStack my="2">
        {passengers.map((passenger, index) => (
          <PassengerDetailsCard passenger={passenger} key={index} />
        ))}
        <Button id="confirm-details" primary w="full" onClick={next}>
          <Text st="checkout-page.step3.passenger.go.ahead" />
        </Button>
        <Button id="deny-details" secondary w="full" onClick={() => setStep(0)}>
          <Text st="checkout-page.step3.passenger.go.back" />
        </Button>
      </VStack>
    </Box>
  )
}
