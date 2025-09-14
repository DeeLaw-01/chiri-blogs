'use client'

import {
  Box,
  HStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Input,
  VStack,
  FormErrorMessage,
  Center,
  useToast,
} from '@chakra-ui/react'

import { useRouter } from 'app/router'
import { nationalities } from 'src/data/dropdown-data'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useMemo, useState } from 'react'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { GiftCardFaqData } from 'src/data/giftcard-faq-data'
import { useSelectedCurrency } from 'src/contexts/currency'
import { useAffiliateContext } from 'src/contexts/affiliate'
import { GiftType, SendGiftCardType } from 'ui/features/gift-card/utils/shared'
import useCurrency from 'src/hooks/useCurrency'
import useTranslation from 'src/hooks/useTranslation'
import useMutation from 'src/api/useMutation'

import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import Container from 'ui/primitives/Container'
import HorizontalSlider from 'ui/shared/horizontal-slider'
import MultipleSelect from 'ui/features/gift-card/multiple-select'

import GiftcardPreview from 'ui/features/gift-card/giftcard-preview'
import GiftcardPhysical from 'ui/features/gift-card/giftcard-physical'
import GiftCardPaymentModal from 'ui/features/gift-card/payment-modal'

import giftCardQuery from 'src/api/queries/post/giftCardQuery'
import Accordion from 'ui/primitives/Accordion'
import dynamic from 'next/dynamic'
import Textarea from 'ui/primitives/Form/Textarea'
import { PaymentTypes } from 'ui/shared/payment/payment.type'

const PaymentModals = dynamic(() => import('ui/shared/payment/modals'))

type GiftCardFormValues = {
  name: string
  gift_card_type: string
  street_address: string
  zipcode: string
  country: string
  user_email: string
  custom_message: string
  amount: number
  passengers: number
  custom_amount: number
}

