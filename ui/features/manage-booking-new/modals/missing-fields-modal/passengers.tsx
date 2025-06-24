import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import MissingFieldFormControls from './form-controls'
import DataTable from '../../components/data-table'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'
import { PassengerType } from '../../types/passenger.type'

type PassengersProps = {
  passengers: PassengerType[]
}

export default function Passengers({ passengers }: PassengersProps) {
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  const getLabel = (field: string): string => {
    const fieldLabels = {
      identification: 'common.passenger.id.number.label',
      expiration_date: 'common.passenger.id.expiration.label',
      birthday: 'common.passenger.birthday.label',
      gender: 'common.passenger.gender.label',
      name: 'common.passenger.legal.name',
    }
    return fieldLabels[field] || field
  }

  return (
    <Box>
      {passengers.map((passenger, idx) => (
        <Box key={idx} mb={4}>
          <HStack>
            <VStack
              borderRadius="full"
              bg="secondary"
              w={{ base: '2rem', md: '2.5rem' }}
              h={{ base: '2rem', md: '2.5rem' }}
              p={2}
              justify="center"
              verticalAlign="center"
            >
              <Text fontSize={{ base: 'sm', md: 'md' }} color="_gray">
                {passenger.name[0]?.toUpperCase()}
                {passenger.surname[0]?.toUpperCase()}
              </Text>
            </VStack>
            <Box fontSize={{ base: 'md', md: 'lg' }}>
              {passenger.name} {passenger.surname}
            </Box>
          </HStack>

          <Box color="_gray" fontSize={{ base: 'sm', md: 'md' }} mt="2">
            <DataTable
              py={{ base: 2, md: 4 }}
              borderStyle={{ base: 'none', md: 'solid' }}
              data={passenger.missing_fields.map((field) => ({
                label: <Text minW="200px" st={getLabel(field)} />,
                content: <MissingFieldFormControls field={field} idx={idx} />,
              }))}
            />
          </Box>
          <Button
            asLink
            as="a"
            role="group"
            id="missing-fields-modal-add-protection"
            href={getMarketplaceUrl('protection')}
            arrow
          >
            <Text
              notag
              st="new-manage-booking-page.missing.fields.modal.insurance"
            />
          </Button>
        </Box>
      ))}
    </Box>
  )
}
