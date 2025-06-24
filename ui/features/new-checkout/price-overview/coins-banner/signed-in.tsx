import CoinIcon from '@/icons/coin.svg'
import { Box, HStack } from '@chakra-ui/react'
import { CONFIG_SETTINGS } from 'src/config'
import Text from 'ui/primitives/Text'

type SignedInCoinsProps = {
  coins: number
}

export default function SignedInCoins({ coins }: SignedInCoinsProps) {
  return (
    <Box
      borderRadius="md"
      bg="_lightblue"
      p={3}
      fontSize="xs"
      mt="3"
      color="_darkgray"
    >
      <HStack>
        <Box>
          <CoinIcon width="auto" height="1rem" />
        </Box>
        <Text
          st="checkout-page.coins.banner.text"
          sd={{
            coins: coins,
            coin_name: CONFIG_SETTINGS.COIN_NAME,
          }}
        />
      </HStack>
    </Box>
  )
}
