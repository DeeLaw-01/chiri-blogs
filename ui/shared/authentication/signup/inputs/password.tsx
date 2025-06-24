import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { passwordPattern } from 'src/shared-types/validation-patterns'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

export default function PasswordInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.password}>
      <Input
        placeholder={t('common.password.placeholder')}
        type="password"
        autoComplete="password"
        {...register('password', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          minLength: {
            value: 8,
            message: t('common.validation.password.min.length'),
          },
          pattern: {
            value: passwordPattern,
            message: t('common.validation.password.message'),
          },
        })}
      />
      {errors.password && (
        <FormErrorMessage>{String(errors.password.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
