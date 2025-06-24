import { Box, Flex } from '@chakra-ui/react'
import Container from 'ui/primitives/Container'
import ProfileNavBar from 'ui/features/profile/profile-nav-bar'
import { IntlProvider } from 'i18n'

export default function Layout({ children }) {
  return (
    <IntlProvider page="/profile">
      <Container mb={20} pt={{ base: 0, md: 16 }} minH={'70vh'}>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box flexShrink={0} zIndex={10} flexGrow={1}>
            <ProfileNavBar />
          </Box>
          <Box w="full" p={{ base: 0, md: 5 }}>
            {children}
          </Box>
        </Flex>
      </Container>
    </IntlProvider>
  )
}
