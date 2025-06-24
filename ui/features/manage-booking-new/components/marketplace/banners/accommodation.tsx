import { Box, VStack } from '@chakra-ui/react'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'

export default function AccommodationBanner() {
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Link href={getMarketplaceUrl('stays')} _hover={{ textDecor: 'none' }}>
      <Card
        h={{ base: '120px', md: '300px' }}
        bgGradient={'linear(to-br, orange.400, orange.500, red.500)'}
        overflow="hidden"
      >
        <Box
          position="relative"
          w="full"
          h="full"
          left={{ base: '-80px', md: '-165px' }}
          top={{ base: '-50px', md: '-100px' }}
        >
          <Box
            backgroundImage={'url(/static/about/1.png)'}
            backgroundSize={'cover'}
            w={{ base: '200px', md: '380px' }}
            h={{ base: '200px', md: '380px' }}
            borderRadius="full"
            border="5px solid white"
          />
        </Box>
        <Box
          position="absolute"
          top={{ base: '75px', md: '220px' }}
          left={{ base: '75px', md: '120px' }}
          borderRadius="full"
          bg="yellow"
          border="2px solid white"
          color="_black"
          p={2}
          height={{ base: '40px', md: '70px' }}
          width={{ base: '40px', md: '70px' }}
          transform={'rotate(-10deg)'}
        >
          <VStack gap="0" fontWeight="medium" mt={{ base: -1, md: 1 }}>
            <Text fontSize={{ base: 'sm', md: '2xl' }} letterSpacing={1.2}>
              15%
            </Text>
            <Text fontSize={{ base: '2xs', md: 'xs' }} lineHeight="0.2">
              OFF
            </Text>
          </VStack>
        </Box>
        <VStack
          h="100%"
          justify="space-between"
          position="absolute"
          left={{ base: '115px', md: '220px' }}
          p={4}
          color="_white"
          top="0"
          alignItems="flex-start"
        >
          <Box>
            <Heading
              as="h1"
              fontWeight="semibold"
              fontSize={{ base: 'sm', md: '3xl' }}
              textShadow={'0px 0px 5px black'}
              st="new-manage-booking-page.travel.essentials.accommodation.heading"
              textTransform={'uppercase'}
            />

            <Text
              mt={{ base: 0, md: 2 }}
              fontSize={{ base: '2xs', md: 'xs' }}
              noOfLines={{ base: 1, md: 5 }}
              st="new-manage-booking-page.travel.essentials.stay.description"
            />
          </Box>
          <Button
            h={{ base: 10, md: 10 }}
            id="add-seats-button"
            bg="white"
            color="orange.600"
            fontSize={{ base: 'xs', md: 'sm' }}
            _hover={{ opacity: 0.9 }}
            arrow
          >
            <Text st="new-manage-booking-page.travel.essentials.accommodation.button.text" />
          </Button>
        </VStack>
      </Card>
    </Link>
  )
}
