import { Box, BoxProps, Flex, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import CheckIcon from '@/icons/new/alert/check.svg'

type SignInBannerProps = {} & BoxProps

const points = [
  'new-manage-booking-page.unconfirmed.info.sign.in.banner.description.one',
  'new-manage-booking-page.unconfirmed.info.sign.in.banner.description.two',
  'new-manage-booking-page.unconfirmed.info.sign.in.banner.description.three',
]

export default function SignInBanner({ ...rest }: SignInBannerProps) {
  return (
    <Box
      bgGradient={'linear(to-b, _blue, _lightblue )'}
      pos="relative"
      {...rest}
    >
      <Image
        src="/static/manage-booking/luggage-girl.png"
        alt="Image 6"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <Box
        pos="absolute"
        w="calc(100% - 8rem)"
        m="4rem"
        h="16"
        borderRadius="md"
        color="_white"
      >
        <Heading
          as="h2"
          fontSize="4xl"
          st="new-manage-booking-page.unconfirmed.info.sign.in.banner.heading"
        />

        <Box bg="rgba(0,0,0,0.1)" p="5" mt="4" borderRadius="md">
          <VStack spacing="2" fontSize="sm" alignItems="flex-start">
            {points.map((point, index) => (
              <Flex key={index}>
                <Box mt="1" mr="1">
                  <CheckIcon height="1em" />
                </Box>
                <Text st={point} />
              </Flex>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
