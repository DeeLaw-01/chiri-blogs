import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import useTranslation from 'src/hooks/useTranslation'
import Textarea from 'ui/primitives/Form/Textarea'

export default function MessageInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  return (
    <FormControl id="message" isInvalid={!!errors.message}>
      <Textarea
        w="full"
        placeholder={t('feedback-page.review.placeholder')}
        isRequired
        {...register('message', {
          required: {
            value: true,
            message: t('common.validation.field.required'),
          },
        })}
      />
      {errors.message && (
        <FormErrorMessage>{String(errors.message.message)}</FormErrorMessage>
      )}
    </FormControl>
  )
}
