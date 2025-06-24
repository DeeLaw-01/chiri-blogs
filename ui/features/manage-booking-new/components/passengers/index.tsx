import { Box, Divider, HStack, VStack, Stack, Icon } from '@chakra-ui/react'

import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import theme from 'src/styles/theme'
import { capitalizeFirstLetter } from 'src/utils/stringUtils'
import { useNavigateToMarketplace } from '../../hooks/useNavigateToMarketplace'
import { PassengerType } from '../../types/passenger.type'
import isTripDisabled from '../../utils/isTripDisabled'
import { useManageBookingAtoms } from '../../hooks/useManageBookingAtoms'
import getLuggage from '../../utils/getLuggage'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

type PassengersSectionProps = {
  passengers: PassengerType[]
}
export default function PassengersSection({
  passengers,
}: PassengersSectionProps) {
  const { booking } = useManageBookingAtoms()
  const { getMarketplaceUrl } = useNavigateToMarketplace()
  const formatDate = useFormattedDate()

  return (
    <Card p="4">
      {passengers.map((passenger, idx) => {
        return (
          <Box key={idx}>
            <HStack alignItems="flex-start">
              <VStack
                borderRadius="full"
                bg="secondary"
                w="3rem"
                p={2}
                aspectRatio={1 / 1}
                justify="center"
              >
                <Text fontSize="lg" color="_gray">
                  {passenger.name[0]?.toUpperCase()}
                  {passenger.surname[0]?.toUpperCase()}
                </Text>
              </VStack>
              <Stack
                direction={['column', 'row']}
                w="full"
                alignItems={{ base: 'flex-start', md: 'center' }}
              >
                <VStack
                  gap="0"
                  alignItems="flex-start"
                  w="full"
                  ml="2"
                  color="_gray"
                  fontSize="sm"
                >
                  <Text fontWeight="medium" color="_black" fontSize="md">
                    {capitalizeFirstLetter(passenger.title)}. {passenger.name}{' '}
                    {passenger.surname}
                  </Text>
                  <Text>
                    <Text as={'span'} st="common.passenger.birthday.label" />:{' '}
                    {formatDate(
                      passenger.birthday,
                      false,
                      true,
                      true,
                      false,
                      true
                    )}
                  </Text>
                  <Text>
                    <Text as={'span'} st="common.passenger.id.number.label" />:{' '}
                    {passenger.identification}
                  </Text>
                  <Text>
                    <Text
                      as={'span'}
                      st="common.passenger.id.expiration.label"
                    />
                    : {passenger.expiration_date}
                  </Text>
                  {passenger.luggage.map((luggage, idx) => {
                    const type = getLuggage(luggage.type)
                    return (
                      <HStack mt="2" key={idx}>
                        <Icon
                          width="12px"
                          height="14px"
                          as={type[0]}
                          fill={theme.colors._gray}
                        />
                        <Text>
                          1x <Text as="span" st={type[1]} /> (
                          {luggage.dimensions.height}x
                          {luggage.dimensions.length}x{luggage.dimensions.width}
                          cm, {luggage.dimensions.weight}kg)
                        </Text>
                      </HStack>
                    )
                  })}
                </VStack>
                {!isTripDisabled(booking?.trip.status) && (
                  <Box>
                    <Button
                      role="group"
                      as="a"
                      href={getMarketplaceUrl('luggage')}
                      id="add-luggage"
                      alignSelf="center"
                      pr="4"
                      fontSize={{ base: 'sm' }}
                      asLink
                      arrow
                    >
                      <Text st="new-manage-booking-page.add.extra.luggage" />
                    </Button>
                  </Box>
                )}
              </Stack>
            </HStack>
            {idx + 1 !== passengers.length && <Divider my={4} />}
          </Box>
        )
      })}
    </Card>
  )
}
