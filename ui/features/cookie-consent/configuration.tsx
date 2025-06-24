import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'
import Switch from 'ui/primitives/Switch'
import { useState } from 'react'
import { CookiePreferences } from 'src/contexts/cookie-consent/cookie.type'

type ConfigurationModalProps = {
  handleConfig: (pref: CookiePreferences) => void
  isOpen: boolean
}

const initial = {
  functional: false,
  analytics: false,
}

export default function ConfigurationModal({
  handleConfig,
  isOpen,
}: ConfigurationModalProps): JSX.Element {
  const [preferences, setPreferences] = useState<CookiePreferences>(initial)

  return (
    <Modal
      isOpen={isOpen}
      isCentered
      addCloseButton={false}
      onClose={() => {}}
      modalContentStyle={{ overflow: 'hidden' }}
    >
      <VStack alignItems="flex-start" my="2">
        <Heading as="h1" st="common.cookie.consent.configuration.heading" />
        <Box mt="2">
          <HStack justify="space-between" w="full">
            <Text
              fontWeight="medium"
              fontSize="md"
              st="common.cookie.consent.config.necessary.heading"
            />

            <Switch isChecked isDisabled />
          </HStack>
          <Text
            color="_gray"
            fontSize="xs"
            mt="2"
            st="common.cookie.consent.config.necessary.description"
          />
        </Box>
        <Divider my="2" w="80%" alignSelf={'center'} />
        <Box>
          <HStack justify="space-between" w="full">
            <Text
              fontWeight="medium"
              fontSize="md"
              st="common.cookie.consent.config.functional.heading"
            />

            <Switch
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  functional: e.target.checked,
                }))
              }
            />
          </HStack>
          <Text
            color="_gray"
            fontSize="xs"
            mt="2"
            st="common.cookie.consent.config.functional.description"
          />
        </Box>
        <Divider my="2" w="80%" alignSelf={'center'} />
        <Box>
          <HStack justify="space-between" w="full">
            <Text
              fontWeight="medium"
              fontSize="md"
              st="common.cookie.consent.config.analytics.heading"
            />

            <Switch
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  analytics: e.target.checked,
                }))
              }
            />
          </HStack>
          <Text
            color="_gray"
            fontSize="xs"
            mt="2"
            st="common.cookie.consent.config.analytics.description"
          />
        </Box>
        <Divider my="2" w="80%" alignSelf={'center'} />
        <HStack justify="space-evenly" w="full" mt="2">
          <Button
            id="deny"
            primary
            onClick={() => handleConfig(preferences)}
            w="full"
            fontSize="sm"
          >
            <Text st="common.general.confirm" />
          </Button>
        </HStack>
      </VStack>
    </Modal>
  )
}
