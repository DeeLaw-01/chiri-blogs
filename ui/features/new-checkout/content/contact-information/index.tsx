import { FormControl, Stack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Checkbox from 'ui/primitives/Checkbox'
import Text from 'ui/primitives/Text'
import Label from 'ui/primitives/Form/FormLabel'
import EmailInput from './inputs/email'
import NameInput from './inputs/name'
import useMutation from 'src/api/useMutation'
import checkoutemailSubmitQuery from 'src/api/queries/post/checkoutemailSubmitQuery'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import { Contact } from '../../checkout.type'
import { contactDetailsDataLayer } from 'src/tracking'
import useSessionStorage from 'src/hooks/useSessionStorage'
import SectionButton from '../shared/section-button'
import { Step } from '../../hooks/useCheckoutSteps/step.type'
import useCheckoutSteps from '../../hooks/useCheckoutSteps'
import { CONFIG_COMPANY } from 'src/config'
import useTranslation from 'src/hooks/useTranslation'
import EmailTripButton from '../email-trip-button'
import useAuth from 'src/hooks/useAuth'
import { useEffect } from 'react'
import { useSelectedLocation } from 'src/contexts/location'
import { useSelectedCurrency } from 'src/contexts/currency'
import { useSearchParams } from 'next/navigation'

export type ContactFormType = {} & Contact

export default function ContactInformation() {
  const { attributes, isUserLoggedIn, updateAttribute } = useAuth()
  const { trip, setContact } = useCheckoutAtoms()
  const { isCurrentIndex, getStepIndex, handleNextStep } = useCheckoutSteps()
  const { trigger } = useMutation((d) => checkoutemailSubmitQuery(d))
  const [ssData, setSSData] = useSessionStorage<ContactFormType>('contact')
  const { t } = useTranslation()
  const [selectedCity] = useSelectedLocation()
  const { selectedCurrency } = useSelectedCurrency()
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')

  const methods = useForm<ContactFormType>()

  useEffect(() => {
    if (isUserLoggedIn === undefined) return
    methods.reset({
      email: ssData?.email ?? attributes?.email,
      name: ssData?.name ?? getNameWithoutEmail(),
      agreed_to_marketing: ssData?.agreed_to_marketing,
    })
  }, [ssData, isUserLoggedIn])

  // We don't have name on all our customers. For the early ones we had to set their name as their email
  // This is to ensure we don't pre-populate name with an email.
  const getNameWithoutEmail = () => {
    if (attributes?.name.includes('@')) return ''
    else return attributes?.name
  }

  const handleOnSubmit = (data: ContactFormType) => {
    setContact(data)
    if (data.agreed_to_marketing) handleEmailSignup(data)

    // As mentioned in the above function, we have some users with email as their name.
    // Try to update this when possible.
    if (attributes?.name.includes('@')) updateAttribute({ name: data.name })

    contactDetailsDataLayer()
    setSSData(data)
    handleNextStep()
  }

  const handleEmailSignup = (data: ContactFormType) => {
    const body = {
      ...data,
      sessionId,
      currency: selectedCurrency?.code,
      locode: selectedCity.locode,
      tripId: trip?.id,
    }
    trigger(body)
  }

  return (
    <Card p={{ base: 3, md: 5 }}>
      <SectionButton
        title={t('checkout-page.contact.details.header')}
        step={getStepIndex(Step.Contact)}
      />
      {isCurrentIndex(Step.Contact) && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <Stack direction={['column', 'row']} mt="6" alignItems="flex-start">
              <FormControl>
                <Label>
                  <Text st="common.contact.details.name.label" />
                </Label>
                <NameInput />
              </FormControl>
              <FormControl>
                <Label>
                  <Text st="common.contact.details.email.label" />
                </Label>
                <EmailInput />
              </FormControl>
            </Stack>
            <Checkbox
              my="3"
              alignItems="flex-start"
              {...methods.register('agreed_to_marketing')}
            >
              <Text
                color="_gray"
                fontSize={{ base: '2xs', md: 'xs' }}
                st="checkout-page.contact.marketing.label"
                sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
              />
            </Checkbox>
            <Button
              primary
              id="checkout-contact-details"
              w="full"
              type="submit"
              mt="3"
            >
              <Text st="common.next.step" />
            </Button>
            <EmailTripButton />
          </form>
        </FormProvider>
      )}
    </Card>
  )
}
