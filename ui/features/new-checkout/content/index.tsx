import ContactInformation from './contact-information'
import Seats from './seats'
import Payment from './payment'
import { VStack } from '@chakra-ui/react'
import TimerCard from './timer-card'
import { useCheckoutAtoms } from '../useCheckoutAtoms'
import PassengerDetails from './passengers/passenger-details'
import { Step } from '../hooks/useCheckoutSteps/step.type'

export default function CheckoutContent() {
  const { trip, steps } = useCheckoutAtoms()

  if (!trip) return <></>

  const getIndex = (step: Step, idx: number) =>
    steps.slice(0, idx).filter((s) => s === step).length

  const getStep = (step: Step, idx: number) => {
    switch (step) {
      case Step.Contact:
        return <ContactInformation key={idx} />
      case Step.Passenger:
        return <PassengerDetails key={idx} index={getIndex(step, idx)} />
      case Step.Seats:
        return <Seats key={idx} />
      case Step.Payment:
        return <Payment key={idx} />
    }
  }

  return (
    <VStack w="full" gap="5">
      <TimerCard />
      {steps.map((step, idx) => getStep(step, idx))}
    </VStack>
  )
}
