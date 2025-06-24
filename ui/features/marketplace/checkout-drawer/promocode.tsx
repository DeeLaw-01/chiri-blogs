import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import promocodeQuery from 'src/api/queries/get/checkout/promocodeQuery'
import {
  PromocodeError,
  PromocodeResponse,
} from 'src/api/queries/get/checkout/promocodeQuery/promocode.type'
import useMutation from 'src/api/useMutation'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import PromocodeInputField from 'ui/shared/promocode-input'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import { CartData } from '../types/shared.type'

export default function Promocode() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const [success, setSuccess] = useState<boolean>(false)
  const methods = useForm<any>({})
  const { trigger, isMutating } = useMutation<PromocodeResponse>((d) =>
    promocodeQuery(d)
  )
  const { authData } = useAuthData()

  const { session, setCartItems, cartItems } = useMarketPlaceAtoms()

  const onSubmit = async (data: { promocode: string }) => {
    if (success) {
      const res = await trigger({
        tripId: authData?.trip.id,
        promocode: data.promocode,
        session: session,
        sessionId: sessionId,
        remove: true,
      })

      const filteredItems = cartItems.filter(
        (item) => item.type !== 'PROMOCODE'
      )

      setCartItems(filteredItems)
      setSuccess(false)
      methods.setValue('promocode', '')

      return
    }
    handleFetch(data.promocode)
  }

  const handleFetch = async (code: string) => {
    const res = await trigger({
      tripId: authData?.trip.id,
      promocode: code,
      session: session,
      sessionId: sessionId,
    })
    if (res?.discount) handleSuccess(res)
    else handleError(res.error)
  }

  const handleSuccess = (res: PromocodeResponse) => {
    setSuccess(true)
    handleAddToCart(res)
  }

  const handleError = (error: PromocodeError) => {
    setSuccess(false)
    methods.setError('promocode', { message: error.msg })
  }

  const handleAddToCart = (res: PromocodeResponse) => {
    setCartItems((previousItems) => {
      const newPromocodeItem: CartData = {
        uuid: 'PROMOCODE',
        data: {
          price: -res?.discount,
          code: res.promocode,
        },
        type: 'PROMOCODE',
        isUnavailable: false,
        priceChange: {
          status: false,
        },
      }

      return [...previousItems, newPromocodeItem]
    })
  }

  useEffect(() => {
    const existingPromocode = cartItems.find(
      (item) => item.type === 'PROMOCODE'
    )
    if (existingPromocode?.data?.code) {
      methods.setValue('promocode', existingPromocode.data.code)
      setSuccess(true)
    }
  }, [cartItems, methods])

  return (
    <Box w="full" mt={3}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <PromocodeInputField
            isDisabled={isMutating}
            isLoading={isMutating}
            success={success}
          />
        </form>
      </FormProvider>
    </Box>
  )
}
