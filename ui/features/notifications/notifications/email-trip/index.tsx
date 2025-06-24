import { FormControl, FormErrorMessage, HStack, Input } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import { NotificationType } from '../../notification.type'
import NotificationLayout from '../../base-layout'
import Text from 'ui/primitives/Text'
import { useNotification } from 'src/contexts/notification'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useForm } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import useMutation from 'src/api/useMutation'
import tripEmailSubmitQuery from 'src/api/queries/post/tripEmailSubmitQuery'
import { useEffect } from 'react'
import validateEmail from 'src/utils/validations/mail'
import { useSearchParams } from 'next/navigation'
import { useSelectedLocation } from 'src/contexts/location'
import { useSelectedCurrency } from 'src/contexts/currency'

type EmailTripProps = {
  notification: NotificationType
}

type EmailTripForm = {
  email: string
}

export default function EmailTrip({ notification }: EmailTripProps) {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('sessionId')
  const [selectedCity] = useSelectedLocation()
  const { selectedCurrency } = useSelectedCurrency()
  const { isMobile } = useResponsiveSizes()
  const { closeNotification, setIsPaused } = useNotification()
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<EmailTripForm>()
  const { trigger, isMutating } = useMutation((d) => tripEmailSubmitQuery(d))

  const handleEmailSubmit = async (form: EmailTripForm) => {
    const data = {
      email: form.email,
      tripId: notification.data.tripId,
      locode: selectedCity?.locode,
      currency: selectedCurrency?.code,
      sessionId: sessionId,
    }
    await trigger(data)
    closeNotification(notification.id)
  }

  useEffect(() => {
    if (dirtyFields.email) setIsPaused(notification.id)
  }, [dirtyFields])

  if (isMobile) return <></>

  return (
    <NotificationLayout
      id={notification.id}
      header={<Text st="notifications.email.tripbanner.heading" />}
      description={<Text st="notifications.email.tripbanner.description" />}
      content={
        <form onSubmit={handleSubmit(handleEmailSubmit)}>
          <FormControl mt="2" isInvalid={!!errors.email}>
            {errors.email && (
              <FormErrorMessage>
                <Text>{errors.email.message?.toString()}</Text>
              </FormErrorMessage>
            )}
            <HStack gap={1}>
              <Input
                borderRadius="lg"
                border="1px solid"
                borderColor="_lightgray"
                bg="_white"
                placeholder={'email@email.com'}
                color="_darkgray"
                {...register('email', {
                  required: t('common.form.validation.required'),
                  validate: (value) =>
                    validateEmail(value) ||
                    t('common.validation.email.message'),
                })}
              />

              <Button
                secondary
                id="send-holiday-email"
                px={{ base: 5, md: 10 }}
                isLoading={isMutating}
                type="submit"
              >
                <Text notag st="common.send" />
              </Button>
            </HStack>
          </FormControl>
        </form>
      }
    />
  )
}
