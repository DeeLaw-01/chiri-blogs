import {
  Box,
  HStack,
  VStack,
  Stack,
  Checkbox,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Skeleton,
  Accordion,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'
import styled from '@emotion/styled'
import CountryFlag from 'ui/shared/country-flag'

import useCurrency from 'src/hooks/useCurrency'
import useMarketPlaceAtoms from '../atoms/useMarketPlaceAtoms'
import { useResponsiveSizes } from 'src/contexts/responsive'
import useTranslation from 'src/hooks/useTranslation'
import { useRouter } from 'app/router'
import { replaceChars } from 'src/utils/stringUtils'
import { useAuthData } from 'ui/features/manage-booking/atoms/useAuthDataAtom'
import { callManageBooking } from 'ui/features/manage-booking/api/manage-booking'

import ExtraBag from '@/icons/checkout/luggage/extra-bag.svg'
import CabinBag from '@/icons/checkout/luggage/cabin-bag.svg'
import PersonalItem from '@/icons/checkout/luggage/personal-item.svg'
import CurrentLuggageSvg from '@/icons/marketplace/luggage/current-luggage.svg'

import type { BuyBaggageMergedData, CartData } from '../types/shared.type'
import type { PassengerType } from 'ui/features/manage-booking/types/auth-data.type'
import ErrorState from './error-state'

const RoundedCheckbox = styled(Checkbox)`
  .chakra-checkbox__control {
    width: 24px;
    height: 24px;
    border-radius: 8px;
  }
`

const LuggageItem = ({ type, info, id }) => {
  const toast = useToast()
  const { t } = useTranslation()
  const { isMobile } = useResponsiveSizes()
  const { getConvertedCurrency } = useCurrency()
  const { cartItems, setCartItems } = useMarketPlaceAtoms()

  const { isOpen: isChecked, onToggle } = useDisclosure({
    isOpen: cartItems.filter((item) => item.uuid === id).length > 0,
  })

  const getIcon = (type: string): JSX.Element => {
    switch (type) {
      case 'hold_bag':
        return <ExtraBag width="80" height="80" />
      case 'cabin_bag':
        return <CabinBag width="60" height="83" />
      case 'personal_item':
        return <PersonalItem width="58" height="90" />
    }
  }

  const onCheckedHandler = () => {
    onToggle()

    // add to cart
    if (!isChecked) {
      setCartItems((previousItems) => {
        const newLuggageItem: CartData = {
          uuid: id,
          data: {
            info,
            type,
          },
          isUnavailable: false,
          type: 'LUGGAGE',
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
          (cartItem) => cartItem.uuid !== id
        )

        return filteredItems
      })
    }
  }

  return (
    <Box
      py="6"
      h="fit-content"
      minW={{ base: '13rem', md: '18rem' }}
      pos="relative"
      userSelect="none"
      borderRadius="lg"
      border="1px solid"
      cursor="pointer"
      borderColor="_lightgray"
      onClick={onCheckedHandler}
      bg={isChecked ? '_lightestgray' : 'transparent'}
    >
      <VStack minW="full">
        <Text fontWeight="medium">{info.name}</Text>

        <Box />
        <Text
          color="_gray"
          lineHeight="0"
          pb={5}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {info.dimensions?.weight}kg <Text as="span" st="common.general.bag" />
        </Text>

        <Box minH="5rem">{getIcon(type)}</Box>

        <Text fontSize={{ base: 'xs', md: 'sm' }} color="_darkgray">
          {info.dimensions && (
            <>
              {info.dimensions?.height} x {info.dimensions?.width} x{' '}
              {info.dimensions?.length}cm
            </>
          )}
        </Text>

        <Box h="2" />

        <HStack w="full" justify="space-between" px="6">
          <Box pos="relative">
            <Box inset={0} pos="absolute" zIndex={1} />
            <RoundedCheckbox
              size="lg"
              borderRadius="full"
              colorScheme="blue"
              isChecked={isChecked}
            />
          </Box>

          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
            {getConvertedCurrency(info.price, { includeCommaValues: false })}
            <Text
              as="span"
              fontWeight="normal"
              fontSize="sm"
              st="common.price.per.person"
            />
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}

const LuggageRow = ({ baggageAndPassengerData, index }) => {
  return (
    <AccordionItem border="none" w="full" tabIndex={index}>
      <AccordionButton
        px="4"
        py="4"
        h="auto"
        w="full"
        bg="transparent"
        borderRadius="lg"
        border="1px solid"
        fontWeight="normal"
        borderColor="_lightgray"
        justifyContent="flex-start"
      >
        <HStack w="full" as="span" justify="space-between">
          <VStack align="flex-start">
            <HStack>
              <HStack spacing={4}>
                <CountryFlag
                  country={baggageAndPassengerData.passenger.nationality}
                />
                <Text fontWeight="medium">
                  {baggageAndPassengerData.passenger.name}
                </Text>
              </HStack>
              <Text color="_darkgray">
                {replaceChars(
                  baggageAndPassengerData.passenger.birthday,
                  '-',
                  '/'
                )}
              </Text>
            </HStack>

            <HStack mt="2">
              <Text
                fontWeight="medium"
                st="manage-booking-page.bagagge.card.subtext"
              />
              <Text color="_darkgray" fontSize="sm">
                {baggageAndPassengerData.passenger.identification}
              </Text>
            </HStack>
          </VStack>
          <AccordionIcon />
        </HStack>
      </AccordionButton>

      <AccordionPanel p="0">
        <HStack maxW="100vw" overflowX="auto" spacing={6} pt="4">
          {Object.entries(baggageAndPassengerData.baggage).map(
            ([key, value]) => (
              <LuggageItem
                key={key}
                type={key}
                info={value}
                id={`${baggageAndPassengerData.id}-${key}`}
              />
            )
          )}
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  )
}

const LuggageRowSkeleton = () => {
  return (
    <VStack w="full" spacing={4}>
      <Skeleton w="full" h="6rem" endColor="gray.300" borderRadius="lg" />
      <Skeleton w="full" h="6rem" endColor="gray.300" borderRadius="lg" />
      <Skeleton w="full" h="6rem" endColor="gray.300" borderRadius="lg" />
    </VStack>
  )
}

const CurrentLuggageModal = ({ isOpen, onClose }) => {
  const { locale } = useRouter()
  const { authData } = useAuthData()
  const [passengerArray, setPassengerArray] = useState<PassengerType[]>(null)

  useEffect(() => {
    const onLoad = async () => {
      const { data, ok } = await callManageBooking(
        'passengers',
        {
          purchase_id: authData.booking_id,
          email: authData.booking_email,
        },
        locale
      )

      if (!ok) return
      setPassengerArray(data)
    }

    onLoad()
  }, [])

  const getLuggageData = (boughtLuggage: PassengerType['bought_luggage']) => {
    const rows = []

    if (boughtLuggage.personal_item) {
      rows.push(
        <Stack
          mt="2"
          w="full"
          spacing={0}
          justify="space-between"
          direction={['column', 'row']}
        >
          <Text>
            1x Personal item, {boughtLuggage.personal_item.dimensions.weight} KG
          </Text>
          <Text color="_darkgray">
            {boughtLuggage.personal_item.dimensions?.height} x{' '}
            {boughtLuggage.personal_item.dimensions?.width} x{' '}
            {boughtLuggage.personal_item.dimensions?.length}cm
          </Text>
        </Stack>
      )
    }

    if (boughtLuggage.cabin_bag) {
      rows.push(
        <Stack
          mt="2"
          w="full"
          spacing={0}
          justify="space-between"
          direction={['column', 'row']}
        >
          <Text>
            1x Cabin item, {boughtLuggage.cabin_bag.dimensions.weight} KG
          </Text>
          <Text color="_darkgray">
            {boughtLuggage.cabin_bag.dimensions?.height} x{' '}
            {boughtLuggage.cabin_bag.dimensions?.width} x{' '}
            {boughtLuggage.cabin_bag.dimensions?.length}cm
          </Text>
        </Stack>
      )
    }

    if (boughtLuggage.hold_bag) {
      rows.push(
        <Stack
          mt="2"
          w="full"
          spacing={0}
          justify="space-between"
          direction={['column', 'row']}
        >
          <Text>
            1x Hold item, {boughtLuggage.hold_bag.dimensions.weight} KG
          </Text>
          <Text color="_darkgray">
            {boughtLuggage.hold_bag.dimensions?.height} x{' '}
            {boughtLuggage.hold_bag.dimensions?.width} x{' '}
            {boughtLuggage.hold_bag.dimensions?.length}cm
          </Text>
        </Stack>
      )
    }

    return <VStack>{rows.map((row) => row)}</VStack>
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box minH="20rem" pt="8" mb="4">
        <CurrentLuggageSvg />
        <Text
          mt="2"
          mb="4"
          fontSize="2xl"
          fontWeight="medium"
          textTransform={'capitalize'}
        >
          <Text st="manage-booking-page.current.luggage" notag />{' '}
          <Text st="common.general.details" notag />
        </Text>

        <VStack w="full" align="flex-start" spacing={4}>
          {passengerArray ? (
            passengerArray.map((passenger, idx) => (
              <Box key={idx} w="full">
                <HStack spacing={4}>
                  <CountryFlag country={passenger.nationality} />
                  <HStack>
                    <Text fontWeight="medium">{passenger.name}</Text>
                    <Text>{replaceChars(passenger.birthday, '-', '/')}</Text>
                  </HStack>
                </HStack>
                <Box mt="2" p="4" bg="_lightblue" borderRadius="xl">
                  <Text
                    fontWeight="medium"
                    st="manage-booking-page.current.luggage"
                  />
                  {getLuggageData(passenger.bought_luggage)}
                </Box>
              </Box>
            ))
          ) : (
            <>
              <Skeleton
                h="4rem"
                borderRadius="xl"
                w="full"
                endColor="gray.300"
              />
              <Skeleton
                h="4rem"
                borderRadius="xl"
                w="full"
                endColor="gray.300"
              />
            </>
          )}
        </VStack>
      </Box>
    </Modal>
  )
}

export default function LuggageSection() {
  const { locale } = useRouter()
  const { authData } = useAuthData()

  const [error, setError] = useState(null)
  const {
    activeFilter,
    buyBaggageMergedData,
    setBuyBaggageMergedData,
    setShowLuggage,
  } = useMarketPlaceAtoms()
  const { t } = useTranslation()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (buyBaggageMergedData) return

    const onLoad = async () => {
      const { data, ok } = await callManageBooking(
        'get_bags',
        {
          purchase_id: authData.booking_id,
          email: authData.contact_details.email,
        },
        locale
      )

      if (ok) {
        setBuyBaggageMergedData(baggageAndPassengerDataMerged(data))
        setShowLuggage(true)
        setError(null)
      } else {
        setShowLuggage(false)
        setError({
          error: data,
        })
        if (activeFilter === 'LUGGAGE')
          toast({
            description: t('common.error.subheading'),
            position: 'bottom',
            status: 'error',
            duration: 3000,
          })
      }
    }

    onLoad()
  }, [])

  const baggageAndPassengerDataMerged = (data): BuyBaggageMergedData[] => {
    const dataArr: BuyBaggageMergedData[] = []

    if (data) {
      for (const passengerId in data) {
        const passengerData = authData.passengers.filter(
          (p) => p.id.toLowerCase() === passengerId.toLowerCase()
        )

        const passengerAndBaggageData = {
          id: passengerId,
          passenger: passengerData[0],
          baggage: data[passengerId],
        }

        dataArr.push(passengerAndBaggageData)
      }

      return dataArr
    }
  }

  if (error) return <ErrorState />

  return (
    <>
      <Box w="full">
        <VStack pb="6" align={'flex-start'}>
          <HStack justify="space-between" w="full">
            <Text fontSize="2xl" st="manage-booking-page.luggage.options" />
            <Button asLink h="auto" fontWeight="normal" onClick={onOpen}>
              <Text notag st="manage-booking-page.current.luggage" />
            </Button>
          </HStack>

          <Text st="manage-booking-page.luggage.description" />
        </VStack>
        {buyBaggageMergedData ? (
          <Accordion
            allowToggle
            allowMultiple={activeFilter === 'LUGGAGE'}
            defaultIndex={buyBaggageMergedData?.map((_, index) => index)}
          >
            <VStack spacing={4} w="full">
              {buyBaggageMergedData.map((data, index) => (
                <LuggageRow
                  key={data.id}
                  baggageAndPassengerData={data}
                  index={index}
                />
              ))}
            </VStack>
          </Accordion>
        ) : (
          <LuggageRowSkeleton />
        )}
      </Box>

      <CurrentLuggageModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
