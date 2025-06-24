import React from 'react'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import Clock from './clock'
import Button from 'ui/primitives/Button'
import useSessionStorage from 'src/hooks/useSessionStorage'
import Heading from 'ui/primitives/Heading'
import { VStack } from '@chakra-ui/react'

type TimeOutModalProps = {
  isOpen: boolean
  id: string
}

export default function TimeOutModal({ isOpen, id }: TimeOutModalProps) {
  const [, setSessionTimer] = useSessionStorage(id)

  const handleReload = () => {
    setSessionTimer(null)
    window.location.reload()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      addCloseButton={false}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <VStack w="full" my={3}>
        <Clock />
        <Heading as="h2" mt="5" st="common.timer.timeout.text.one" />
        <Text
          mb="5"
          color="_gray"
          fontSize="sm"
          textAlign="center"
          st="common.timer.timeout.text.two"
        />
        <Button
          primary
          w={'full'}
          onClick={handleReload}
          id="reload-time-out-button"
        >
          <Text notag st="common.timer.timeout.button" />
        </Button>
      </VStack>
    </Modal>
  )
}
