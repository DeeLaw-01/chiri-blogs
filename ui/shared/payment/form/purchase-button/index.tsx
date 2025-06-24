import { HStack, Box } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import LockIcon from '@/icons/new/security/lock.svg'
import { useFormContext } from 'react-hook-form'
import { Stripe } from '@stripe/stripe-js'
import useCurrency from 'src/hooks/useCurrency'

type PurchaseButtonProps = {
  price: number
  stripe: Stripe | null
  isDisabled: boolean
}
export default function PurchaseButton({
  price,
  stripe,
  isDisabled,
}: PurchaseButtonProps) {
  const { getConvertedCurrency } = useCurrency()
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <Box w="full" mt="4">
      <Button
        id="purchase-button"
        h="12"
        primary
        isDisabled={isDisabled || isSubmitting}
        isLoading={isSubmitting}
        w="full"
        type="submit"
        gap={1}
      >
        <Text notag st="common.general.pay" />
        {getConvertedCurrency(price, { includeCommaValues: true })}
      </Button>
      <HStack mt="2" w="full" justifyContent="center">
        <LockIcon height="10px" />
        <Text
          color="_gray"
          fontSize={{ base: '2xs', md: 'xs' }}
          st="common.payment.encrypted"
        />
      </HStack>
    </Box>
  )
}
