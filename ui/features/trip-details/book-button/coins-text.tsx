import CoinIcon from '@/icons/coin.svg'
import { CONFIG_SETTINGS } from 'src/config'
import InfoIcon from '@/icons/new/alert/circle-info.svg'
import { Box } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import { getCoinsAmount } from 'src/utils/getCoinsAmount'

type CoinsTextProps = {
  price: number
}

export default function CoinsText({ price }: CoinsTextProps) {
  const { setShowCoins } = useTripDetailsAtoms()

  if (getCoinsAmount(price) <= 0) return <></>
  return (
    <>
      <Box mt="0.5">
        <CoinIcon width="15" height="15" />
      </Box>
      <Box
        color="_orange"
        onClick={() => setShowCoins(true)}
        _hover={{ cursor: 'pointer' }}
      >
        <Text
          as="span"
          st="new-trip-page.coins.urgency.text"
          sd={{
            coin_amount: getCoinsAmount(price),
            coin_name: CONFIG_SETTINGS.COIN_NAME,
          }}
        />{' '}
        <Box display="inline-block">
          <InfoIcon width="10" />
        </Box>
      </Box>
    </>
  )
}
