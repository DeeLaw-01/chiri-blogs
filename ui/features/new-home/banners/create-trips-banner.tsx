import { Center, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import HeartIcon from '@/icons/homepage/heart-icon.svg'

const CreateTripsBanner = () => {
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
        <HeartIcon fill="white" />
      </Center>
      <VStack spacing={-1} align={'flex-start'}>
        <Text fontWeight={'medium'} st="home-page.trust.banner.third.heading" />
        <Text fontSize={'sm'} st="home-page.trust.banner.third.description" />
      </VStack>
    </HStack>
  )
}

export default CreateTripsBanner
