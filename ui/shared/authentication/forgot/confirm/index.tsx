import { Box, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import {
  completeForgotPassword,
  resendConfirmationCode,
} from 'src/utils/userProfileUtils'
import Button from 'ui/primitives/Button'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import Heading from 'ui/primitives/Heading'
import FormLabel from 'ui/primitives/Form/FormLabel'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'
import { useAuthAtoms, AuthState } from '../../useAuthAtoms'
import ConfirmationCodeInput from '../inputs/confirmation-code'
import PasswordInput from '../inputs/password'

type Form = { email: string; confirmation_code: string; password: string }

export default function ForgotConfirm(): JSX.Element {
  const [error, setError] = useState<boolean>(false)
  const [resendLoading, setResendLoading] = useState<boolean>(false)
  const { setState, email } = useAuthAtoms()

  const methods = useForm<Form>({})

  const onSubmit: SubmitHandler<Form> = async (data: Form): Promise<void> => {
    setError(false)

    const res = await completeForgotPassword(
      data.email,
      data.confirmation_code,
      data.password
    )

    if (res) setState(AuthState.LOGIN)
    else setError(true)
  }

  const handleResendConfirmationCode = () => {
    setResendLoading(true)

    resendConfirmationCode(email)

    setTimeout(() => {
      setResendLoading(false)
    }, 5000)
  }

  return (
    <Box pt="8" pb="4" textAlign="center">
      <Heading as="h2" st="common.forgot.password" />
      <VStack pt="4" w="full" spacing={4}>
        <FormProvider {...methods}>
          {!error && (
            <Alert success icon>
              <Text
                st="common.forgot.password.link.sent"
                sd={{ email: email }}
              />
            </Alert>
          )}
          {error && (
            <Alert error icon mb="2">
              <Text st="common.error.general" />
            </Alert>
          )}
          <Box w="full" as="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <HStack w="full" justify="space-between">
              <FormLabel mt="3">
                <Text st="common.confirmation.code" />
              </FormLabel>
              <Button
                id="confirmation-resend"
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="normal"
                onClick={() => handleResendConfirmationCode()}
                isLoading={resendLoading}
                justifyContent="flex-end"
                asLink
              >
                <Text st="common.forgot.password.resend.code" />
              </Button>
            </HStack>
            <ConfirmationCodeInput />

            <FormLabel mt="3">
              <Text st="common.password" />
            </FormLabel>
            <PasswordInput />

            <Button
              id="forgot-next"
              primary
              w="full"
              type="submit"
              isLoading={methods.formState.isSubmitting}
              mt="4"
            >
              <Text notag st="common.general.confirm" />
            </Button>
            <Button
              id="forgot-back"
              asLink
              onClick={() => setState(AuthState.LOGIN)}
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="normal"
              mt="2"
            >
              <Text notag st="common.general.cancel" />
            </Button>
          </Box>
        </FormProvider>
      </VStack>
    </Box>
  )
}
