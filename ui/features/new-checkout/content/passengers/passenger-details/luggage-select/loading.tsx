import {
  Box,
  Divider,
  HStack,
  Icon,
  Spinner,
  Stack,
  VStack,
} from '@chakra-ui/react'
import Incrementer from 'ui/shared/incrementer'
import Text from 'ui/primitives/Text'
import ExtraBag from '@/icons/checkout/luggage/extra-bag.svg'
import PersonalItem from '@/icons/checkout/luggage/personal-item.svg'
import CabinBag from '@/icons/checkout/luggage/cabin-bag.svg'
import getLuggage from 'ui/features/manage-booking-new/utils/getLuggage'
import { LuggageItemType } from 'ui/features/manage-booking-new/types/luggage.type'

const mockLuggage = [
  { type: LuggageItemType.CabinBag, icon: CabinBag },
  { type: LuggageItemType.PersonalItem, icon: PersonalItem },
  { type: LuggageItemType.HoldBag, icon: ExtraBag },
]

export default function LuggageLoading() {
  return (
    <Box
      w="full"
      borderRadius="md"
      border="1px solid"
      borderColor="_lightgray"
      mt="5"
      pos="relative"
      overflow="hidden"
    >
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(3px)"
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack>
          <Spinner color="primary" />
          <Text fontSize="sm" st="common.general.loading" />
        </VStack>
      </Box>
      {mockLuggage?.map((item) => (
        <Box key={item.type}>
          <Stack direction={['column', 'row']} w="full" p={3}>
            <HStack w="full">
              <Box minW="5rem">
                <Icon as={item.icon} width="60px" height="60px" />
              </Box>
              <Box w="full">
                <Text notag st={getLuggage(item.type)[1]} />
                <Text color="_gray" fontSize="sm">
                  0 cm, x 0cm x 0cm, 0 kg{' '}
                </Text>
              </Box>
            </HStack>
            <Box>
              <Incrementer />
            </Box>
          </Stack>
          <Divider />
        </Box>
      ))}
    </Box>
  )
}
