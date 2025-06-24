import { Box, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import { useCheckoutAtoms } from '../../../useCheckoutAtoms'
import Text from 'ui/primitives/Text'
import Badge from 'ui/primitives/Badge'
import { CONFIG_SETTINGS } from 'src/config'
import AnimatedTag from 'ui/primitives/AnimatedTag'
import TickIcon from '@/icons/new/check.svg'
import useCheckoutCart from '../../../hooks/useCheckoutCart'
import useCurrency from 'src/hooks/useCurrency'
import { ProtectionResponse } from 'src/api/queries/post/checkout/protectionQuery/protection.type'
import getProtectionQuery from 'src/api/queries/post/checkout/protectionQuery'
import { getProtectionCartItem } from '../../../hooks/useCheckoutCart/helpers'
import { useFetch } from 'src/api/useFetch'
import { useEffect } from 'react'
import Loading from './loading'
import { points } from './data'
import { useSearchParams } from 'next/navigation'

type ProtectionProps = {
  next: () => void
}

export default function Protection({ next }: ProtectionProps) {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const { trip, passengers, contact, cart, session } = useCheckoutAtoms()
  const { getTotalPrice, addToCart } = useCheckoutCart()
  const { getConvertedCurrency } = useCurrency()

  const getBody = () => {
    return {
      trip_id: trip?.id,
      session_id: sessionId ?? '',
      passengers,
      price: getTotalPrice(),
      contact_details: contact ?? undefined,
      protection: { flex: cart.some((x) => x.key === 'protection') },
      has_seats: cart.some((x) => x.key === 'seats'),
      checkout_session: session,
    }
  }

  const { data, isLoading, error } = useFetch<ProtectionResponse>(
    getProtectionQuery(getBody())
  )

  const handleSelect = () => {
    if (!data) return
    const item = getProtectionCartItem(data)
    if (item) addToCart(item)
  }

  useEffect(() => {
    if (cart.some((x) => x.key === 'protection')) next()
  }, [cart])

  useEffect(() => {
    if (!trip?.protection_available) return next()
    if ((!isLoading && !data) || error) next()
  }, [data, error])

  if (isLoading) return <Loading />
  if (!data) return <></>

  return (
    <Box w="full" mt="5">
      <HStack>
        <Text
          fontSize={'xl'}
          st="insurance-info.get.protected"
          whiteSpace="nowrap"
        />
        <Badge green whiteSpace="nowrap">
          <Text
            as="span"
            textTransform={'uppercase'}
            whiteSpace={'wrap'}
            st="common.general.recommended"
          />
        </Badge>
      </HStack>
      <Box
        w="full"
        borderRadius="md"
        border="1px solid"
        borderColor="_lightgray"
        p="3"
        mt="2"
      >
        <AnimatedTag primary whiteSpace="nowrap">
          <Text as="span" textTransform={'uppercase'} whiteSpace={'wrap'}>
            {CONFIG_SETTINGS.INSURANCE_FLEX_NAME}
          </Text>
        </AnimatedTag>
        <VStack alignItems="flex-start" mt="2" fontSize="sm">
          {points.map((point, idx) => {
            return (
              <HStack key={idx}>
                <Box color={'_black'}>
                  <TickIcon width="15" height="15" />
                </Box>
                <Text st={point} />
              </HStack>
            )
          })}
        </VStack>
      </Box>
      <VStack mt="3">
        <Button
          primary
          id="add-protection-checkout"
          w="full"
          h="auto"
          py={3}
          isLoading={isLoading}
          onClick={handleSelect}
        >
          <VStack>
            <Text st="insurance-info.button.purchase.refundable.ticket" />
            <Text fontSize="sm">
              {getConvertedCurrency(getTotalPrice() + data.offers.flex.amount)}
            </Text>
          </VStack>
        </Button>
        <Button
          py={3}
          h="auto"
          secondary
          id="no-protection-checkout"
          w="full"
          onClick={() => next()}
        >
          <VStack>
            <Text st="common.button.purchase.without.protection" />
            <Text fontSize="sm">{getConvertedCurrency(getTotalPrice())}</Text>
          </VStack>
        </Button>
      </VStack>
    </Box>
  )
}
