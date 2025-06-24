import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
  Select,
  useDisclosure,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import useTravelersData from './atoms/useTravelersData'

import dynamic from 'next/dynamic'
import Button from 'ui/primitives/Button'
import Drawer from 'ui/primitives/Drawer'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import CountryFlag from 'ui/shared/country-flag'

import {
  getBritishDateFromISO,
  getFormattedISODateForBackend,
} from 'src/utils/dateUtils'
import DatePicker from '../checkout/datepicker'

import { genders, nationalities } from 'src/data/dropdown-data'
import getSignedEditPassengerDataQuery from 'src/api/queries/post/userProfileTravelerQuery'
import { Passenger } from '../new-checkout/checkout.type'

const DynamicRemoveTravelerModal = dynamic(
  () => import('./remove-traveler-modal')
)

type EditCardProps = {
  editType: 'name' | 'dob' | 'nationality&gender'
  passenger: Passenger
}

const EditCard = ({ editType, passenger }: EditCardProps) => {
  const toast = useToast()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen: isEditing, onToggle } = useDisclosure()
  const { setPassengerSavedDataArray } = useTravelersData()

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

  const passengerISODOB = new Date(passenger.birthday)

  const {
    setError,
    control,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<Passenger>({
    defaultValues: {
      firstname: passenger.firstname,
      surname: passenger.surname,
      nationality: nationalities.filter(
        (n) => n.value === passenger.nationality
      )[0]?.value,
      gender: genders.filter((g) => g.key === passenger.gender)[0]?.key,
      dob_date: {
        day: passengerISODOB.getDate(),
        month: passengerISODOB.getMonth() + 1,
        year: passengerISODOB.getFullYear(),
      },
    },
  })

  const saveEdit = (data, editType) => {
    setIsLoading(true)

    const payload = {
      traveler_id: passenger.traveler_id,
      ...passenger,
      ...(editType === 'name' && {
        firstname: data.firstname,
        surname: data.surname,
      }),
      ...(editType === 'dob' && {
        birthday: getFormattedISODateForBackend(
          +data.dob_date.year,
          +data.dob_date.month - 1,
          +data.dob_date.day
        ),
      }),
      ...(editType === 'nationality&gender' && {
        ...(data.gender && {
          gender: data.gender,
        }),
        ...(data.nationality && {
          nationality: data.nationality,
        }),
      }),
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
          const passengerIndex = passengerArray.findIndex(
            (p) => p.id === jsonData.id
          )

          const newPassengerArray = [...passengerArray]
          newPassengerArray[passengerIndex] = jsonData

          return newPassengerArray
        })

        toast({
          title: t('profile-page.settings.travelers.field.updated'),
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

      onToggle() // close editing view
      setIsLoading(false) // reset loading state
    })
  }

  const getTitle = () => {
    switch (editType) {
      case 'name':
        return {
          title: t('common.passenger.legal.name'),
          value: <Text>{`${passenger.firstname} ${passenger.surname}`}</Text>,
        }
      case 'dob':
        return {
          title: t('common.passenger.birthday.label'),
          value: <Text>{getBritishDateFromISO(passenger.birthday)}</Text>,
        }
      case 'nationality&gender':
        return {
          title: t('common.passenger.nationalitywithgender.label'),
          value: (
            <HStack spacing={2}>
              <Box minW={6}>
                <CountryFlag
                  height={24}
                  width={24}
                  country={passenger.nationality}
                />
              </Box>
              <Text
                st={
                  genders.find((gender) => gender.key === passenger.gender)
                    ?.label
                }
              ></Text>
            </HStack>
          ),
        }
    }
  }

  return (
    <>
      <Box w="full">
        <HStack justify="space-between" w="full" align="flex-start">
          <VStack align="flex-start">
            <Text fontSize="lg">{getTitle().title}</Text>
            {getTitle().value}
            {/* <Text color="_gray">{}</Text> */}
          </VStack>
          <Button asLink fontWeight="normal" h="auto" onClick={onToggle}>
            {isEditing ? t('common.general.close') : t('common.general.edit')}
          </Button>
        </HStack>

        {isEditing && (
          <>
            {editType === 'name' && (
              <Box mt={4}>
                <FormControl>
                  <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                    <Text notag st="common.contact.details.firstname.label" />
                  </FormLabel>
                  <Input
                    {...register('firstname', { required: true })}
                    type="text"
                    placeholder="eg: John"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                    <Text notag st="common.contact.details.lastname.label" />
                  </FormLabel>
                  <Input
                    {...register('surname', { required: true })}
                    type="text"
                    placeholder="eg: Doe"
                  />
                </FormControl>

                <Button
                  primary
                  w="full"
                  mt={4}
                  isLoading={isLoading}
                  isDisabled={!dirtyFields.firstname && !dirtyFields.surname}
                  onClick={handleSubmit((data) => saveEdit(data, editType))}
                >
                  <Text notag st="common.general.save" />
                </Button>
              </Box>
            )}

            {editType === 'dob' && (
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

                <Button
                  primary
                  w="full"
                  mt={4}
                  isLoading={isLoading}
                  isDisabled={!dirtyFields.dob_date}
                  onClick={handleSubmit((data) => saveEdit(data, editType))}
                >
                  <Text notag st="common.general.save" />
                </Button>
              </Box>
            )}

            {editType === 'nationality&gender' && (
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
                      {...register('nationality')}
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

                  <FormControl
                    id="passenger-gender"
                    isInvalid={!!errors.gender}
                  >
                    <FormLabel fontWeight="normal" fontSize="sm" color="_black">
                      <Text notag st="common.passenger.gender.label" />
                    </FormLabel>
                    <Select
                      name="sex"
                      autoComplete="sex"
                      placeholder={t('common.general.select')}
                      {...register('gender')}
                    >
                      {genders.map((gender, index) => (
                        <option value={gender.key} key={index}>
                          <Text st={gender.label} />
                        </option>
                      ))}
                    </Select>
                    {errors.gender && (
                      <FormErrorMessage>
                        {errors.gender.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </HStack>

                <Button
                  primary
                  w="full"
                  mt={4}
                  isLoading={isLoading}
                  isDisabled={!dirtyFields.nationality && !dirtyFields.gender}
                  onClick={handleSubmit((data) => saveEdit(data, editType))}
                >
                  <Text notag st="common.general.save" />
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>

      <Divider />
    </>
  )
}

export default function EditTravelerDrawer({
  isOpen,
  onClose,
  passenger,
}: {
  passenger: PassengerBackendForm
  isOpen: boolean
  onClose: () => void
}) {
  const {
    isOpen: isOpenRemoveTravelerModal,
    onOpen: onOpenRemoveTravelerModal,
    onClose: onCloseRemoveTravelerModal,
  } = useDisclosure()

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <Box>
          <HStack>
            <Heading
              as="h2"
              fontWeight="normal"
              st="profile-page.settings.travelers.heading"
            />
            {/* <Badge>Primary passenger</Badge> */}
          </HStack>

          <Text
            mt="2"
            mb="6"
            fontSize="sm"
            st="profile-page.settings.travelers.subheading"
          />

          <VStack spacing={6}>
            <EditCard editType="name" passenger={passenger} />
            <EditCard editType="nationality&gender" passenger={passenger} />
            <EditCard editType="dob" passenger={passenger} />
          </VStack>

          <Button
            red
            w="full"
            mt={6}
            py={3.5}
            h="auto"
            fontWeight="normal"
            onClick={onOpenRemoveTravelerModal}
          >
            <Text notag st="profile-page.settings.travelers.remove.traveler" />
          </Button>
        </Box>
      </Drawer>

      <DynamicRemoveTravelerModal
        passengerId={passenger.traveler_id}
        onCloseEditDrawer={onClose}
        isOpenRemoveTravelerModal={isOpenRemoveTravelerModal}
        onCloseRemoveTravelerModal={onCloseRemoveTravelerModal}
      />
    </>
  )
}
