import {
  Box,
  Checkbox,
  HStack,
  theme,
  VStack,
  useDisclosure,
  useToast,
  Skeleton,
} from '@chakra-ui/react'

import Tag from 'ui/primitives/Tag'
import Text from 'ui/primitives/Text'
import useCurrency from 'src/hooks/useCurrency'
import useTranslation from 'src/hooks/useTranslation'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import styled from '@emotion/styled'
import TickIcon from '@/icons/shared/tick-icon.svg'

import { useResponsiveSizes } from 'src/contexts/responsive'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import getProtectionInfoMarketplace from 'src/api/queries/post/protectionInfoMarketplace'

import type {
  CartData,
  ProtectionData,
  SingleProtectionObject,
} from '../types/shared.type'
import { InsuranceType } from 'src/shared-types/insurance.type'
import useAccomodationCheckbox from 'src/hooks/useAccomodationCheckbox'
import getHotelIds from 'src/utils/getHotelIds'
import useCheckoutObject from 'src/hooks/useCheckoutObject'
import { CONFIG_SETTINGS } from 'src/config'
import ErrorState from './error-state'
import { useFetch } from 'src/api/useFetch'
import { useSearchParams } from 'next/navigation'

const RoundedCheckbox = styled(Checkbox)`
  .chakra-checkbox__control {
    width: 24px;
    height: 24px;
    border-radius: 8px;
  }
`

const InsuranceCard = ({
  type,
  data,
  passengerId,
}: {
  type: InsuranceType
  passengerId: string
  data: SingleProtectionObject
}) => {
  const toast = useToast()
  const { t } = useTranslation()
  const { isMobile } = useResponsiveSizes()
  const { cartItems, setCartItems } = useMarketPlaceAtoms()
  const { getConvertedCurrency } = useCurrency()

  const { isOpen: isChecked, onToggle } = useDisclosure({
    isOpen: cartItems.filter((item) => item.uuid === type).length > 0,
  })

  const insuranceTextObj = [
    {
      type: 'flex',
      name: CONFIG_SETTINGS.INSURANCE_FLEX_NAME,
      listItems: [
        'insurance-info.flex.point.one',
        'insurance-info.flex.point.two',
        'insurance-info.flex.point.three',
        'insurance-info.flex.point.four',
      ] as const,
    },
    {
      type: 'comprehensive',
      name: 'insurance-info.comprehensive.name' as const,
      listItems: [
        'insurance-info.comprehensive.point.one',
        'insurance-info.comprehensive.point.two',
        'insurance-info.comprehensive.point.three',
        'insurance-info.comprehensive.point.four',
      ] as const,
    },
    {
      type: 'disruption',
      name: 'insurance-info.disruption.name' as const,
      listItems: [
        'insurance-info.disruption.point.one',
        'insurance-info.disruption.point.two',
        'insurance-info.disruption.point.three',
        'insurance-info.disruption.point.four',
      ] as const,
    },
  ]

  const insuranceText = insuranceTextObj.filter((obj) => obj.type === type)

  const onCheckedHandler = () => {
    onToggle()

    // add to cart
    if (!isChecked) {
      setCartItems((previousItems) => {
        const newLuggageItem: CartData = {
          uuid: type,
          data: { type, passengerId, ...data },
          type: 'PROTECTION',
          isUnavailable: false,
          priceChange: {
            status: false,
          },
        }

        return [...previousItems, newLuggageItem]
      })

      toast({
        title: t('manage-booking-page.marketplace.add.item.to.cart'),
        status: 'success',
        duration: 4000,
        position: isMobile ? 'top' : 'bottom',
      })
    } else {
      // remove from cart
      setCartItems((previousItems) => {
        const filteredItems = previousItems.filter(
          (cartItem) => cartItem.uuid !== type
        )

        return filteredItems
      })
    }
  }

  return (
    <VStack
      p="4"
      maxW="18rem"
      cursor="pointer"
      align="flex-start"
      borderRadius="lg"
      userSelect="none"
      border="1px solid"
      alignSelf="stretch"
      borderColor="_lightgray"
      onClick={onCheckedHandler}
      minW={{ base: '18rem', md: '20rem' }}
      bg={isChecked ? '_lightestgray' : 'transparent'}
    >
      <Tag
        blue
        py="2"
        px="3"
        fontWeight="normal"
        borderRadius="full"
        textTransform="uppercase"
      >
        <Text st={insuranceText[0].name}></Text>
      </Tag>

      <VStack h="full" mt="2" spacing={2} w="full" align="flex-start">
        {insuranceText[0].listItems.map((item, idx: number) => {
          return (
            <HStack align="flex-start" mt={2} key={idx} maxW="80%">
              <Box pt="2">
                <TickIcon stroke={theme.colors.black} />
              </Box>
              <Text st={item} />
            </HStack>
          )
        })}
      </VStack>

      <HStack pt="2" w="full" justify="space-between">
        <Box pos="relative">
          <Box inset={0} pos="absolute" zIndex={1} />
          <RoundedCheckbox
            size="lg"
            borderRadius="full"
            colorScheme="blue"
            isChecked={isChecked}
          />
        </Box>

        <Text fontSize={'xl'} fontWeight="medium">
          {getConvertedCurrency(data.amount)}
          {/* <Text as="span" fontWeight="normal" fontSize="sm">
            {' '}
            /pers
          </Text> */}
        </Text>
      </HStack>
    </VStack>
  )
}

