import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'
import { numberPattern } from 'src/shared-types/validation-patterns'

export default function ConfirmationCodeInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.confirmation_code}>
      <Input
        placeholder={t('common.confirmation.code.placeholder')}
        autoComplete="code"
        {...register('confirmation_code', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          pattern: {
            value: numberPattern,
            message: t('common.validation.otp.number'),
          },
          maxLength: {
            value: 6,
            message: t('common.validation.otp.length'),
          },
        })}
      />
      {errors.confirmation_code && (
        <FormErrorMessage>
          {String(errors.confirmation_code.message)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
