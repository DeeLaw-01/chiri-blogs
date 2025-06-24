import { Box, HStack, VStack, Center } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { CONFIG_COMPANY } from 'src/config'
import Modal from 'ui/primitives/Modal'
import Image from 'ui/primitives/Image'

type CookieConsentMobileProps = {
  handleAccept: () => void
  openConfig: () => void
}

export default function CookieConsentMobile({
  handleAccept,
  openConfig,
}: CookieConsentMobileProps): JSX.Element {
  let isOpen = true

  const handleOpenConfig = () => {
    openConfig()
    isOpen = false
  }

  return (
    <Modal
      isOpen={isOpen}
      addCloseButton={false}
      isCentered
      onClose={() => {}}
      modalBodyStyle={{ p: 0 }}
      modalContentStyle={{
        overflow: 'hidden',
        'aria-labelledby': 'modal-title',
      }}
    >
      <Box position="relative" bg="secondary" w="full" h="7rem">
        <Box
          opacity="0.07"
          position="absolute"
          w="full"
          h="full"
          zIndex="0"
          backgroundImage={'/static/about/travel-pattern.png'}
          backgroundRepeat={'repeat'}
          backgroundSize={'50%'}
        />
      </Box>
      <Box p={4} fontSize={'xs'} textAlign="center" mt="-5rem">
        <Center>
          <Box w="100px" h="100px" position="relative">
            <Image alt="cookie" src={'/static/cookie/cookie.png'} fill />
          </Box>
        </Center>
        <VStack>
          <Text
            fontSize="lg"
            fontWeight="medium"
            st="common.cookie.consent.heading"
            sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
            id="modal-title"
          />

          <Text color="_gray" st="common.cookie.consent.description" />
        </VStack>
        <HStack justify="space-evenly" w="full" mt="4">
          <Button
            id="deny"
            secondary
            onClick={handleOpenConfig}
            w="full"
            fontSize="sm"
          >
            <Text st="common.cookie.consent.configure.button.text" />
          </Button>
          <Button
            id="deny"
            primary
            onClick={handleAccept}
            w="full"
            fontSize="sm"
          >
            <Text st="common.cookie.information.button.accept" />
          </Button>
        </HStack>
      </Box>
    </Modal>
  )
}
