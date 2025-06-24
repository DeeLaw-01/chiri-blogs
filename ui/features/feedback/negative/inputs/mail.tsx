import { FormControl } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import validateEmail from 'src/utils/validations/mail'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

export default function MailInput() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl id="contact-email" isInvalid={!!errors.email}>
      <Input
        defaultValue={email ?? ''}
        placeholder={'name@email.com'}
        {...register('email', {
          required: {
            value: true,
            message: t('common.validation.field.required'),
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
