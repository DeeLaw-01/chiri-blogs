import { HStack } from '@chakra-ui/react'
import { useState } from 'react'
import Counter from 'ui/features/trip-details/book-button/counter'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

export default function StaylengthForm({
  initial,
  handleConfirm,
}: {
  initial: number
  handleConfirm: (amount: number) => void
}) {
  const [amount, setAmount] = useState<number>(initial)
  return (
    <>
      <HStack w={'full'} justify={'space-around'}>
        <Counter
          value={amount}
          maxVal={100}
          onIncrement={() => setAmount((prev) => prev + 1)}
          onDecrement={() => setAmount((prev) => prev - 1)}
        />
      </HStack>
      <HStack w="full" justify="flex-end">
        <Button
          primary
          id="apply-specific-staylength"
          mt={3}
          onClick={() => handleConfirm(amount)}
        >
          <Text st="common.general.apply" />
        </Button>
      </HStack>
    </>
  )
}
