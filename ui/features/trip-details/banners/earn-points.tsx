import { HStack, Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import CoinIcon from '@/icons/coin.svg'
import RightArrowSmallIcon from '@/icons/arrow-right-small.svg'
import Card, { CardProps } from 'ui/primitives/Card'

export default function EarnPointsBanner({ ...rest }: CardProps) {
  return (
    <Card
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      {...rest}
    >
      <Box
        position="relative"
        bgGradient={`linear(to-r, gray.600, gray.900)`}
        borderRadius="lg"
        mt="2"
        py="0"
        px="4"
        color="white"
        zIndex="1"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundSize: '80%',
          backgroundRepeat: 'repeat',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/static/triangle-pattern.png)',
          opacity: '0.5',
          zIndex: 0,
        }}
      >
        <HStack w="full">
          <Box pr="2">
            <CoinIcon width="auto" height="70px" />
          </Box>
          <Box w="full">
            <Heading as="h4">
              Get <b>1000</b> Tryp points
            </Heading>
            <Text fontSize="2xs">
              Purchase with accommodation and earn 1000 Tryp.com coins
            </Text>
          </Box>

          <Box _groupHover={{ mr: -1, pl: 1 }} transition="all .2s" pr="2">
            <RightArrowSmallIcon width="10px" stroke={theme.colors._white} />
          </Box>
        </HStack>
      </Box>
    </Card>
  )
}
