import {
  Box,
  ListItem,
  List,
  ListIcon,
  HStack,
  Flex,
  Wrap,
} from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import TickIcon from '@/icons/shared/tick-icon.svg'
import ArrowDownIcon from 'ui/icons/navbar/arrow-down.svg'
import ChevronDown from '@/icons/shared/chevron-down-icon.svg'
import theme from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import { useState } from 'react'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import { renderTrimmedString } from 'src/utils/renderUtils'
import TransportText from '../transport/transport-text'
import InfoTooltip from '../info-tooltip'
import { CONFIG_COMPANY } from 'src/config'

export default function Included() {
  const { transportations, accommodations } = useTripDetailsAtoms()
  const [showTransport, setShowTransport] = useState<boolean>(false)
  const [showStays, setShowStays] = useState<boolean>(false)
  const { setShowChangeTravelers, trip } = useTripDetailsAtoms()

  return (
    <Card mb={8} p={5}>
      <Box minW="50%">
        <HStack>
          <Text fontWeight="medium" st="new-trip-page:faqs.included.header" />
          <HStack
            display="inline-block"
            fontWeight="normal"
            color="_gray"
            fontSize="xs"
            pl="1"
          >
            <Text notag st="common:for" />
            <Button
              variant="unstyled"
              id="change-passengers"
              verticalAlign={'top'}
              fontSize="xs"
              h="auto"
              fontWeight="noraml"
              color="_gray"
              ml="0.5"
              rightIcon={
                <ChevronDown
                  width="8"
                  height="8"
                  stroke={theme.colors.primary}
                />
              }
              onClick={() => setShowChangeTravelers(true)}
            >
              <Text
                notag
                st="common:travelers"
                sd={{ count: trip?.data?.passengers.total_passengers }}
              />
            </Button>
          </HStack>
        </HStack>
        <List>
          <ListItem>
            <ListIcon as={TickIcon} w="12px" color="green.500" />
            <Button
              id="view-more-transport"
              variant="unstyled"
              fontWeight="normal"
              h="fit-content"
              onClick={() => setShowTransport(!showTransport)}
              rightIcon={
                <ArrowDownIcon
                  height="12"
                  width="12"
                  stroke={theme.colors._black}
                />
              }
            >
              <Text notag st="new-trip-page:faqs.included.transport" />
            </Button>
            <Box
              maxH={showTransport ? '200px' : '0px'}
              overflow="hidden"
              transition="all .2s ease"
            >
              {transportations.map((transport, idx) => {
                return (
                  <Box key={idx} fontSize="sm" pl="5" color="_gray">
                    <TransportText modes={transport.modes} />
                    {'  '}
                    <Text
                      notag
                      st="new-trip-page:from.destination"
                      sd={{ destination: transport.origin }}
                    />{' '}
                    <Text
                      notag
                      st="new-trip-page:to.destination"
                      sd={{ destination: transport.destination }}
                    />
                  </Box>
                )
              })}
            </Box>
          </ListItem>
          {accommodations.length > 0 && (
            <ListItem>
              <ListIcon as={TickIcon} w="12px" color="green.500" />
              <Button
                id="view-more-transport"
                variant="unstyled"
                fontWeight="normal"
                h="fit-content"
                onClick={() => setShowStays(!showStays)}
                rightIcon={
                  <ArrowDownIcon
                    height="12"
                    width="12"
                    stroke={theme.colors._black}
                  />
                }
              >
                <Text notag st="new-trip-page:faqs.included.stays" />
              </Button>
              <Box
                maxH={showStays ? '200px' : '0px'}
                overflow="hidden"
                transition="all .4s ease"
              >
                {accommodations?.map((hotel, idx) => {
                  return (
                    <Box key={idx} fontSize="sm" pl="5" color="_gray">
                      <Text
                        notag
                        st="common:nights"
                        sd={{ count: hotel.nights_at }}
                      />{' '}
                      - {renderTrimmedString(hotel.name, 28)}
                    </Box>
                  )
                })}
              </Box>
            </ListItem>
          )}

          <ListItem>
            <ListIcon as={TickIcon} w="12px" color="green.500" />
            <Text notag st="new-trip-page:faqs.included.support" />
          </ListItem>
          <ListItem>
            <Flex alignItems="center" w="full">
              <Box>
                <ListIcon as={TickIcon} w="12px" color="green.500" />
              </Box>
              <Wrap>
                <Text notag st="new-trip-page:faqs.included.checkin" />
                <InfoTooltip
                  h={3.5}
                  w={3.5}
                  mt="1"
                  label={'new-trip-page.faqs.included.checkin.tooltip'}
                  sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
                />
              </Wrap>
            </Flex>
          </ListItem>
        </List>
      </Box>

      <Text
        mt={5}
        color="_gray"
        fontSize="xs"
        st="new-trip-page:faqs.included.description"
      />
    </Card>
  )
}
