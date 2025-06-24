import { FormControl } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-phone-input-2/lib/style.css'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import PhoneInput from 'ui/primitives/Form/PhoneInput'

export default function TelInput() {
  const { t } = useTranslation()
  const {
    setValue,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.phone}>
      <Controller
        name="phone"
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
        render={({ field: { onChange, ...rest } }) => (
          <PhoneInput
            {...rest}
            onChange={(value, data) => {
              onChange(value?.toString() || '')
              setValue('phone_number_country', data.dialCode)
            }}
          />
        )}
      />
      {errors.phone && (
        <FormErrorMessage>{String(errors.phone.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
