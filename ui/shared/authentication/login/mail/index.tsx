import { Box, HStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from 'ui/primitives/Button'
import FormLabel from 'ui/primitives/Form/FormLabel'
import Text from 'ui/primitives/Text'
import PasswordInput from './inputs/password'
import EmailInput from './inputs/email'
import { SignIn } from 'src/utils/userProfileUtils'
import Alert from 'ui/primitives/Alert'
import { useState } from 'react'
import { AuthState, useAuthAtoms } from '../../useAuthAtoms'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

type Form = {
  email: string
  password: string
}

export default function MailLogin() {
  const { setShowAuth } = useGlobalAtoms()
  const { setState } = useAuthAtoms()
  const [error, setError] = useState<boolean>(false)
  const methods = useForm<Form>({})

  const onSubmit = async (data: Form) => {
    setError(false)

    await SignIn(data.email, data.password).then((user) => {
      if (user) setShowAuth(false)
      else setError(true)
    })
  }

  return (
    <FormProvider {...methods}>
      <Box as="form" w="full" onSubmit={methods.handleSubmit(onSubmit)}>
        {error && (
          <Alert error icon my={3} fontSize={{ base: 'xs', md: 'sm' }}>
            <Text notag st={'common.incorrect.details'} />
          </Alert>
        )}
        <FormLabel>
          <Text st="common.email" />
        </FormLabel>
        <EmailInput />

        <HStack w="full" justify="space-between" mt="3">
          <FormLabel>
            <Text st="common.password" />
          </FormLabel>

          {/* FORGOT PASSWORD BUTTON */}
          <Button
            id="forgot-password"
            fontSize={{ base: '2xs', md: 'xs' }}
            asLink
            onClick={() => setState(AuthState.FORGOT)}
          >
            <Text notag st="common.forgot.password" />?
          </Button>
        </HStack>
        <PasswordInput />

        <Button
          id="login-submit"
          primary
          w="full"
          type="submit"
          mt="3"
          isLoading={methods.formState.isSubmitting}
        >
          <Text notag st="common.login" />
        </Button>
      </Box>
    </FormProvider>
  )
}
