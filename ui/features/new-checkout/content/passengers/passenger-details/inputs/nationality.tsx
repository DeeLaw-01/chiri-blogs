import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import { nationalities } from 'src/data/dropdown-data'
import Select from 'ui/primitives/Form/Select'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'

export default function NationalityInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.nationality}>
      <Select
        {...register('nationality', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
        })}
      >
        {nationalities.map((nationality) => (
          <option value={nationality.value} key={nationality.label}>
            {nationality.label}
          </option>
        ))}
      </Select>
      {errors.nationality && (
        <FormErrorMessage>
          {String(errors.nationality.message)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
