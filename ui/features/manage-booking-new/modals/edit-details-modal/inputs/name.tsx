import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { ContactDetailsType } from 'ui/features/manage-booking-new/types/booking.type'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

type NameInputProps = { details: ContactDetailsType }

// NOT IN USE AT THE MOMENT
export default function NameInput({ details }: NameInputProps) {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.name}>
      <Input
        type="text"
        defaultValue={details.name}
        {...register('name', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
        })}
      />
      {errors.name && (
        <FormErrorMessage>{String(errors.name.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
