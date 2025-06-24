'use client'

import {
  Box,
  ChakraProvider,
  Stack,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'

import Container from 'ui/primitives/Container'
import Button from 'ui/primitives/Button'
import theme from 'src/styles/theme'
import Logger from 'ui/shared/logger'
import { CONFIG_SITE } from 'src/config'

import LogoIcon from '@/icons/logo.svg'
import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import CarImage from '@/icons/404/car-w-background.svg'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Logger.error(error + ' ' + '', 'Error boundary')
  }, [error])

  return (
    <html>
      <body>
        <ChakraProvider theme={theme}>
          <Box
            as="nav"
            h="16"
            top="-1px"
            w="100vw"
            left="0"
            right="0"
            zIndex="banner"
            transition="all .2s"
            position="fixed"
            bg="_white"
            boxShadow={
              '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)'
            }
          >
            <Container h="full">
              <HStack
                w="full"
                h="full"
                spacing="1"
                justifyContent={'space-between'}
              >
                <Box
                  cursor="pointer"
                  onClick={() => window.location.replace(CONFIG_SITE.BASE_LINK)}
                >
                  <LogoIcon height="25" fill={theme.colors._black} />
                </Box>
              </HStack>
            </Container>
          </Box>

          <Container>
            <Box minH="100vh" mt={{ base: '5rem', md: '10rem' }}>
              <Stack
                spacing={10}
                justifyContent={'center'}
                direction={['column', 'row']}
              >
                <Box width="full" maxW="31rem">
                  <CarImage />
                </Box>
                <VStack
                  align={{ base: 'center', md: 'flex-start' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <Text
                    color="primary"
                    fontWeight="medium"
                    fontSize={{ base: '6xl', md: '6xl' }}
                  >
                    We're sorry!
                  </Text>
                  <Text fontSize={{ base: '3xl', md: '3xl' }}>
                    An error has occurred.
                  </Text>
                  <Text fontSize="lg">
                    Please try again. If the error continues do not hesitate to
                    contact our support.
                  </Text>
                  <Box mt="1.5rem !important" />
                  <Button
                    pl="0"
                    asLink
                    id="error-redirect-link"
                    onClick={() =>
                      window.location.replace(CONFIG_SITE.BASE_LINK)
                    }
                    justifyContent="start"
                    leftIcon={
                      <LeftArrowIcon
                        width="12"
                        height="12"
                        stroke={theme.colors.primary}
                      />
                    }
                  >
                    <Text>Back to homepage</Text>
                  </Button>
                </VStack>
              </Stack>
            </Box>
          </Container>
        </ChakraProvider>
      </body>
    </html>
  )
}
