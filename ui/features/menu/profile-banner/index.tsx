import { HStack, Flex, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import Link from 'ui/primitives/Link'
import theme from 'src/styles/theme'
import useAuth from 'src/hooks/useAuth'
import CoinIcon from '@/icons/coin.svg'
import { CONFIG_SETTINGS } from 'src/config'

export default function ProfileBanner() {
  const { attributes } = useAuth()

  return (
    <Link href={'/profile'} _hover={{}}>
      <HStack
        w="full"
        justify="space-between"
        py={4}
        role="group"
        bg="_lightblue"
        borderRadius="md"
        px={4}
      >
        <HStack>
          <Flex
            borderRadius="full"
            h="50px"
            aspectRatio={1 / 1}
            bg={'_blue'}
            alignItems="center"
            justifyContent="center"
            color="_white"
            textTransform={'uppercase'}
          >
            {attributes?.initials}
          </Flex>
          <VStack align="flex-start" ml="2" gap="0.1rem">
            <Text noOfLines={1} fontWeight="medium">
              {attributes?.name}
            </Text>
            <HStack gap="0.25rem">
              <CoinIcon width="1rem" />
              <Text color="_orange" fontSize="xs">
                {attributes?.coins ?? 0} {CONFIG_SETTINGS.COIN_NAME}
              </Text>
            </HStack>
          </VStack>
        </HStack>

        <HStack
          spacing="5"
          _groupHover={{ mr: -1, ml: 1 }}
          transition="all .2s"
        >
          <RightArrowSmallIcon stroke={theme.colors._darkgray} height={15} />
        </HStack>
      </HStack>
    </Link>
  )
}
