import { Box, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { FormProvider, useForm } from 'react-hook-form'
import Heading from 'ui/primitives/Heading'
import FormLabel from 'ui/primitives/Form/FormLabel'
import EmailInput from './inputs/mail'
import PasswordInput from './inputs/password'
import NameInput from './inputs/name'
import { signUp } from 'src/utils/userProfileUtils'
import { AuthState, useAuthAtoms } from '../useAuthAtoms'
import { useLocale } from 'next-intl'

type Form = {
  name: string
  email: string
  password: string
}

export default function Signup(): JSX.Element {
  const locale = useLocale()
  const { setState } = useAuthAtoms()
  const [error, setError] = useState<boolean>(false)

  const methods = useForm<Form>({})

  const onSubmit = async (data: Form) => {
    await signUp(data.email, data.password, data.name, locale).then((user) => {
      if (user) setState(AuthState.VERIFY)
      else setError(true)
    })
  }

  return (
    <Box my="5">
      <Heading as="h2" textAlign={'center'} st="common.signup" />
      <FormProvider {...methods}>
        <Box w="full" as="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormLabel mt="3">
            <Text notag st="common.contact.details.name.label" />
          </FormLabel>
          <NameInput />
          <FormLabel mt="3">
            <Text display="inline" st="common.email" />
          </FormLabel>
          <EmailInput />

          <FormLabel mt="3">
            <Text display="inline" st="common.password" />
          </FormLabel>
          <PasswordInput />

          <Button
            isLoading={methods.formState.isSubmitting}
            primary
            w="full"
            type="submit"
            id="sign-up-button"
            mt="3"
          >
            <Text notag st="common.signup" />
          </Button>
          <HStack w="full" justify={'center'} fontSize={'sm'} mt="3">
            <Text st="common.already.account" />
            <Button
              asLink
              onClick={() => setState(AuthState.LOGIN)}
              id="login-form-button"
            >
              <Text st="common.login" />
            </Button>
          </HStack>
        </Box>
      </FormProvider>
    </Box>
  )
}
