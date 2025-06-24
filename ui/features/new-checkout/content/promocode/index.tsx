import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import promocodeQuery from 'src/api/queries/get/checkout/promocodeQuery'
import {
  PromocodeError,
  PromocodeResponse,
} from 'src/api/queries/get/checkout/promocodeQuery/promocode.type'
import useMutation from 'src/api/useMutation'
import { useAffiliateContext } from 'src/contexts/affiliate'
import PromocodeInputField from 'ui/shared/promocode-input'
import useCheckoutCart from '../../hooks/useCheckoutCart'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

export default function PromocodeInput() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { affiliate } = useAffiliateContext()
  const { trip, luggage, setPromocode, promocode, session, paymentLoading } =
    useCheckoutAtoms()
  const { addToCart, removeItemFromCart } = useCheckoutCart()
  const methods = useForm<any>({})
  const { trigger, isMutating } = useMutation<PromocodeResponse>((d) =>
    promocodeQuery(d)
  )

  const onSubmit = async (data: { promocode: string }) => {
    if (promocode) await handleRemovePromocode(data.promocode)
    else await handleAddPromocode(data.promocode)
  }

  const handleFetch = async (remove: boolean, code: string) => {
    return await trigger({
      tripId: trip?.id,
      promocode: code,
      session,
      sessionId,
      remove: remove,
    })
  }

  const handleRemovePromocode = async (code: string) => {
    await handleFetch(true, code)
    removeItemFromCart('giftcard')
    setPromocode('')
    methods.setValue('promocode', '')
  }

  const handleAddPromocode = async (code: string) => {
    const res = await handleFetch(false, code)
    if (res?.discount) handleSuccess(res)
    else handleError(res.error)
  }

  const handleSuccess = (res: PromocodeResponse) => {
    setPromocode(res.promocode)
    handleAddToCart(res)
  }

  const handleError = (error: PromocodeError) => {
    setPromocode('')
    methods.setError('promocode', { message: error.msg })
  }

  const handleAddToCart = (res: PromocodeResponse) => {
    addToCart({
      title: `Giftcard ${res.promocode}`,
      key: 'giftcard',
      price: -res.discount,
      count: 1,
    })
  }

  // We shouldn't do this. Marketing should stop sending affiliate links with discounts, or backend should send it somehow instead
  useEffect(() => {
    if (luggage && affiliate && !promocode) handleAddPromocode(affiliate)
  }, [luggage])

  return (
    <Box w="full" mt={3}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <PromocodeInputField
            success={!!promocode}
            isDisabled={paymentLoading || !luggage}
            isLoading={paymentLoading || !luggage || isMutating}
          />
        </form>
      </FormProvider>
    </Box>
  )
}
