import { Box, VStack } from '@chakra-ui/react'
import Link from 'ui/primitives/Link'
import Button from 'ui/primitives/Button'
import Card from 'ui/primitives/Card'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'
import Trans from 'ui/shared/trans'

export default function LuggageBanner() {
  const { getMarketplaceUrl } = useNavigateToMarketplace()

  return (
    <Link
      href={getMarketplaceUrl('luggage')}
      h="100%"
      _hover={{ textDecor: 'none' }}
    >
      <Card
        bgGradient={'linear(to-br, blue.600, blue.400, blue.200)'}
        p="3"
        h="100%"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          h="full"
          w="full"
          backgroundImage={'url(/static/luggage.png)'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'right 0px bottom 0px'}
          backgroundSize={'contain'}
        />
        <VStack h="100%" justify="space-between" alignItems="flex-start">
          <Box position="relative" w="full">
            <Heading
              as="h1"
              fontWeight="semibold"
              fontSize={{ base: 'sm', md: 'md' }}
              color="_white"
              textAlign={'left'}
              mt="6"
              textShadow={'0px 0px 20px black'}
            >
              <Text fontWeight="light" mb="2" textTransform={'uppercase'}>
                <Trans
                  st="new-manage-booking-page.travel.essentials.luggage.heading.one"
                  sd={{
                    tos: (chunks) => (
                      <Text fontWeight={'bold'} as={'span'}>
                        {chunks}
                      </Text>
                    ),
                  }}
                />
              </Text>
              <Text
                fontWeight="bold"
                w="200px"
                fontSize={{ base: '3xl', md: '4xl' }}
                style={{ hyphens: 'auto' }}
                lineHeight="1"
                display={'table-caption'}
                textTransform={'uppercase'}
                st="new-manage-booking-page.travel.essentials.luggage.heading.two"
              />
            </Heading>
          </Box>
          <Button
            mt="4"
            h={{ base: 8, md: 10 }}
            id="add-luggage-button"
            bg="blue.600"
            maxW="100%"
            color="white"
            fontSize={{ base: 'xs', md: 'sm' }}
            _hover={{ bg: 'blue.500' }}
            arrow
          >
            <Text
              st="new-manage-booking-page.luggage.card.banner.heading"
              noOfLines={1}
            />
          </Button>
        </VStack>
      </Card>
    </Link>
  )
}