const generateUniqueAlphaNumericCode = (size: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let result = ''
  const charactersLength = characters.length

  for (let i = 0; i < size; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

const SHIPPING_FEE = 3

export default function GiftCard() {
  const { t } = useTranslation()
  const { selectedCurrency } = useSelectedCurrency()
  const isMounted = useIsMounted()
  const router = useRouter()
  const { affiliate, source } = useAffiliateContext()
  const { getConvertedCurrency } = useCurrency()
  const { trigger, isMutating: isGiftCardLoading } = useMutation((d) =>
    giftCardQuery(d)
  )
  const toast = useToast()

  const alphaNumericCode = useMemo(() => generateUniqueAlphaNumericCode(6), [])
  const [isPaymentComplete, setIsPaymentComplete] = useState<boolean>()

  // controlled form state for display card
  const [name, setName] = useState<string>('')
  const [customMessage, setCustomMessage] = useState<string>('')

  const [totalPrice, setTotalPrice] = useState<number>()

  const [showMobilePreview, setShowMobilePreview] = useState<boolean>(false)
  const [totalPeople, setTotalPeople] = useState<number>(1)

  useEffect(() => {
    if (router.query?.complete && router.query?.redirect_status !== 'failed') {
      setIsPaymentComplete(true)
    }
  }, [router.isReady])

  // form state, but going with controlled state
  // so that address can be show/hidden
  const [sendGiftCardType, setSendGiftCardType] =
    useState<SendGiftCardType>('email')

  // state for different selected cards
  const [giftType, setGiftType] = useState<GiftType>('general')

  // stripe payment token
  const [paymentData, setPaymentData] = useState(null)

  const [showCustomPriceInput, setShowCustomPriceInput] =
    useState<boolean>(false)

  const [customAmount, setCustomAmount] = useState<number | string>()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GiftCardFormValues>()

  const buyGiftCard = (data: GiftCardFormValues) => {
    // <== datalayer stuff
    sessionStorage.setItem(
      'gift-card-details',
      JSON.stringify({
        giftType: giftType,
        sendGiftCardType: sendGiftCardType,
        customMessage: customMessage,
        totalPrice: totalPrice,
        totalPeople: totalPeople,
      })
    )
    // ==>

    const amountFieldConditional = {
      amount: showCustomPriceInput ? data.custom_amount : data.amount,
    }
    const addressFieldConditional = sendGiftCardType === 'physical-card' && {
      address: `${data.street_address}, ${data.zipcode}, ${data.country}`,
    }
    const refFieldConditional = affiliate && {
      ref: affiliate,
    }

    const payload = {
      ...amountFieldConditional,
      ...addressFieldConditional,
      ...refFieldConditional,
      user_currency: selectedCurrency?.code,
      user_name: name,
      product: giftType,
      code: alphaNumericCode,
      email: data.user_email,
      custom_message: data.custom_message,
      // redirect_urls: {
      //   success_url:
      //     window.location.origin +
      //     `/giftcard?complete=true&type=giftcard&price=${totalPrice}`,
      //   failure_url:
      //     window.location.origin +
      //     `/giftcard?complete=false&type=giftcard&price=${totalPrice}`,
      // },
    }

    trigger(payload, {
      onSuccess: giftCardQuerySuccess,
      onError: giftCardQueryError,
    })
  }

  const giftCardQuerySuccess = (res: any) => {
    setPaymentData(res.payment_details)
  }

  const giftCardQueryError = () => {
    toast({
      description: t('common.error.subheading'),
      position: 'bottom',
      status: 'error',
      duration: 3000,
    })
  }

  const resetPaymentData = () => {
    setPaymentData(null)
  }

  const calculateTotalPrice = (type: 'amount', value: number) => {
    if (type === 'amount') {
      setTotalPrice(value)
    }
  }

  useEffect(() => {
    if (showCustomPriceInput && customAmount) {
      calculateTotalPrice('amount', +customAmount)
    }
  }, [showCustomPriceInput])

  return (
    <>
      <Container mt="8" mb="8">
        <Box minH="100vh">
          <Heading
            as="h1"
            maxW={{ base: '90%', md: 'full' }}
            st="gift-card.preview.card.header"
          />

          <Box mt="6">
            <HorizontalSlider
              pt={{ base: 0, md: 2 }}
              pb={{ base: 2, md: 0 }}
              heading={
                <Heading as="h2" st="gift-card.preview.card.new.subheader" />
              }
            >
              <GiftcardPreview
                giftType="general"
                setGiftType={setGiftType}
                isActive={giftType === 'general'}
              />
              <GiftcardPreview
                giftType="image-1"
                setGiftType={setGiftType}
                isActive={giftType === 'image-1'}
              />
              <GiftcardPreview
                giftType="image-2"
                setGiftType={setGiftType}
                isActive={giftType === 'image-2'}
              />
            </HorizontalSlider>
          </Box>

          <SimpleGrid
            mt={{ base: 10, md: 16 }}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 0, md: 32 }}
          >
            <Box as="form" onSubmit={handleSubmit(buyGiftCard)}>
              {/* AMOUNT */}
              <FormControl>
                <FormLabel>
                  <Text st="gift-card.giftcard.form.amount.header" />
                </FormLabel>
                <MultipleSelect
                  name="amount"
                  control={control}
                  objKeys={[50, 100, 200, 'custom']}
                  calculateTotalPrice={calculateTotalPrice}
                  setShowCustomPriceInput={setShowCustomPriceInput}
                  setTotalPeople={() => null}
                />
              </FormControl>

              {/* Custom amount */}
              {showCustomPriceInput && (
                <FormControl mb="4" isInvalid={!!errors.custom_amount}>
                  <FormLabel>
                    <Text st="gift-card.giftcard.form.custom.price.header" />
                  </FormLabel>
                  <Controller
                    name="custom_amount"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: t('common.form.validation.required'),
                      },
                      min: {
                        value: 20,
                        message: t('gift-card.form.custom.invalid.amount'),
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        value={customAmount}
                        placeholder={'eg. 20 €'}
                        onChange={(e) => {
                          const value = +e.target.value

                          if (value < 0) return

                          setCustomAmount(e.target.value)
                          field.onChange(value)

                          if (value > 0) {
                            calculateTotalPrice('amount', value)
                          } else {
                            calculateTotalPrice('amount', 0)
                          }
                        }}
                      />
                    )}
                  />
                  {errors.custom_amount && (
                    <FormErrorMessage>
                      {errors.custom_amount.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              )}

              {/* NAME */}
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>
                  <Text st="gift-card.giftcard.form.name.header" />
                </FormLabel>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: t('common.form.validation.required'),
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={name}
                      placeholder="John Doe"
                      onChange={(e) => {
                        setName(e.target.value)
                        field.onChange(e.target.value)
                      }}
                    />
                  )}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>

              {/* GIFTCARD TYPE */}
              <FormControl mt="4" isInvalid={!!errors.gift_card_type}>
                <FormLabel>
                  <Text st="gift-card.giftcard.form.receive.header" />
                </FormLabel>
                <Controller
                  name="gift_card_type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      value={sendGiftCardType}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                        setSendGiftCardType(e.target.value as SendGiftCardType)
                      }}
                    >
                      <option value="email">
                        <Text st="common.email" />
                      </option>
                      <option value="physical-card">
                        <Text st="gift-card.giftcard.form.receive.physical" />
                      </option>
                    </Select>
                  )}
                />
              </FormControl>

              {/* ADDRESS */}
              {sendGiftCardType === 'physical-card' && (
                <Box mt="4">
                  <FormControl isInvalid={!!errors.street_address}>
                    <FormLabel>
                      <Text st="gift-card.giftcard.form.address.header" />
                    </FormLabel>
                    <Input
                      {...register('street_address', {
                        required: {
                          value: true,
                          message: t('common.form.validation.required'),
                        },
                      })}
                      placeholder={t('gift-card.giftcard.form.address.street')}
                    />
                  </FormControl>
                  <HStack mt="4">
                    <FormControl isInvalid={!!errors.zipcode}>
                      <Input
                        {...register('zipcode', {
                          required: {
                            value: true,
                            message: t('common.form.validation.required'),
                          },
                        })}
                        placeholder={t(
                          'gift-card.giftcard.form.address.zipcode'
                        )}
                      />
                    </FormControl>
                    <FormControl isInvalid={!!errors.country}>
                      <Select
                        options={nationalities}
                        placeholder={t('common.general.select')}
                        {...register('country', {
                          required: {
                            value: true,
                            message: t('common.form.validation.required'),
                          },
                        })}
                      >
                        {nationalities.map((nationality) => (
                          <option
                            key={nationality.label}
                            value={nationality.value}
                          >
                            {nationality.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </HStack>
                </Box>
              )}

              {/* EMAIL */}
              <FormControl mt="4" isInvalid={!!errors.user_email}>
                <FormLabel>
                  <Text st="common.email.popup.form.label" />
                </FormLabel>
                <Input
                  {...register('user_email', {
                    required: {
                      value: true,
                      message: t('common.form.validation.required'),
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('common.form.validation.email.invalid'),
                    },
                  })}
                  placeholder={t('common.email.popup.input.placeholder')}
                />
                {errors.user_email && (
                  <FormErrorMessage>
                    {errors.user_email.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              {/* MESSAGE */}
              <VStack mt="4">
                <FormControl isInvalid={!!errors.custom_message}>
                  <FormLabel>
                    <Text st="gift-card.giftcard.form.custom.header" />
                  </FormLabel>
                  <Controller
                    name="custom_message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        value={customMessage}
                        onChange={(e) => {
                          setCustomMessage(e.target.value)
                          field.onChange(e.target.value)
                        }}
                      />
                    )}
                    rules={{
                      maxLength: {
                        value: 150,
                        message: t('gift-card.giftcard.form.custom.max.chars'),
                      },
                    }}
                  />
                  <HStack mt="2" w="full" justify="space-between">
                    {errors.custom_message ? (
                      <FormErrorMessage mt="0">
                        {errors.custom_message.message}
                      </FormErrorMessage>
                    ) : (
                      <Box />
                    )}
                    <Text
                      fontSize="xs"
                      alignSelf="flex-end"
                      sd={{ count: 150 - customMessage.length }}
                      st="gift-card.giftcard.form.remaining.chars.count"
                      color={customMessage.length > 150 ? '_red' : '_darkgray'}
                    />
                  </HStack>
                </FormControl>
              </VStack>

              <Box mt="10">
                <Button
                  py="4"
                  primary
                  w="full"
                  h="auto"
                  type="submit"
                  fontWeight="normal"
                  id="purchase-gift-button"
                  isLoading={isGiftCardLoading}
                >
                  {isMounted.current && (
                    <Text
                      st="gift-card.giftcard.form.purchase.button"
                      sd={{ price: getConvertedCurrency(totalPrice) }}
                    />
                  )}
                </Button>

                <Center display={{ base: 'flex', md: 'none' }} mt="4">
                  <Button
                    asLink
                    h="auto"
                    fontWeight="normal"
                    id="gift-card-preview-button"
                    onClick={() => setShowMobilePreview((val) => !val)}
                  >
                    {showMobilePreview
                      ? t('gift-card.preview.mobile.hide')
                      : t('gift-card.preview.mobile.show')}
                  </Button>
                </Center>

                <Box
                  mt="4"
                  mx="auto"
                  fontSize="sm"
                  color="_darkgray"
                  maxW={{ base: '80%', md: 'full' }}
                >
                  <Text
                    display={'inline'}
                    st="gift-card.preview.card.front.message.four"
                  />{' '}
                  {totalPrice > 0 && (
                    <Text
                      display={'inline'}
                      st="gift-card.preview.card.front.message.five"
                      sd={{ amount: getConvertedCurrency(totalPrice) }}
                    />
                  )}
                </Box>
              </Box>
            </Box>

            <GiftcardPhysical
              name={name}
              giftType={giftType}
              code={alphaNumericCode}
              customMessage={customMessage}
              showMobilePreview={showMobilePreview}
              value={totalPrice}
            />
          </SimpleGrid>
          <HStack
            w={'full'}
            mt={'5rem'}
            align="flex-start"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box maxW="40rem" minW={{ md: '10rem' }} pb={{ base: '8', md: 0 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                st="gift-card.faqs.header"
              />
            </Box>
            <Box w="full" marginInlineStart="0px !important">
              <Accordion items={GiftCardFaqData} maxW={'58rem'} mx={'auto'} />
            </Box>
          </HStack>
        </Box>
      </Container>

      {paymentData && (
        <GiftCardPaymentModal
          shippingFee={SHIPPING_FEE}
          totalPrice={totalPrice}
          paymentData={paymentData}
          resetPaymentData={resetPaymentData}
          showShippingFee={sendGiftCardType === 'physical-card'}
        />
      )}

      {isPaymentComplete && (
        <PaymentModals
          redirect="/"
          type={PaymentTypes.GIFT_CARD}
          bid={`giftcard-${alphaNumericCode}`}
        />
      )}
    </>
  )
}
