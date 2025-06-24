import { FormControl } from '@chakra-ui/react'
import { isValid, parseISO } from 'date-fns'
import { Controller, useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { PassengerCategory } from 'ui/features/new-checkout/checkout.type'
import DateInput from 'ui/primitives/Form/DateInput'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'

const ranges = {
  adult: { min: 12, max: 100 },
  child: { min: 2, max: 12 },
  infant: { min: 0, max: 2 },
}

type DateOfBirthInputProps = {
  type: PassengerCategory
}

export default function DateOfBirthInput({ type }: DateOfBirthInputProps) {
  const { t } = useTranslation()
  const {
    formState: { errors },
  } = useFormContext()

  const isValidDateInRange = (date: string): boolean => {
    if (!isValid(parseISO(date))) return false

    const [year] = date.split('-').map(Number)
    const { min, max } = ranges[type]

    const currentYear = new Date().getFullYear()
    const age = currentYear - year

    return age >= min && age <= max
  }

  return (
    <FormControl isInvalid={!!errors.birthday}>
      <Controller
        name="birthday"
        rules={{
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
          pattern: {
            value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            message: t('common.form.validation.datepicker.invalid'),
          },
          validate: (value) =>
            isValidDateInRange(value) ||
            t('common.form.validation.datepicker.bound.error'),
        }}
        render={({ field }) => <DateInput {...field} />}
      />
      {errors.birthday && (
        <FormErrorMessage>{String(errors.birthday.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
