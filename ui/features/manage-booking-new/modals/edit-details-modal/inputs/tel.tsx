import { FormControl } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { ContactDetailsType } from 'ui/features/manage-booking-new/types/booking.type'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import PhoneInput from 'ui/primitives/Form/PhoneInput'

type TelInputProps = { details: ContactDetailsType }

export default function TelInput({ details }: TelInputProps) {
  const { t } = useTranslation()
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.tel}>
      <Controller
        name="tel"
        rules={{
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          pattern: {
            value: /^\+?[1-9]\d{1,14}$/,
            message: t('common.form.validation.phone.invalid'),
          },
        }}
        defaultValue={details?.tel}
        render={({ field: { value, onChange, onBlur } }) => (
          <PhoneInput value={value} onChange={onChange} onBlur={onBlur} />
        )}
      />
      {errors.tel && (
        <FormErrorMessage>{String(errors.tel.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
