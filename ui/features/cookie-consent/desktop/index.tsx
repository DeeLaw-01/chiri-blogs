import { Box, HStack, Icon } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import CookieIcon from '@/icons/new/cookie.svg'
import Button from 'ui/primitives/Button'
import { CONFIG_COMPANY } from 'src/config'

type CookieConsentDesktopProps = {
  handleAccept: () => void
  openConfig: () => void
}

export default function CookieConsentDesktop({
  handleAccept,
  openConfig,
}: CookieConsentDesktopProps): JSX.Element {
  return (
    <HStack
      pos="fixed"
      bottom={4}
      zIndex="tooltip"
      maxW="110ch"
      w="full"
      left="50%"
      transform="translateX(-50%)"
      bg="_white"
      borderRadius="lg"
      p="4"
      boxShadow="md"
      fontSize="sm"
      gap="1rem"
      border="1px solid"
      borderColor="_lightestgray"
    >
      <Icon as={CookieIcon} w="10" h="10" />
      <Box>
        <Text
          fontSize="sm"
          fontWeight="medium"
          st="common.cookie.consent.heading"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
        />

        <Text color="_gray" st="common.cookie.consent.description" />
      </Box>
      <HStack>
        <Button id="configure.cookie.button" secondary onClick={openConfig}>
          <Text st="common.cookie.consent.configure.button.text" />
        </Button>
        <Button id="deny" primary onClick={() => handleAccept()}>
          <Text st="common.cookie.information.button.accept" />
        </Button>
      </HStack>
    </HStack>
  )
}
