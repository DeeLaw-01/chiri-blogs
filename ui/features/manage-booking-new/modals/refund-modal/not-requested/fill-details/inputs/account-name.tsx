import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import validateName from 'src/utils/validations/name'
import validateFullName from 'src/utils/validations/fullname'

export default function AccountNameInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.account_name}>
      <Input
        type="text"
        {...register('account_name', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          validate: {
            validateName: (value) =>
              validateName(value) || t('common.validation.name.message'),

            validFullName: (value) =>
              validateFullName(value) ||
              t('common.form.validation.lastname.required'),
          },
        })}
        placeholder={'ex: John Doe'}
      />
      {errors.account_name && (
        <FormErrorMessage>
          {String(errors.account_name.message)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
