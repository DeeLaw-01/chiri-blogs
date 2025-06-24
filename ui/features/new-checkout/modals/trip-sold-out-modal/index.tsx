'use client'

import { Box, VStack } from '@chakra-ui/react'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import NomadSittingIllustration from '@/icons/nomads-sitting-on-floor.svg'
import Button from 'ui/primitives/Button'
import { useRouter } from 'src/i18n/router'
import useHistory from 'src/hooks/useHistory'
import { packageSoldOutDataLayer } from 'src/tracking'
import { useEffect } from 'react'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import Heading from 'ui/primitives/Heading'

export default function TripSoldOutModal() {
  const router = useRouter()
  const { history } = useHistory()
  const { trip } = useCheckoutAtoms()

  const handleBack = (): void => {
    if (history.some((h) => h.includes('packages?'))) router.back()
    else router.push('/')
  }

  useEffect(() => {
    if (trip) packageSoldOutDataLayer(trip)
  }, [])

  return (
    <Modal
      isOpen={true}
      onClose={() => {}}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      addCloseButton={false}
      isBgBlured={true}
    >
      <VStack py={3} w={'full'} textAlign="center" spacing="2">
        <Box h="7.5rem" m="3">
          <NomadSittingIllustration height="auto" width="auto" />
        </Box>
        <Heading as="h2" st="common.unavailable.modal.header" />

        <Text
          color={'_gray'}
          fontSize="sm"
          mb="3"
          st="common.unavailable.modal.description"
        />
        <Button primary w="full" onClick={handleBack} id="trip-sold-out-button">
          <Text notag st="common.unavailable.modal.button" />
        </Button>
      </VStack>
    </Modal>
  )
}
