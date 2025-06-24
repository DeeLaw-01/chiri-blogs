import getUserProfileGamificationDataQuery from 'src/api/queries/get/gamfication/getUserProfileGamficationDataQuery'
import { useSignedFetch } from 'src/api/useSignedFetch'
import useCurrency from 'src/hooks/useCurrency'
import { GamificationData } from 'ui/features/gamification/gamification.types'
import Text from 'ui/primitives/Text'
import useCheckoutCart from '../../../hooks/useCheckoutCart'
import Checkbox from 'ui/primitives/Checkbox'
import Alert from 'ui/primitives/Alert'
import CoinIcon from '@/icons/coin.svg'
import { Box, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import useMutation from 'src/api/useMutation'
import { CoinsResponse } from 'src/api/queries/get/checkout/coinsQuery/coins.type'
import coinsQuery from 'src/api/queries/get/checkout/coinsQuery'
import { useCheckoutAtoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import { CONFIG_SETTINGS } from 'src/config'
import { useSearchParams } from 'next/navigation'

export default function Discount() {
  const { trip, session } = useCheckoutAtoms()
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const { data, isLoading } = useSignedFetch<GamificationData>(
    getUserProfileGamificationDataQuery()
  )
  const { trigger, isMutating } = useMutation<CoinsResponse>((d) =>
    coinsQuery(d)
  )
  const { getConvertedCurrency } = useCurrency()
  const { addToCart, removeItemFromCart } = useCheckoutCart()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  const handleChange = async (changed: boolean) => {
    if (isMutating) return
    setIsSelected(changed)

    await trigger(
      {
        tripId: trip?.id,
        coins: changed,
        session: session,
        sessionId: sessionId,
      },
      { onError: () => removeItemFromCart('coins') }
    )

    if (!changed) removeItemFromCart('coins')
    else addCoinsToCart()
  }

  const addCoinsToCart = () => {
    if (!data) return

    addToCart({
      title: CONFIG_SETTINGS.COIN_NAME,
      key: 'coins',
      price: -data.discount,
      count: 1,
    })
  }

  if (isLoading) return <>Loading..</>
  if (!data?.discount || data.discount <= 0) return <></>

  return (
    <Alert
      info
      onClick={() => handleChange(!isSelected)}
      _hover={{ cursor: 'pointer' }}
    >
      <Box h="1.75rem" w="1.75rem" mr="2">
        <CoinIcon />
      </Box>

      <HStack w="full" justify="space-between">
        <Text
          fontSize="sm"
          color="_gray"
          st="checkout-page.use.gamification.points"
          sd={{
            coins: data.coins,
            discount_amount: getConvertedCurrency(data.discount),
          }}
        />
        <Box pos={'relative'} alignItems="center" display="flex">
          <Checkbox size="md" isChecked={isSelected} isDisabled={isMutating} />
          <Box
            pos={'absolute'}
            top={0}
            bg="transparent"
            w={'full'}
            h={'full'}
            zIndex={'dropdown'}
          />
        </Box>
      </HStack>
    </Alert>
  )
}
