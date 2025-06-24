import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import validateEmail from 'src/utils/validations/mail'
import { ContactDetailsType } from 'ui/features/manage-booking-new/types/booking.type'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

type EmailInputProps = { details: ContactDetailsType }

export default function EmailInput({ details }: EmailInputProps) {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.email}>
      <Input
        defaultValue={details.email}
        {...register('email', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          validate: (value) =>
            validateEmail(value) || t('common.validation.email.message'),
        })}
      />
      {errors.email && (
        <FormErrorMessage>{String(errors.email.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
