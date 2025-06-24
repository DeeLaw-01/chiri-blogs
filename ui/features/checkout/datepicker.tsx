import {
  NumberInput,
  HStack,
  Select,
  Box,
  NumberInputField,
} from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

import {
  Controller,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form'

import { useEffect, useState } from 'react'
import { parse, isValid } from 'date-fns'
import { enGB } from 'date-fns/locale'

import useTranslation from 'src/hooks/useTranslation'
import getObjectFieldsUsingStrings from 'src/utils/getObjectFieldsUsingStrings'

export const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

type DatePickerProps = {
  error: any
  setError: UseFormSetError<any>
  clearErrors: UseFormClearErrors<any>
  control: any
  name: string
  minYear?: number
  maxYear?: number
  maxYearBound?: number
  idx?: number
}

export default function DatePicker({
  control,
  error,
  setError,
  clearErrors,
  name,
  minYear,
  maxYear,
  maxYearBound,
}: DatePickerProps): JSX.Element {
  const { t } = useTranslation()
  const [month, setMonth] = useState<number>()
  const [year, setYear] = useState<number | string>('')
  const [day, setDay] = useState<number | string>('')

  const handleMaxLengthVal = (val: number, min, max, setter) => {
    if (isNaN(val)) return setter('')

    if (val > max || val < min) return

    setter(val)
  }

  function isValidDate(day, month, year) {
    if (!month) return false

    const parsed = parse(`${day}/${month}/${year}`, 'P', new Date(), {
      locale: enGB,
    })
    return isValid(parsed)
  }

  useEffect(() => {
    if (day && (month || month === 0) && year) {
      const date = isValidDate(day, month, year)

      if (date) {
        clearErrors(`${name}`)
      } else {
        setError(`${name}`, {
          message: t('common.form.validation.datepicker.invalid'),
        })
      }
    }
  }, [day, month, year])

  const errorValue = getObjectFieldsUsingStrings(error, name)

  return (
    <Box>
      <HStack w="full" spacing={1}>
        <Box
          h="10"
          w="full"
          bg="_white"
          borderRadius={'lg'}
          border="1px solid"
          borderColor={errorValue ? '_red' : '_lightgray'}
          boxShadow={errorValue && '0 0 0 1px #e53e3e'}
        >
          <HStack spacing={0}>
            <Controller
              name={`${name}.day`}
              control={control}
              render={({ field }) => (
                <NumberInput
                  value={day}
                  {...field}
                  w="150px"
                  borderRadius={0}
                  onChange={(val) => {
                    field.onChange(val)
                    handleMaxLengthVal(parseInt(val), 1, 31, setDay)
                  }}
                  width={{ base: '20%', md: '30%' }}
                >
                  <NumberInputField
                    px={4}
                    border={0}
                    placeholder="DD"
                    borderRightRadius={0}
                    paddingInlineEnd={0}
                    _focus={{ outline: 'none', boxShadow: 'none' }}
                  />
                </NumberInput>
              )}
              rules={{
                required: {
                  value: true,
                  message: t('common.form.validation.datepicker.empty'),
                },
                min: {
                  value: 1,
                  message: t('common.form.validation.datepicker.bound.error'),
                },
                max: {
                  value: 31,
                  message: t('common.form.validation.datepicker.bound.error'),
                },
              }}
            />

            <Box
              h="30px"
              borderLeft="1px solid"
              borderColor={errorValue ? '_red' : '_lightgray'}
            />

            <Controller
              name={`${name}.month`}
              control={control}
              render={({ field }) => (
                <Select
                  value={month}
                  {...field}
                  border={0}
                  borderRadius={0}
                  _focus={{ outline: 'none', boxShadow: 'none' }}
                  placeholder={t('common.general.select')}
                  onChange={(e) => {
                    const monthVal = parseInt(e.target.value) - 1
                    field.onChange(+e.target.value)
                    if (e.target.value === '') setMonth(0)
                    else setMonth(monthVal + 1)
                  }}
                  width={{ base: '50%', md: '40%' }}
                >
                  {months.map((m: string, idx: number) => {
                    return (
                      <option key={idx} value={idx + 1}>
                        <Text st={`data.month.${m.toLowerCase()}`} />
                      </option>
                    )
                  })}
                </Select>
              )}
              rules={{
                required: {
                  value: true,
                  message: t('common.form.validation.datepicker.empty'),
                },
              }}
            />

            <Box
              h="30px"
              borderLeft="1px solid"
              borderColor={errorValue ? '_red' : '_lightgray'}
            />

            <Controller
              name={`${name}.year`}
              control={control}
              render={({ field }) => (
                <NumberInput
                  value={year}
                  {...field}
                  border={0}
                  _focus={{ outline: 'none', boxShadow: 'none' }}
                  onChange={(val) => {
                    field.onChange(val)
                    handleMaxLengthVal(parseInt(val), 1, maxYearBound, setYear)
                  }}
                  width={'30%'}
                >
                  <NumberInputField
                    pl={4}
                    border={0}
                    placeholder="YYYY"
                    borderLeftRadius={0}
                    paddingInlineEnd={0}
                    _focus={{ outline: 'none', boxShadow: 'none' }}
                  />
                </NumberInput>
              )}
              rules={{
                required: {
                  value: true,
                  message: t('common.form.validation.datepicker.empty'),
                },
                min: {
                  value: minYear,
                  message: t('common.form.validation.datepicker.bound.error'),
                },
                max: {
                  value: maxYear,
                  message: t('common.form.validation.datepicker.bound.error'),
                },
              }}
            />
          </HStack>
        </Box>
      </HStack>

      {errorValue && (
        <Text color="_red" fontSize="sm" mt="2" lineHeight="normal">
          {errorValue.message
            ? errorValue.message
            : errorValue.year?.message
            ? errorValue.year?.message
            : errorValue.day?.message}
        </Text>
      )}
    </Box>
  )
}
