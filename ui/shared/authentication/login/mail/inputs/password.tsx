import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

{
  /* {errors.password.type === "hasNumber" && "Must have a number"}
    {errors.password.type === "hasSpecialChar" && "Must have a special char"}
    {errors.password.type === "hasLowercase" && "Must have a small letter"}
    {errors.password.type === "hasUppercase" && "Must have a capital letter"} */
}

export default function PasswordInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.password}>
      <Input
        type={'password'}
        autoComplete="password"
        placeholder={t('common.password.placeholder')}
        {...register('password', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
        })}
      />
      {errors.password && (
        <FormErrorMessage>{String(errors.password.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
