import { Flex, VStack } from '@chakra-ui/react'
import { CONFIG_COMPANY } from 'src/config'
import Heading from 'ui/primitives/Heading'
import Text from 'ui/primitives/Text'
import HotelIllustration from '@/icons/hotel/hotel-illustration.svg'
import AuthView from 'ui/shared/authentication'

export default function MobileLogin() {
  return (
    <>
      <VStack bg={'_lightestgray'} mx={'-1rem'}>
        <Flex mt={4} w="full" justify="center">
          <HotelIllustration height="10rem" />
        </Flex>
        <VStack mx={4}>
          <Heading
            as="h1"
            fontSize="lg"
            st="profile-page.login.banner.heading"
            sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
          />

          <Text
            fontWeight={'medium'}
            fontSize="sm"
            mb={4}
            textAlign="center"
            st="profile-page.login.banner.description"
          />
        </VStack>
      </VStack>
      <AuthView />
    </>
  )
}
