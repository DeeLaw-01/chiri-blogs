import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import validateName from 'src/utils/validations/name'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

export default function NameInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.name}>
      <Input
        placeholder="John"
        type="text"
        {...register('name', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          validate: (value) =>
            validateName(value) || t('common.validation.name.message'),
        })}
      />
      {errors.name && (
        <FormErrorMessage>{String(errors.name.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
