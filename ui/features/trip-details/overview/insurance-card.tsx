import { Box, HStack, List, ListIcon, ListItem } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

import TickIcon from '@/icons/shared/tick-icon.svg'
import { CONFIG_SETTINGS } from 'src/config'

export default function InsuranceCard() {
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, blue.700, gray.800)"
        borderRadius="lg"
        p="5"
        boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 5px"
        overflow="hidden"
        mt="2"
      >
        <Text
          fontSize="2xs"
          color="blue.200"
          textTransform={'uppercase'}
          st="new-trip-page:overview.insurance.subtitle"
        />
        <Text
          as="span"
          color="_white"
          fontSize={{ sm: 'md', md: 'lg' }}
          st="new-trip-page:overview.insurance.title"
        />
        <Text as="span" color="gold" fontWeight="medium">
          {' '}
          {CONFIG_SETTINGS.INSURANCE_FLEX_NAME}
        </Text>
        <HStack
          position="relative"
          color="white"
          w="full"
          mt="2"
          fontSize="xs"
          justifyContent={'space-between'}
        >
          <Box
            bg="black"
            opacity="0.2"
            position="absolute"
            borderRadius="lg"
            top="0"
            minW={{ base: 'full', md: '85%' }}
            h="full"
            zIndex="0"
            overflow="hidden"
          />
          <List
            zIndex="1"
            position="relative"
            p="2"
            maxW={{ base: 'full', md: '85%' }}
            spacing={1}
          >
            <ListItem>
              <ListIcon>
                <TickIcon width="15" height="15" stroke={'white'} />
              </ListIcon>
              <Text notag st="new-trip-page:overview.insurance.list.one" />
            </ListItem>
            <ListItem>
              <ListIcon>
                <TickIcon width="15" height="15" stroke={'white'} />
              </ListIcon>
              <Text notag st="new-trip-page:overview.insurance.list.two" />
            </ListItem>
            <ListItem>
              <ListIcon>
                <TickIcon width="15" height="15" stroke={'white'} />
              </ListIcon>
              <Text notag st="new-trip-page:overview.insurance.list.three" />
            </ListItem>
          </List>
          <Box position="absolute" top="-150px" right="-120px" opacity={'0.02'}>
            <Box h="230px" w="230px" bg="_white" borderRadius="full" />
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}
