import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { isValidBIC } from '../utils/validation'

export default function BICInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.bic}>
      <Input
        {...register('bic', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          validate: (value) =>
            isValidBIC(value) || t('manage-booking-page.bic.invalid'),
        })}
        placeholder="ex: AAAABBCC"
      />
      {errors.bic && (
        <FormErrorMessage>{String(errors.bic.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
