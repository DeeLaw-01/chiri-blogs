import { Box, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import CamelBG from '@/icons/profile/camel-background.svg'
import Heading from 'ui/primitives/Heading'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

const CamelBackground = () => {
  const { setShowAuth } = useGlobalAtoms()

  return (
    <>
      <Box py="10rem">
        <CamelBG />
        <VStack spacing={4} pt="4">
          <Heading
            as="h1"
            fontSize="lg"
            st="profile-page.need.to.signup.info"
          />
          <Button
            id="profile-page-sign-up-button"
            primary
            px={20}
            onClick={() => setShowAuth(true)}
          >
            <Text notag st="common.signup" />
          </Button>
        </VStack>
      </Box>
    </>
  )
}

export default CamelBackground
