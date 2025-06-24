import NextImage from 'next/image'

import ExtraBag from '@/icons/checkout/luggage/extra-bag.svg'
import CabinBag from '@/icons/checkout/luggage/cabin-bag.svg'
import PersonalItem from '@/icons/checkout/luggage/personal-item.svg'
import SeatIcon from '@/icons/marketplace/filter-select/seat-icon.svg'

import Text from 'ui/primitives/Text'

import ProtectionCartImage from '@/icons/marketplace/checkout/protection-cart-image.svg'
import useCurrency from 'src/hooks/useCurrency'
import CartCard from './cart-card'
import { Box, Center } from '@chakra-ui/react'
import { CartData } from './types/shared.type'
import useTranslation from 'src/hooks/useTranslation'
import theme from 'src/styles/theme'

export default function CartItem({
  cartData,
  displayOnly = false,
}: {
  cartData: CartData
  displayOnly?: boolean
}) {
  const data = cartData.data
  const { getConvertedCurrency } = useCurrency()
  const { t } = useTranslation()

  const getIcon = (type: string): JSX.Element => {
    switch (type) {
      case 'hold_bag':
        return <ExtraBag width="60" height="60" />
      case 'cabin_bag':
        return <CabinBag width="60" height="60" />
      case 'personal_item':
        return <PersonalItem width="60" height="60" />
    }
  }

  if (cartData.type === 'STAYS') {
    return (
      <CartCard
        type={'Stay'}
        title={data.name}
        uuid={cartData.uuid}
        location={data.city}
        country={data.country}
        isUnavailable={cartData.isUnavailable}
        priceChange={cartData.priceChange}
        displayOnly={displayOnly}
        image={
          <Box
            w="full"
            h="full"
            pos="relative"
            overflow="hidden"
            borderRadius="2xl"
          >
            <NextImage
              fill
              alt="Cart Image"
              src={cartData.data.photo}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        }
        price={
          <Text fontSize="lg" fontWeight="medium">
            {getConvertedCurrency(data.price_hotel / data.nights_at, {
              includeCommaValues: true,
            })}
            <Text
              as="span"
              fontSize="sm"
              color="_black"
              st="common.per.night"
            />
          </Text>
        }
      />
    )
  }

  if (cartData.type === 'LUGGAGE') {
    return (
      <CartCard
        uuid={cartData.uuid}
        priceChange={cartData.priceChange}
        isUnavailable={cartData.isUnavailable}
        displayOnly={displayOnly}
        image={
          <Center
            h="8rem"
            minW="8rem"
            bg="_lightestgray"
            border="1px solid"
            borderRadius="2xl"
            borderColor="_lightgray"
          >
            {getIcon(cartData.data.type)}
          </Center>
        }
        title={`1x ${data.info.name}, ${data.info.dimensions?.weight} kg`}
        type={`${data.info.dimensions?.height} x ${data.info.dimensions?.width} x ${data.info.dimensions?.length} cm`}
        price={
          <Text fontSize="lg" fontWeight="medium">
            {getConvertedCurrency(data.info.price, {
              includeCommaValues: true,
            })}
          </Text>
        }
      />
    )
  }

  if (cartData.type === 'PROTECTION') {
    return (
      <CartCard
        uuid={cartData.uuid}
        type={'Protection'}
        title={data.type.toUpperCase()}
        priceChange={cartData.priceChange}
        isUnavailable={cartData.isUnavailable}
        displayOnly={displayOnly}
        image={
          <Box
            bg="_lightestgray"
            border="1px solid"
            overflow="hidden"
            borderRadius="2xl"
            borderColor="_lightgray"
          >
            <ProtectionCartImage />
          </Box>
        }
        price={
          <Text fontSize="lg" fontWeight="medium">
            {getConvertedCurrency(data.amount, {
              includeCommaValues: true,
            })}
          </Text>
        }
      />
    )
  }

  if (cartData.type === 'SEATS') {
    return (
      <CartCard
        uuid={cartData.uuid}
        title={t('manage-booking-page.marketplace.filter.seats')}
        priceChange={cartData.priceChange}
        isUnavailable={cartData.isUnavailable}
        displayOnly={displayOnly}
        image={
          <Center
            h="8rem"
            minW="8rem"
            bg="_lightestgray"
            border="1px solid"
            borderRadius="2xl"
            borderColor="_lightgray"
          >
            <SeatIcon width="60" height="60" stroke={theme.colors.primary} />
          </Center>
        }
        price={
          <>
            <Text st="manage-booking-page.marketplace.seats.cart.description" />
            <Text fontSize="lg" fontWeight="medium">
              {getConvertedCurrency(data.price, {
                includeCommaValues: true,
              })}{' '}
            </Text>
          </>
        }
      />
    )
  }
}
