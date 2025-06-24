'use client'

import {
  Box,
  VStack,
  useToast,
  Center,
  HStack,
  Divider,
  FormControl,
  FormLabel,
  Spinner,
} from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { useEffect, useState } from 'react'
import emailUnsubscribeQuery from 'src/api/queries/post/emailUnsubscribeQuery'
import Heading from 'ui/primitives/Heading'
import { Select as ReactSelect } from 'chakra-react-select'
import locales from 'src/data/locales'
import getCurrenciesQuery from 'src/api/queries/get/currenciesQuery'
import getUnsubscribeQuery from 'src/api/queries/get/unsubscribeQuery'
import Checkbox from 'ui/primitives/Checkbox'
import { Controller, useForm } from 'react-hook-form'
import { CONFIG_COMPANY } from 'src/config'
import useTranslation from 'src/hooks/useTranslation'
import LocationSelect from './location-select'
import { useFetch } from 'src/api/useFetch'
import useMutation from 'src/api/useMutation'

type Currency = {
  label: string
  value: string
}

type UnsubscribeFormData = {
  deal_all: boolean
  deal_twice_month: boolean
  blog_weekly: boolean
  blog_monthly: boolean
  news: boolean
  route_tracking: boolean
  locale: string
  currency: string
}

export default function UnsubscribeView({ email }: { email: string }) {
  const { t } = useTranslation()
  const [currencies, setCurrencies] = useState<Currency[]>()
  const [location, setLocation] = useState<any>()
  const [currencyPage, setCurrencyPage] = useState<number>(0)

  const toast = useToast()
  const [loading, setLoading] = useState<boolean>(false)

  const { data, isLoading } = useFetch(getCurrenciesQuery(currencyPage, 20))
  const { data: unsubscribeData, error: unsubscribeDataError } = useFetch(
    email && getUnsubscribeQuery(email)
  )

  const { trigger } = useMutation((d) => emailUnsubscribeQuery(d))

  const { register, handleSubmit, watch, control, setValue } =
    useForm<UnsubscribeFormData>()

  const dealAll = watch('deal_all')
  const blogWeekly = watch('blog_weekly')

  useEffect(() => {
    if (unsubscribeData?.location) setLocation(unsubscribeData?.location)
  }, [unsubscribeData])

  useEffect(() => {
    if (currencyPage === 0) {
      setCurrencies(
        data?.currencies?.map((currency) => ({
          label: currency.currency,
          value: currency.code,
        }))
      )
    } else {
      const newData =
        data?.currencies?.map((currency) => {
          return {
            label: currency.currency,
            value: currency.code,
          }
        }) || []
      setCurrencies([...currencies, ...newData])
    }
  }, [data])

  useEffect(() => {
    if (blogWeekly) setValue('blog_monthly', false)
    if (dealAll) setValue('deal_twice_month', false)
  }, [blogWeekly, dealAll])

  const handleUnsubscribe = (data: UnsubscribeFormData): void => {
    setLoading(true)
    const payload = {
      ...data,
      deal_weekly: data.deal_all ? true : false,
      email: email,
      ...(location && { location: location?.locode }),
    }

    trigger(payload, {
      onSuccess: callbackEmailUnsubscribeQuerySuccess,
      onError: callbackEmailUnsubscribeQueryError,
    })
  }

  const callbackEmailUnsubscribeQuerySuccess = (): void => {
    toast({
      description: t('unsubscribe.unsubscribe.success'),
      position: 'bottom',
      status: 'success',
      duration: 3000,
    })
    setLoading(false)
  }

  const callbackEmailUnsubscribeQueryError = (): void => {
    toast({
      description: t('common.error.description'),
      position: 'bottom',
      status: 'error',
      duration: 3000,
    })
    setLoading(false)
  }

  return (
    <Box minH="50vh" w="full">
      {/* {unsubscribeDataError && !unsubscribeData && <EmailNotFoundView />} */}
      {!unsubscribeData && !unsubscribeDataError && (
        <Center>
          <Spinner size={'lg'} />
        </Center>
      )}
      {unsubscribeData && (
        <VStack
          alignItems={'left'}
          justifyContent={'center'}
          spacing={{ base: 3, md: 5 }}
          as="form"
          onSubmit={handleSubmit(handleUnsubscribe)}
        >
          <Heading as="h2" st="unsubscribe.email.title" />
          <HStack justifyContent={'space-between'}>
            <Text
              fontSize="lg"
              fontWeight={'medium'}
              st="unsubscribe.deal.title"
            />
          </HStack>

          <HStack justifyContent={'space-between'}>
            <Text st="unsubscribe.deal.all" />
            <Checkbox
              defaultChecked={unsubscribeData?.deal_all}
              {...register('deal_all')}
            />
          </HStack>

          <HStack justifyContent={'space-between'}>
            <Text st="unsubscribe.deal.month" />

            <Controller
              control={control}
              name={'deal_twice_month'}
              defaultValue={unsubscribeData?.deal_twice_month}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  onChange={onChange}
                  isChecked={value}
                  isDisabled={watch('deal_all')}
                />
              )}
            />
          </HStack>

          <Divider />

          <HStack justifyContent={'space-between'}>
            <Text
              fontSize="lg"
              fontWeight={'medium'}
              st="unsubscribe.tips.title"
            />
          </HStack>

          <HStack justifyContent={'space-between'}>
            <Text st="unsubscribe.tips.all" />
            <Checkbox
              {...register('blog_weekly')}
              defaultChecked={unsubscribeData?.blog_weekly}
            />
          </HStack>

          <HStack justifyContent={'space-between'}>
            <Text st="unsubscribe.tips.month" />
            <Controller
              control={control}
              name={'blog_monthly'}
              defaultValue={unsubscribeData?.blog_monthly}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  onChange={onChange}
                  isChecked={value}
                  isDisabled={blogWeekly}
                />
              )}
            />
          </HStack>

          <Divider />

          <HStack justifyContent={'space-between'}>
            <Text
              st="unsubscribe.news.title"
              sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
            />
            <Checkbox
              {...register('news')}
              defaultChecked={unsubscribeData?.news}
            />
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text st="unsubscribe.route.tracking" />
            <Checkbox
              {...register('route_tracking')}
              defaultChecked={unsubscribeData?.route_tracking}
            />
          </HStack>

          <Heading as="h2" pt="10" st="unsubscribe.global.title" />
          <FormControl>
            <FormLabel>
              <Text st="unsubscribe.global.location" />
            </FormLabel>
            <LocationSelect
              onChange={(e) => setLocation(e)}
              defaultValue={unsubscribeData?.location}
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Text st="unsubscribe.global.language" />
            </FormLabel>
            <Controller
              control={control}
              name="locale"
              defaultValue={unsubscribeData?.locale}
              render={({ field: { value, onChange } }) => (
                <ReactSelect
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  options={locales}
                  value={locales.find((l) => l.value === value)}
                  onChange={(selectedOption) => onChange(selectedOption.value)}
                  placeholder="Select language"
                />
              )}
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Text st="unsubscribe.global.currency" />
            </FormLabel>
            <Controller
              control={control}
              name="currency"
              defaultValue={unsubscribeData?.currency}
              render={({ field: { value, onChange } }) => (
                <ReactSelect
                  onMenuScrollToBottom={() => {
                    if (data.has_more) {
                      setCurrencyPage(currencyPage + 1)
                    }
                  }}
                  isLoading={isLoading}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  options={currencies && currencies}
                  value={currencies?.find((c) => c.value === value)}
                  placeholder="Select currency"
                  onChange={(selectedOption) => onChange(selectedOption.value)}
                />
              )}
            />
          </FormControl>

          <Button
            primary
            type="submit"
            minW={{ md: '250px', base: 'none' }}
            w="full"
            isLoading={loading}
            id="save-unsubscribe-settings"
          >
            <Text st="common.general.save" />
          </Button>
        </VStack>
      )}
    </Box>
  )
}
