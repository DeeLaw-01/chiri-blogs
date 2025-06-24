import { Box, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { initiateForgotPassword } from 'src/utils/userProfileUtils'
import Button from 'ui/primitives/Button'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import Heading from 'ui/primitives/Heading'
import { useAuthAtoms, AuthState } from '../useAuthAtoms'
import EmailInput from './inputs/mail'
import FormLabel from 'ui/primitives/Form/FormLabel'
import Text from 'ui/primitives/Text'
import Alert from 'ui/primitives/Alert'

type Form = {
  email: string
}

export default function ForgotPassword(): JSX.Element {
  const [error, setError] = useState<boolean>(false)
  const { setState, setEmail } = useAuthAtoms()

  const methods = useForm<Form>({})

  const onSubmit: SubmitHandler<Form> = async (data: Form): Promise<void> => {
    setError(false)
    const res = await initiateForgotPassword(data.email)
    if (res) handleSuccess(data.email)
    else setError(true)
  }

  const handleSuccess = (email: string) => {
    setEmail(email)
    setState(AuthState.FORGOT_CONFIRM)
  }

  return (
    <Box pt="8" pb="4" textAlign="center">
      {error && (
        <Alert error icon mb="2">
          <Text st="common.error.general" />
        </Alert>
      )}
      <Heading as="h2" st="common.forgot.password" />
      <Text mt="2" secondary st="common.forgot.password.header.description" />
      <VStack pt="4" w="full" spacing={4}>
        <FormProvider {...methods}>
          <Box w="full" as="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <FormLabel mt="3">
              <Text display="inline" st="common.email" />
            </FormLabel>
            <EmailInput />

            <Button
              id="forgot-next"
              primary
              w="full"
              type="submit"
              isLoading={methods.formState.isSubmitting}
              mt="4"
            >
              <Text notag st="common.general.next" />
            </Button>
            <Button
              id="forgot-back"
              asLink
              onClick={() => setState(AuthState.LOGIN)}
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="normal"
              mt="2"
            >
              <Text notag st="common.general.back" />
            </Button>
          </Box>
        </FormProvider>
      </VStack>
    </Box>
  )
}
