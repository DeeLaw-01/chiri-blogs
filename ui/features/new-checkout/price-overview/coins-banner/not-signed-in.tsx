import CoinIcon from '@/icons/coin.svg'
import { Box, HStack } from '@chakra-ui/react'
import { CONFIG_SETTINGS } from 'src/config'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

type NotSignedInCoinsProps = {
  coins: number
}

export default function NotSignedInCoins({ coins }: NotSignedInCoinsProps) {
  const { setShowAuth } = useGlobalAtoms()

  return (
    <Box borderRadius="md" bg="_lightblue" p={3} mt="3" display="flex">
      <Button
        id="sign-in-checkout"
        asLink
        arrow
        role="group"
        color="_darkgray"
        fontSize="xs"
        fontWeight="normal"
        w="full"
        h="fit-content"
        onClick={() => setShowAuth(true)}
      >
        <HStack w="full">
          <Box>
            <CoinIcon width="auto" height="1rem" />
          </Box>
          <Text
            st="checkout-page.coins.signup.banner"
            sd={{
              coins: coins,
              coin_name: CONFIG_SETTINGS.COIN_NAME,
            }}
          />
        </HStack>
      </Button>
    </Box>
  )
}
