import { Box, HStack, Stack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { nationalities } from 'src/data/dropdown-data'
import { getBritishDateFromISO } from 'src/utils/dateUtils'
import { Passenger } from '../../checkout.type'
import CakeIcon from '@/icons/new/other/cake.svg'

export default function PassengerDetailsCard({
  passenger,
}: {
  passenger: Passenger
}) {
  const getNationality = (nationality: string): string => {
    const obj = nationalities.find((item) => item.value === nationality)
    if (obj) {
      return obj.label
    }
    return ''
  }

  return (
    <Box
      py="2"
      px="4"
      w="full"
      borderRadius="lg"
      border="1px solid"
      borderColor="_lightgray"
    >
      <HStack spacing={2}>
        <Text fontWeight="medium">{`${passenger.firstname} ${passenger.surname}`}</Text>
        <Text color="_darkgray">{getNationality(passenger.nationality)}</Text>
      </HStack>

      <Stack direction={['column', 'row']} mt="2" spacing={4}>
        <HStack>
          <CakeIcon height="20px" />
          <Text>{getBritishDateFromISO(passenger.birthday)}</Text>
        </HStack>
      </Stack>
    </Box>
  )
}