export default function ProtectionSection() {
  const { authData } = useAuthData()
  const {
    protectionInfo,
    setProtectionInfo,
    showProtection,
    setShowProtection,
  } = useMarketPlaceAtoms()
  const { isAccomodationChecked } = useAccomodationCheckbox()
  const { hotelCheckoutObject } = useCheckoutObject()
  const { t } = useTranslation()
  const toast = useToast()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  const getProtectionInfoQueryPayload = () => {
    const payload = {
      session_id: sessionId,
      purchase_id: authData?.booking_id ?? '',
      ...(isAccomodationChecked && {
        hotels: getHotelIds(hotelCheckoutObject),
      }),
    }

    return payload
  }

  const { data } = useFetch(
    protectionInfo
      ? null
      : getProtectionInfoMarketplace(getProtectionInfoQueryPayload()),
    {
      onSuccess: (data) => callbackProtectionInfoOnSuccess(data),
      onError: () => callbackProtectionInfoOnError(),
    }
  )

  const callbackProtectionInfoOnSuccess = (data: ProtectionData) => {
    setProtectionInfo(data)
  }

  const callbackProtectionInfoOnError = () => {
    toast({
      description: t('common.error.subheading'),
      position: 'bottom',
      status: 'error',
      duration: 3000,
    })
    setShowProtection(false)
  }

  const showProtectionCard = (
    protectionInfoKey: keyof ProtectionData['offers']
  ) => {
    return protectionInfo.offers[protectionInfoKey].valid
  }

  return (
    <>
      {showProtection ? (
        <Box w="full">
          <HStack pb="6" w="full" justify="space-between">
            <Text
              fontSize="2xl"
              st="manage-booking-page.marketplace.get.protected"
            />
          </HStack>

          <HStack maxW="100vw" overflowX="auto" spacing={6} pb="4">
            {protectionInfo ? (
              <>
                {showProtectionCard('flex') && (
                  <InsuranceCard
                    type="flex"
                    data={protectionInfo.offers.flex}
                    passengerId={protectionInfo.offers.id}
                  />
                )}

                {showProtectionCard('comprehensive') && (
                  <InsuranceCard
                    type="comprehensive"
                    passengerId={protectionInfo.offers.id}
                    data={protectionInfo.offers.comprehensive}
                  />
                )}

                {showProtectionCard('flight_disruption') && (
                  <InsuranceCard
                    type="disruption"
                    passengerId={protectionInfo.offers.id}
                    data={protectionInfo.offers.flight_disruption}
                  />
                )}
              </>
            ) : (
              <>
                <Box
                  minW="18rem"
                  border="1px solid"
                  borderRadius="lg"
                  borderColor="_lightgray"
                >
                  <Skeleton h="24rem" endColor="gray.300" />
                </Box>
                <Box
                  minW="18rem"
                  border="1px solid"
                  borderRadius="lg"
                  borderColor="_lightgray"
                >
                  <Skeleton h="24rem" endColor="gray.300" />
                </Box>
                <Box
                  minW="18rem"
                  border="1px solid"
                  borderRadius="lg"
                  borderColor="_lightgray"
                >
                  <Skeleton h="24rem" endColor="gray.300" />
                </Box>
              </>
            )}
          </HStack>
        </Box>
      ) : (
        <ErrorState />
      )}
    </>
  )
}
