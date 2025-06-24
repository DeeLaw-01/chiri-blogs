import { Box } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import Image from 'ui/primitives/Image'
import Card from 'ui/primitives/Card'
import { useResponsiveSizes } from 'src/contexts/responsive'
import Button from 'ui/primitives/Button'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'

export default function MoreLuggageCard() {
  const { isDesktop } = useResponsiveSizes()
  const { setShowLuggageInfo } = useTripDetailsAtoms()

  return (
    <Box position="relative" w="full">
      <Card p={5} mt="2" w="full" bg="_lightblue">
        <Heading
          as="h4"
          st="new-trip-page:transport.luggage.title"
          maxW="calc(100% - 125px)"
        />
        <Box
          color="_gray"
          mt="1"
          fontSize={{ base: 'xs', md: 'sm' }}
          maxW="calc(100% - 125px)"
        >
          <Text notag st="new-trip-page:overview.luggage.description" />{' '}
          <Text notag st="new-trip-page:overview.luggage.label" />{' '}
          <Button
            id="read-more-luggage-button"
            asLink
            fontSize={{ base: 'xs', md: 'sm' }}
            onClick={() => setShowLuggageInfo(true)}
          >
            <Text st="common.view.more" />
          </Button>
        </Box>
      </Card>
      <Box position="absolute" right="0" top={!isDesktop ? '5' : '-7'}>
        <Image
          src={'/static/bags.png'}
          alt="luggage illustration"
          width={!isDesktop ? 110 : 120}
          height="100"
        />
      </Box>
    </Box>
  )
}
