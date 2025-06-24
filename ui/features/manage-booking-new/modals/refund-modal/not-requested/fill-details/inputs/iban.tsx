import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { isValidIBANNumber } from '../utils/validation'

export default function IBANInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.iban}>
      <Input
        {...register('iban', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          validate: (value) =>
            isValidIBANNumber(value) || t('manage-booking-page.iban.invalid'),
        })}
        placeholder="ex: DK50 0040 0440 1162 43"
      />
      {errors.iban && (
        <FormErrorMessage>{String(errors.iban.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
