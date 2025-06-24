import { Stack } from '@chakra-ui/react'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import LuggageInfoCard from '../luggage-info/luggage-info-card'
import luggageOptions from '../luggage-info/luggage-info-data'

function LuggageInfoModal({ isOpen, onClose }) {
  return (
    <Modal
      size="4xl"
      isOpen={isOpen}
      onClose={onClose}
      title={<Heading as="h2" st="new-trip-page:overview.header.luggage" />}
    >
      <Text st="new-trip-page:overview.luggage.label" mb="4" />
      <Stack direction={['column', 'row']} mb="5" gap="1rem">
        {luggageOptions.map((luggage, idx) => {
          return <LuggageInfoCard luggage={luggage} key={idx} />
        })}
      </Stack>
    </Modal>
  )
}

export default LuggageInfoModal
