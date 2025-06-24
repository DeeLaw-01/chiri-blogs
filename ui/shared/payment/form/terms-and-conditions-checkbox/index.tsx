import { FormControl } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { CONFIG_COMPANY } from 'src/config'
import useTranslation from 'src/hooks/useTranslation'
import Checkbox from 'ui/primitives/Checkbox'
import FormErrorMessage from 'ui/primitives/Form/FormErrorMessage'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'
import Trans from 'ui/shared/trans'

export default function TermsCheckbox() {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl id="terms-checkbox" isInvalid={!!errors.terms}>
      <Checkbox
        my={4}
        alignItems="flex-start"
        {...register('terms', {
          required: {
            value: true,
            message: t('payment.accept.terms.warning'),
          },
        })}
      >
        <Text color="_gray" fontSize={'xs'}>
          <Trans
            st="payment.payment.accept.terms"
            sd={{
              company_name: CONFIG_COMPANY.COMPANY_NAME,
              tos: (chunks) => (
                <Link isExternal href="/terms-and-conditions">
                  {chunks}
                </Link>
              ),
            }}
          />
        </Text>
      </Checkbox>
      {errors.terms && (
        <FormErrorMessage mt={-3} mb={3}>
          {String(errors.terms.message)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
