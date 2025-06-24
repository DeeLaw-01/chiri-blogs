import { VStack, Stack, Box, HStack, Icon } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import CornerBanner from '../book-button/corner-banner'
import { useResponsiveSizes } from 'src/contexts/responsive'

const LuggageInfoCard = ({ luggage }) => {
  const { isMobile } = useResponsiveSizes()
  return (
    <Card overflow="hidden">
      <Stack direction={['row', 'column']} gap="0">
        <VStack bg="_lightblue" p="2" position="relative" alignSelf="stretch">
          {luggage.price === 0 && (
            <CornerBanner
              bg="_green"
              bannerPosition="right"
              w="160px"
              mt="2"
              display={{ base: 'none', md: 'flex' }}
            >
              <Text st="common.free" textTransform={'uppercase'} />
            </CornerBanner>
          )}
          <Box my="auto">
            <Icon
              as={luggage.icon}
              width={isMobile ? 100 : 120}
              height={isMobile ? 100 : 120}
            />
          </Box>
        </VStack>
        <VStack
          px="3"
          py={{ base: 2, md: 3 }}
          gap="0"
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} st={luggage.title} />
          <Text color="_gray" fontSize="xs" st={luggage.dimensions} />
          <Text
            color="_gray"
            fontSize={{ base: 'xs', md: 'sm' }}
            my={{ base: 2, md: 4 }}
            textAlign={{ base: 'left', md: 'center' }}
            st={luggage.description}
          />

          <HStack justify={{ base: 'flex-start', md: 'center' }} w="full">
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={luggage.price === 0 ? '_green' : 'inherit'}
              st={
                luggage.price === 0
                  ? 'new-trip-page.transport.card.included'
                  : 'new-trip-page.luagge.price.checkout'
              }
            />
          </HStack>
        </VStack>
      </Stack>
    </Card>
  )
}

export default LuggageInfoCard
