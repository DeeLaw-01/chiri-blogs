import { Box, VStack } from '@chakra-ui/react'
import Link from 'ui/primitives/Link'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'

export default function InsuranceBanner() {
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Link
      href={getMarketplaceUrl('protection')}
      h="100%"
      _hover={{ textDecor: 'none' }}
    >
      <Card
        position="relative"
        backgroundImage={'url(/static/about/3.png)'}
        backgroundSize="cover"
        overflow="hidden"
        p="3"
        display={{ base: 'none', md: 'grid' }}
        h="100%"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          h="full"
          w="full"
          bgGradient={'linear(to-br, green.500, green.400)'}
          opacity={0.85}
          zIndex="0"
        />
        <Box
          border="1px solid"
          borderColor="_white"
          w="full"
          h="full"
          color="_white"
          p="2"
          zIndex="1"
        >
          <VStack
            h="full"
            w="full"
            justify={'space-between'}
            alignItems="flex-start"
            mt="0"
            fontWeight="bold"
          >
            <Box textTransform={'uppercase'} textShadow={'0px 0px 7px black'}>
              <Text
                lineHeight="0.7"
                fontSize="3xl"
                st="common.general.travel"
              />

              <Text fontSize="lg" letterSpacing={1.08} st="common.insurance" />
            </Box>
            <Button
              asLink
              id="add-insurance-button"
              color="white"
              fontSize="xs"
              _hover={{ opacity: 0.9 }}
              arrow
              alignSelf="flex-end"
            >
              <Text
                st="new-manage-booking-page.travel.essentials.insurance.button.text"
                textTransform={'uppercase'}
              />
            </Button>
          </VStack>
        </Box>
      </Card>
    </Link>
  )
}
