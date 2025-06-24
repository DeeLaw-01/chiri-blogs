import { Box, HStack, Link, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'
import NextLink from 'next/link'
import { SECONDARY_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

export default function MarketplaceBanner() {
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Link
      as={NextLink}
      href={getMarketplaceUrl('')}
      h="100%"
      _hover={{ textDecor: 'none' }}
      maxH="fit-content"
    >
      <Card
        bgGradient={'linear(to-br, white, blue.200)'}
        h={{ base: '120px', md: '150px' }}
        position="relative"
        p={4}
      >
        <Box
          position="absolute"
          backgroundImage={'url(/static/test-bg.png)'}
          backgroundPosition={'right'}
          backgroundSize={{ base: '210px', md: '260px' }}
          backgroundRepeat={'no-repeat'}
          top="0"
          left="0"
          w="full"
          h="full"
          zIndex="0"
        />
        <VStack
          zIndex="1"
          position="relative"
          w="70%"
          textAlign={'center'}
          color="blue.700"
        >
          <Heading
            fontSize={{ base: 'sm', md: 'lg' }}
            mb="-4"
            textShadow={'0px 0px 20px white'}
            fontFamily={SECONDARY_FONT_FAMILY}
            color="blue.500"
            st="new-manage-booking-page.travel.essentials.marketplace.heading.one"
            textTransform={'uppercase'}
          />

          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight="bold"
            textShadow={'0px 0px 20px white'}
            fontFamily={'futura'}
            st="new-manage-booking-page.general.marketplace"
            textTransform={'uppercase'}
          />

          <HStack
            border="1px solid"
            borderColor="blue.800"
            mt={{ base: 0, md: 1 }}
            px={3}
            py={1.5}
            _hover={{ cursor: 'pointer' }}
          >
            <Text fontSize={{ base: 'xs', md: 'sm' }} st="common.view.all" />
            <RightArrowSmallIcon width="6px" h="6px" />
          </HStack>
        </VStack>
      </Card>
    </Link>
  )
}
