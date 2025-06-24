import { FormControl, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { BASE_INPUT_HEIGHT } from 'ui/primitives/Form/base-styles'
import Input from 'ui/primitives/Form/Input'
import Button from 'ui/primitives/Button'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import CircleXMarkIcon from '@/icons/new/alert/circle-xmark.svg'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'

type PromocodeInputFieldProps = {
  success: boolean
  isLoading: boolean
  isDisabled: boolean
} & React.ComponentProps<typeof Input>

export default function PromocodeInputField({
  success,
  isLoading,
  isDisabled,
  ...rest
}: PromocodeInputFieldProps) {
  const methods = useFormContext()
  const hasError = !!methods.formState.errors.promocode
  const { t } = useTranslation()

  return (
    <FormControl isInvalid={hasError}>
      <InputGroup size="md">
        <Input
          {...methods.register('promocode', { required: true })}
          placeholder={t('common.promocode.enter.coupon')}
          pointerEvents={success ? 'none' : 'inherit'}
          bg={success ? '_lightgreen' : 'inherit'}
          borderColor={success ? '_green' : 'inherit'}
          color={success ? '_green' : 'initial'}
          onChange={() => methods.clearErrors('promocode')}
          isDisabled={isDisabled}
          {...rest}
        />
        <InputRightElement h={BASE_INPUT_HEIGHT} minW="fit-content">
          <Button
            id="apply-giftcard"
            asLink
            fontSize="sm"
            type="submit"
            isLoading={isLoading}
            isDisabled={isDisabled}
            color={success ? '_green' : '_red'}
            pr={4}
            justifyContent="flex-end"
          >
            {!success && !hasError ? (
              <Text notag st="common.general.apply" />
            ) : (
              <CircleXMarkIcon />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>

      {hasError && (
        <FormErrorMessage>
          {methods.formState.errors.promocode?.message?.toString()}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
