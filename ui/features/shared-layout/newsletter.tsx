import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Text from 'ui/primitives/Text'
import EmailSignupForm from '../email-signup-form'
import { theme } from 'src/styles/theme'
import Container from 'ui/primitives/Container'
import useSessionStorage from 'src/hooks/useSessionStorage'
import ConcentricCircleIconFull from '@/icons/newsletter/concentric-circles-full.svg'
import ConcentricCircleIconHalf from '@/icons/newsletter/concentric-circles-half.svg'

function Newsletter() {
  const [isUserSignedUp, setIsUserSignedUp] =
    useSessionStorage('isUserSignedUp')

  return (
    <Box
      pos={'relative'}
      overflow="hidden"
      bgGradient={theme.gradients.primary}
    >
      <Box
        display={{ md: 'initial', base: 'none' }}
        width={'300px'}
        height={'full'}
        top={0}
        left={0}
        pos={'absolute'}
        zIndex={1}
      >
        <ConcentricCircleIconFull height="100%" />
      </Box>
      <Box
        display={{ base: 'initial', md: 'none' }}
        width={'200px'}
        height={'full'}
        top={0}
        right={0}
        pos={'absolute'}
        zIndex={1}
      >
        <ConcentricCircleIconHalf height="100%" />
      </Box>

      <Container zIndex={2} maxW={{ base: '100vw', md: '150ch' }}>
        <Box py={{ base: 10, md: '3.75rem' }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={5}
            alignItems={'center'}
          >
            <Box display={isUserSignedUp ? 'none' : 'initial'} w={'full'}>
              <Text
                maxW={'md'}
                fontWeight={'medium'}
                fontSize={{ base: '2xl', md: '3xl' }}
                color={theme.colors._white}
                as="h3"
                st="footer.subscribe.catchphrase"
              />
            </Box>
            <Box width={'full'}>
              <EmailSignupForm
                textColor="_white"
                color={theme.colors._white}
                isFooter={true}
                onUserSignup={() => {
                  setIsUserSignedUp(true)
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Newsletter
