import { FormControl, Stack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Label from 'ui/primitives/Form/FormLabel'
import FirstNameInput from './inputs/first-name'
import LastNameInput from './inputs/last-name'
import NationalityInput from './inputs/nationality'
import GenderInput from './inputs/gender'
import LuggageSelect from './luggage-select'
import PhoneInput from './inputs/phone-input'
import DateOfBirthInput from './inputs/date-of-birth'
import { useCheckoutAtoms } from 'ui/features/new-checkout/useCheckoutAtoms'
import { Passenger } from 'ui/features/new-checkout/checkout.type'
import SaveInformationCheckbox from './inputs/save-information'
import useSignedMutation from 'src/api/useSignedMutation'
import savePassengerQuery from 'src/api/queries/post/checkout/savePassengerQuery'
import SavedPassengers from '../saved-passengers'
import useAuth from 'src/hooks/useAuth'
import useSessionStorage from 'src/hooks/useSessionStorage'
import SectionButton from '../../shared/section-button'
import useCheckoutSteps from 'ui/features/new-checkout/hooks/useCheckoutSteps'
import { Step } from 'ui/features/new-checkout/hooks/useCheckoutSteps/step.type'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'
import { getTranslatedPassengerType } from 'ui/features/new-checkout/utils/getTranslatedPassengerType'
import { useEffect } from 'react'

type PassengerFormType = { save_information: boolean } & Passenger

type PassengerDetailsProps = {
  index: number
}

export default function PassengerDetails({ index }: PassengerDetailsProps) {
  const { isUserLoggedIn, updateAttribute, attributes } = useAuth()
  const { isCurrentIndex, getStepIndex, handleNextStep } = useCheckoutSteps()
  const { setPassengers, luggage, passengers } = useCheckoutAtoms()
  const [ssData, setSSData] =
    useSessionStorage<PassengerFormType[]>('passenger')

  const methods = useForm<PassengerFormType>({})
  const { trigger } = useSignedMutation((d) => savePassengerQuery(d))
  const { t } = useTranslation()

  useEffect(() => {
    const phone = {
      phone: index === 0 ? attributes?.phone_number : ssData?.[0]?.phone,
    }

    methods.reset({ ...ssData?.[index], ...phone })
  }, [ssData, isUserLoggedIn])

  const handleOnSubmit = (data: PassengerFormType) => {
    if (data.save_information) trigger(data)

    handleSetPassengers(data)
    handleSetPhoneUserAttribute(data)
    handleSetSessionStorageData(data)
    handleNextStep()
  }

  const handleSetPassengers = (data: PassengerFormType) => {
    setPassengers((prev) =>
      prev.map((p, idx) => (idx === index ? { ...p, ...data } : p))
    )
  }

  const handleSetPhoneUserAttribute = (data: PassengerFormType) => {
    if (
      !data.phone ||
      !isUserLoggedIn ||
      data.phone === attributes.phone_number
    )
      return

    updateAttribute({ phone_number: `+${data.phone}` })
  }

  const handleSetSessionStorageData = (data: PassengerFormType) => {
    const passengerdata = ssData || []
    passengerdata[index] = data
    setSSData(passengerdata)
  }

  const passenger = passengers[index]
  const formValues = methods.watch()

  return (
    <Card p={{ base: 3, md: 5 }} w="full">
      <SectionButton
        title={t('checkout-page.type.header', {
          index: index + 1,
          type: t(getTranslatedPassengerType(passenger.category)),
        })}
        step={getStepIndex(Step.Passenger, index)}
      />
      {isCurrentIndex(Step.Passenger, index) && (
        <FormProvider {...methods}>
          {isUserLoggedIn && <SavedPassengers />}
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <Stack direction={['column', 'row']} alignItems="flex-start" mt="5">
              <FormControl>
                <Label>
                  <Text st="checkout-page.passenger.firstname.label" />
                </Label>
                <FirstNameInput />
              </FormControl>
              <FormControl>
                <Label>
                  <Text st="checkout-page.passenger.lastname.label" />
                </Label>
                <LastNameInput />
              </FormControl>
            </Stack>
            <Stack direction={['column', 'row']} mt="3" alignItems="flex-start">
              <FormControl>
                <Label>
                  <Text st="common.passenger.nationality.label" />
                </Label>
                <NationalityInput />
              </FormControl>
              <FormControl>
                <Label>
                  <Text st="common.passenger.gender.label" />
                </Label>
                <GenderInput />
              </FormControl>
            </Stack>
            <Stack direction={['column', 'row']} mt="3" alignItems="flex-start">
              {index === 0 && (
                <FormControl>
                  <Label>
                    <Text st="common.contact.details.phone.label" />
                  </Label>
                  <PhoneInput />
                </FormControl>
              )}
              <FormControl>
                <Label>
                  <Text st="common.passenger.birthday.label" />
                </Label>
                <DateOfBirthInput type={passenger.category} />
              </FormControl>
            </Stack>
            {isUserLoggedIn && !formValues.traveler_id && (
              <FormControl>
                <SaveInformationCheckbox />
              </FormControl>
            )}

            <LuggageSelect passenger={passenger} index={index} />
            <Button
              primary
              mt="3"
              id="checkout-contact-details"
              w="full"
              type="submit"
              isDisabled={!luggage}
            >
              <Text st="common.next.step" />
            </Button>
          </form>
        </FormProvider>
      )}
    </Card>
  )
}
