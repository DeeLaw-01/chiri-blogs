import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'

export default function BookingIdInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.bookingId}>
      <Input
        placeholder="27000000"
        {...register('bookingId', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          pattern: {
            value: /^270[\d\s]{3,}$/,
            message: t('new-manage-booking-page.invalid.booking.id.message'),
          },
        })}
      />
      {errors.bookingId && (
        <FormErrorMessage>{String(errors.bookingId.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
