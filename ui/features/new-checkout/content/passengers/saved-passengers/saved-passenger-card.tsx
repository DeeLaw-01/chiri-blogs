import { Box, BoxProps, HStack } from '@chakra-ui/react'
import { SavedPassenger } from 'ui/features/new-checkout/checkout.type'
import Checkbox from 'ui/primitives/Checkbox'
import Text from 'ui/primitives/Text'
import CountryFlag, { countryCodes } from 'ui/shared/country-flag'

type SavedPassengerProps = {
  passenger: SavedPassenger
  isSelected: boolean
} & BoxProps

export default function SavedPassengerCard({
  passenger,
  isSelected,
  ...rest
}: SavedPassengerProps) {
  return (
    <Box
      w="full"
      borderRadius="md"
      border="1px solid"
      borderColor="_lightgray"
      p="5"
      _hover={{ cursor: 'pointer' }}
      {...rest}
    >
      <HStack w="full" justify="space-between" spacing="3">
        <CountryFlag country={passenger.nationality as countryCodes} />
        <Box w="full">
          <Text>
            {passenger.firstname} {passenger.surname}
          </Text>
          <Text color="_gray" fontSize="sm">
            {passenger.birthday}
          </Text>
        </Box>
        <Box pos={'relative'}>
          <Checkbox isChecked={isSelected} />
          <Box
            pos={'absolute'}
            top={0}
            bg="transparent"
            w={'full'}
            h={'full'}
            zIndex={'dropdown'}
          />
        </Box>
      </HStack>
    </Box>
  )
}
