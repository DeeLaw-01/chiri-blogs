import { Box, HStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import emailSignupQuery from 'src/api/queries/post/emailSignupQuery'
import useMutation from 'src/api/useMutation'
import { useSelectedCurrency } from 'src/contexts/currency'
import { useSelectedLocation } from 'src/contexts/location'
import Button from 'ui/primitives/Button'
import MailInput from './mail-input'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import useSessionStorage from 'src/hooks/useSessionStorage'

export type SignupFormData = {
  email: string
}

type SignupFormProps = {
  setIsUserSignedUp: (v: boolean) => void
}

export default function SignupForm({ setIsUserSignedUp }: SignupFormProps) {
  const [, setIsUserSignedUpSS] = useSessionStorage('isUserSignedUp')
  const { selectedCurrency } = useSelectedCurrency()
  const [selectedCity] = useSelectedLocation()
  const methods = useForm<SignupFormData>({})

  const { trigger, isMutating } = useMutation((d) => emailSignupQuery(d))

  const onSubmit = (form: SignupFormData) => {
    const data = {
      ...form,
      locode: selectedCity?.locode ?? '',
      currency: selectedCurrency.code,
    }

    trigger(data, { onSuccess: handleSuccess })
  }

  const handleSuccess = () => {
    setIsUserSignedUp(true)
    setIsUserSignedUpSS(true)
  }

  return (
    <Box w="full" textAlign={'center'}>
      <Heading as="h3" mb="2" st="blog-page.email.banner.header" />
      <Text
        color="_gray"
        fontSize="xs"
        st="blog-page.email.banner.description"
      />

      <FormProvider {...methods}>
        <HStack
          mt="3"
          mb="1"
          w="full"
          alignItems="flex-start"
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <MailInput />
          <Button
            primary
            isLoading={isMutating}
            id="blog-signup-email"
            fontSize={{ base: 'sm', md: 'md' }}
            px={8}
            type="submit"
            h={{ base: 10, md: 12 }}
          >
            <Text st="common.email.popup.subscribe" />
          </Button>
        </HStack>
      </FormProvider>
    </Box>
  )
}
