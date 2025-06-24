import { Box, Stack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'
import Footer from 'ui/features/shared-layout/footer'
import Navbar from 'ui/features/navbar'
import Logger from 'ui/shared/logger'
import dynamic from 'next/dynamic'
import Link from 'ui/primitives/Link'
import { headers } from 'next/headers'
import { isBrowser } from 'src/data/environments'

const DynamicCarImage = dynamic(() => {
  return import('@/icons/404/car-w-background.svg')
})

export default function NotFound() {
  const path = headers().get('x-request-url')

  if (isBrowser) Logger.error(`Page not found: ${path}`, '404')

  return (
    <>
      <Navbar />
      <Container>
        <Box minH="100vh" mt={{ base: '5rem', md: '10rem' }}>
          <Stack
            direction={['column', 'row']}
            justifyContent={'center'}
            spacing={10}
          >
            <Box maxWidth="500px" width="full">
              <DynamicCarImage />
            </Box>
            <VStack alignItems={{ base: 'center', md: 'left' }}>
              <Text
                fontSize={{ base: '7xl', md: '7xl' }}
                fontWeight={'medium'}
                color={'primary'}
                st="404-page.header"
              />
              <Text
                fontSize={{ base: '3xl', md: '3xl' }}
                st="404-page.subheader"
              />
              <Text fontSize="lg" st="404-page.description" />
              <Box mt="1.5rem !important" />
              <Link href="/" color="primary">
                <Text notag st="404-page.back" />
              </Link>
            </VStack>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
