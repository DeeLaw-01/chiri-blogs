import Text from 'ui/primitives/Text'
import { Box, Input, BoxProps, VStack, ButtonProps } from '@chakra-ui/react'
import { useIsMounted } from 'src/hooks/useIsMounted'
import TickIcon from '@/icons/new-homepage/tick-circle.svg'
import { useState } from 'react'
import { useSelectedLocation } from 'src/contexts/location'
import emailSignupQuery from 'src/api/queries/post/emailSignupQuery'
import Button from 'ui/primitives/Button'
import useTranslation from 'src/hooks/useTranslation'
import Heading from 'ui/primitives/Heading'
import { useSelectedCurrency } from 'src/contexts/currency'
import { theme } from 'src/styles/theme'
import NextLink from 'next/link'
import useSessionStorage from 'src/hooks/useSessionStorage'
import useMutation from 'src/api/useMutation'

interface EmailSignupFormProps extends BoxProps {
  textColor?: string
  header?: string
  isFooter?: boolean
  campaign?: string
  subscribeButtonProps?: ButtonProps
  onUserSignup?: () => void
}
export default function EmailSignupForm({
  textColor = '_black',

  header = 'common.footer.email.header',
  isFooter,
  campaign,
  subscribeButtonProps,
  onUserSignup,
  ...rest
}: EmailSignupFormProps): JSX.Element {
  const { t } = useTranslation()
  const isMounted = useIsMounted()
  const [email, setEmail] = useState<string>('')
  const [selectedCity] = useSelectedLocation()
  const { selectedCurrency } = useSelectedCurrency()
  const [isUserSignedUp, setIsUserSignedUp] =
    useSessionStorage('isUserSignedUp')

  const { trigger, isMutating: loading } = useMutation((d) =>
    emailSignupQuery(d)
  )

  const handleEmailSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: email,
      locode: selectedCity?.locode ?? '',
      currency: selectedCurrency.code,
      campaign: campaign,
    }

    trigger(data, {
      onSuccess: callbackEmailSignupQuerySuccess,
    })
  }

  const callbackEmailSignupQuerySuccess = () => {
    setIsUserSignedUp(true)
    if (onUserSignup) {
      onUserSignup()
    }
  }
  return (
    <>
      {isMounted.current && isUserSignedUp ? (
        <VStack
          textAlign={'center'}
          alignItems="center"
          justifyContent={'center'}
          gap={2}
          width={'full'}
          {...rest}
          color={textColor}
        >
          <TickIcon
            width="45"
            height="45"
            stroke={theme.colors.primary}
            strokeWidth={3}
            fill={theme.colors._white}
          />

          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            st="common.footer.email.subscribed"
          />
          <Text
            fontSize={{ base: 'sm', md: 'lg' }}
            st="common.footer.email.receive.deals"
          />
        </VStack>
      ) : (
        <>
          {!isFooter && (
            <Heading as="h3" color={textColor} st={header} zIndex={1} />
          )}

          <Box
            mt="4"
            pos="relative"
            as="form"
            onSubmit={handleEmailSubmit}
            color={textColor}
            {...rest}
          >
            <Input
              py={{ base: 3, md: 4 }}
              h="auto"
              bg="_white"
              isRequired
              type="email"
              border="none"
              color={'_black'}
              value={email}
              borderRadius="lg"
              variant="filled"
              placeholder={t('common.email.popup.input.placeholder')}
              _hover={{ bg: 'white' }}
              w="full"
              onChange={(e) => setEmail(e.target.value)}
              _focusWithin={{ bg: '_white', boxShadow: 'lg' }}
            />
            <Button
              primary
              px="12"
              py="4"
              h="auto"
              right="1"
              top="0.5"
              type="submit"
              borderRadius="md"
              fontSize="medium"
              isLoading={loading}
              fontWeight="medium"
              mt={{ base: 2, md: 0 }}
              w={{ base: 'full', md: 'auto' }}
              pos={{ base: 'static', md: 'absolute' }}
              bg={{ base: 'white', md: 'primary' }}
              color={{ base: 'primary', md: '_white' }}
              id="email-subscribe-button"
              {...subscribeButtonProps}
            >
              <Text notag st="common.footer.email.button" />
            </Button>
            <Text
              mt={2}
              fontSize="sm"
              st="common.email.popup.receive.offers"
              display="inline"
            />
            <NextLink passHref href="/privacy">
              <Text
                fontSize="sm"
                display="inline"
                _hover={{ textDecoration: 'underline' }}
                st="common.footer.legal.privacy"
              />
            </NextLink>
          </Box>
        </>
      )}
    </>
  )
}
