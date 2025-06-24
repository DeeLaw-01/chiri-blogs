import Modal from 'ui/primitives/Modal'
import Heading from 'ui/primitives/Heading'
import { Box, SimpleGrid, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import TickIcon from '@/icons/shared/tick-icon.svg'
import { useAccommodationDetailsAtoms } from '../useAccommodationDetailsAtoms'

type FacilitiesModalProps = {
  isOpen: boolean
  onClose: () => void
}
export default function FacilitiesModal({
  isOpen,
  onClose,
}: FacilitiesModalProps) {
  const { roomsData } = useAccommodationDetailsAtoms()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'md', md: '2xl' }}
      title={<Heading as="h3" st="common.general.facilities" />}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} pb={4}>
        {roomsData?.hotel_facilities.map((facility, idx) => (
          <HStack key={idx} alignItems={'flex-start'} wordBreak={'break-word'}>
            <Box minH={'12px'} minW={'12px'} mt={1}>
              <TickIcon
                stroke={theme.colors._darkgray}
                width="12px"
                height="12px"
              />
            </Box>
            <Text display={'inline-block'} fontSize="sm">
              {facility}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Modal>
  )
}
