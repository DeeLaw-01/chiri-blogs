import useAuth from 'src/hooks/useAuth'
import NotSignedInCoins from './not-signed-in'
import SignedInCoins from './signed-in'
import useCheckoutCart from '../../hooks/useCheckoutCart'
import { getCoinsAmount } from 'src/utils/getCoinsAmount'

export default function CoinsBanner() {
  const { isUserLoggedIn } = useAuth()
  const { getTotalPrice } = useCheckoutCart()

  const coins = getCoinsAmount(getTotalPrice())

  if (!isUserLoggedIn) return <NotSignedInCoins coins={coins} />
  else return <SignedInCoins coins={coins} />
}
