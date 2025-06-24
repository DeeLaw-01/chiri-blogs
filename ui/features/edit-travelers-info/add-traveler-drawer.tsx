import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Drawer from 'ui/primitives/Drawer'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import DatePicker from 'ui/features/checkout/datepicker'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import useTranslation from 'src/hooks/useTranslation'

import { getFormattedISODateForBackend } from 'src/utils/dateUtils'
import { genders, nationalities } from 'src/data/dropdown-data'

import useTravelersData from './atoms/useTravelersData'
import getSignedEditPassengerDataQuery from 'src/api/queries/post/userProfileTravelerQuery'

import { Passenger } from '../new-checkout/checkout.type'

export default function AddTravelerDrawer({ isOpen, onClose }) {
  const toast = useToast()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { setPassengerSavedDataArray } = useTravelersData()

  const {
    setError,
    control,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Passenger>()

  const currDate = new Date()

  const dobRanges = {
    adult: {
      min: currDate.getFullYear() - 100,
      max: currDate.getFullYear() - 12,
    },
    child: {
      min: currDate.getFullYear() - 12,
      max: currDate.getFullYear() - 2,
    },
    infant: {
      min: currDate.getFullYear() - 2,
      max: currDate.getFullYear() - 0,
    },
  }

  const addNewPassenger = (data: PassengerForm) => {
    setIsLoading(true)

    const payload = {
      firstname: data.firstname,
      surname: data.surname,
      birthday: getFormattedISODateForBackend(
        +data.dob_date.year,
        +data.dob_date.month - 1,
        +data.dob_date.day
      ),
      gender: data.gender,
      nationality: data.nationality,
    }

    getSignedEditPassengerDataQuery(payload).then(async (res) => {
      const data = await fetch(res.url, {
        method: res.method,
        body: res.body,
        headers: res.headers,
      })

      const jsonData = await data.json()

      if (data.ok) {
        setPassengerSavedDataArray((passengerArray) => {
          const newPassengerArray = [...passengerArray]
          newPassengerArray.unshift(jsonData)

          return newPassengerArray
        })

        toast({
          title: t('profile-page.settings.travelers.field.added'),
          status: 'success',
          duration: 4000,
          isClosable: false,
        })
      } else {
        toast({
          title: t('common.error.general'),
          status: 'error',
          duration: 4000,
          isClosable: false,
        })
      }

      setIsLoading(false) // reset loading state
    })
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Box>
        <HStack>
          <Heading
            as="h2"
            fontWeight="normal"
            st="profile-page.settings.travelers.new.traveler.heading"
          />
        </HStack>

        <Text
          mt="2"
          mb="6"
          fontSize="sm"
          st="profile-page.settings.travelers.subheading"
        />

        <VStack spacing={6} w="full">
          <Box w="full">
            <Text fontSize="lg" st="common.passenger.legal.name" />

            <Box mt={4}>
              <FormControl
                id="passenger-first-name"
                isInvalid={!!errors.firstname}
              >
                <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                  <Text notag st="common.contact.details.firstname.label" />
                </FormLabel>
                <Input
                  type="text"
                  name="fname"
                  autoComplete="given-name"
                  placeholder="eg: John"
                  {...register('firstname', {
                    required: {
                      value: true,
                      message: t('common.form.validation.required'),
                    },
                  })}
                />

                {errors.firstname && (
                  <FormErrorMessage>
                    {errors.firstname.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.surname}>
                <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                  <Text notag st="common.contact.details.lastname.label" />
                </FormLabel>
                <Input
                  type="text"
                  placeholder="eg: Doe"
                  {...register('surname', {
                    required: {
                      value: true,
                      message: t('common.form.validation.required'),
                    },
                  })}
                />

                {errors.surname && (
                  <FormErrorMessage>{errors.surname.message}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Box>

          <Box w="full">
            <Text
              fontSize="lg"
              st="common.passenger.nationalitywithgender.label"
            />

            <Box mt={4}>
              <HStack>
                <FormControl
                  id="passenger-nationality"
                  isInvalid={!!errors.nationality}
                >
                  <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                    <Text notag st="common.passenger.nationality.label" />
                  </FormLabel>
                  <Select
                    name="country"
                    autoComplete="country-name"
                    options={nationalities}
                    placeholder={t('common.general.select')}
                    {...register('nationality', {
                      required: {
                        value: true,
                        message: t('common.form.validation.required'),
                      },
                    })}
                  >
                    {nationalities.map((nationality, index) => (
                      <option value={nationality.value} key={index}>
                        {nationality.label}
                      </option>
                    ))}
                  </Select>
                  {errors.nationality && (
                    <FormErrorMessage>
                      {errors.nationality.message}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl id="passenger-gender" isInvalid={!!errors.gender}>
                  <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                    <Text notag st="common.passenger.gender.label" />
                  </FormLabel>
                  <Select
                    name="sex"
                    autoComplete="sex"
                    placeholder={t('common.general.select')}
                    {...register('gender', {
                      required: {
                        value: true,
                        message: t('common.form.validation.required'),
                      },
                    })}
                  >
                    {genders.map((gender, index) => (
                      <option value={gender.key} key={index}>
                        <Text st={gender.label} />
                      </option>
                    ))}
                  </Select>
                  {errors.gender && (
                    <FormErrorMessage>{errors.gender.message}</FormErrorMessage>
                  )}
                </FormControl>
              </HStack>
            </Box>
          </Box>

          <Box w="full">
            <Text fontSize="lg" st="common.passenger.birthday.label" />

            <Box mt={4}>
              <FormControl id="passenger-dob" w="full">
                <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                  <Text notag st="common.passenger.birthday.label" />
                </FormLabel>
                <DatePicker
                  name="dob_date"
                  error={errors}
                  setError={setError}
                  control={control}
                  clearErrors={clearErrors}
                  maxYear={dobRanges['adult'].max}
                  minYear={dobRanges['adult'].min}
                  maxYearBound={currDate.getFullYear()}
                />
              </FormControl>
            </Box>
          </Box>
        </VStack>

        <Button
          primary
          w="full"
          my={4}
          isLoading={isLoading}
          onClick={handleSubmit((data) => addNewPassenger(data))}
        >
          <Text notag st="common.general.save" />
        </Button>
      </Box>
    </Drawer>
  )
}
