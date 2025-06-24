import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'
import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import { CONFIG_SETTINGS } from 'src/config'

export default function CoinsCardTemporary() {
  const { setShowCoins } = useTripDetailsAtoms()

  return (
    <Box
      bgGradient="linear(to-br, orange.500, yellow.400)"
      borderRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 5px"
      pos="relative"
      overflow="hidden"
      mt="2"
      onClick={() => setShowCoins(true)}
      _hover={{ cursor: 'pointer' }}
      role="group"
    >
      <HStack color="_white" w="full">
        <Box w={{ base: '70%', md: '85%' }} p="5" zIndex="1">
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize={{ base: '2xl', md: '3xl' }}
            lineHeight="1"
            letterSpacing={'2px'}
            fontFamily={SECONDARY_FONT_FAMILY}
            textShadow="0 0 5px rgb(123, 60, 8), 0 0 50px rgb(123, 60, 8), 0 0 5px rgb(123, 60, 8)"
            st="new-trip-page.overview.coins.card.new.heading"
          />

          <Text
            w="80%"
            fontSize={{ base: '2xs', md: 'sm' }}
            mt="2"
            st="new-trip-page.overview.coins.card.new.description"
            sd={{ coin_name: CONFIG_SETTINGS.COIN_NAME }}
          />

          <Button
            asLink
            arrow
            id="loyalty-card-see-more"
            mt="2"
            fontSize="sm"
            color="_lightorange"
          >
            <Text st="common.view.more" />
          </Button>
        </Box>
        <Box
          pos="absolute"
          zIndex="0"
          right="0"
          height="100%"
          maxH="120px"
          backgroundSize="contain"
          w="100%"
          backgroundImage={'/static/coins/coins-phone.png'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'right'}
        />
      </HStack>
    </Box>
  )
}
