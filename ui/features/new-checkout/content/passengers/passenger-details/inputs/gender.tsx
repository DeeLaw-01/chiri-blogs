import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Select from 'ui/primitives/Form/Select'
import Text from 'ui/primitives/Text'

const genders = [
  { value: 'Male', label: 'data.gender.male' },
  { value: 'Female', label: 'data.gender.female' },
]

export default function GenderInput() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.gender}>
      <Select
        {...register('gender', {
          required: {
            value: true,
            message: t('common.form.validation.required'),
          },
        })}
      >
        {genders.map((gender) => (
          <option value={gender.value} key={gender.label}>
            <Text st={gender.label} />
          </option>
        ))}
      </Select>
      {errors.gender && (
        <FormErrorMessage>{String(errors.gender.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
