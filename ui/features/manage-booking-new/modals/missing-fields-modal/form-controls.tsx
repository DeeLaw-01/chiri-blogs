import { FormControl } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Input from 'ui/primitives/Form/Input'
import { MissingFieldsFormType } from '.'
import DateInput from 'ui/primitives/Form/DateInput'

type MissingFieldFormControlsProps = {
  field: string
  idx: number
}

export default function MissingFieldFormControls({
  field,
  idx,
}: MissingFieldFormControlsProps) {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext<MissingFieldsFormType>()

  const isValidDateInRange = (value: string) => {
    const today = new Date()
    const date = new Date(value)
    return (
      date.getFullYear() >= today.getFullYear() &&
      date.getFullYear() <= today.getFullYear() + 60 &&
      !isNaN(date.getTime())
    )
  }

  switch (field) {
    case 'identification':
      return (
        <FormControl isInvalid={!!errors.passengers?.[idx]?.card_number}>
          <Input
            placeholder={t(
              'new-manage-booking-page.missing.fields.modal.identification'
            )}
            autoComplete="false"
            {...register(`passengers.${idx}.card_number`, {
              required: {
                value: true,
                message: t('common.form.validation.required'),
              },
            })}
          />
          {errors.passengers?.[idx]?.card_number && (
            <FormErrorMessage>
              {errors.passengers?.[idx]?.card_number.message}
            </FormErrorMessage>
          )}
        </FormControl>
      )
    case 'expiration_date':
      return (
        <FormControl isInvalid={!!errors.passengers?.[idx]?.expiration_date}>
          <Controller
            name={`passengers.${idx}.expiration_date`}
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
          {errors.passengers?.[idx]?.expiration_date && (
            <FormErrorMessage>
              {errors.passengers?.[idx]?.expiration_date.message}
            </FormErrorMessage>
          )}
        </FormControl>
      )
    default:
      return <></>
  }
}
