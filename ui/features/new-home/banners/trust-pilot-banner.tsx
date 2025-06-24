import RatingIcon from '@/icons/homepage/rating-icon.svg'
import { Center, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
// import Link from 'ui/primitives/Link'
// import { TRUSTPILOT_REVIEW_LINK } from 'src/data/links'

const TrustPilotBanner = () => {
  return (
    <HStack
      mt={{ base: '1.5rem', md: 0 }}
      px={4}
      minH={'90px'}
      borderRadius={'lg'}
      spacing={4}
      bg={'_lightestgray'}
      w={'full'}
    >
      <Center p={2} borderRadius={'full'} bg={'_orange'}>
        <RatingIcon />
      </Center>

      <VStack align={'flex-start'} spacing={0}>
        <Text fontWeight={'medium'} st="home-page.trust.banner.one.heading" />
        <Text fontSize={'sm'}>
          IATA insurance ensures your trip is safe and secure
        </Text>
      </VStack>
    </HStack>
  )
}

export default TrustPilotBanner
