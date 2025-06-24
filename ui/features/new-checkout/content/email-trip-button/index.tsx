import Text from 'ui/primitives/Text'
import { contactDetailsEmailMeDataLayer } from 'src/tracking'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import Button from 'ui/primitives/Button'

export default function EmailTripButton() {
  const { setShowEmailTrip } = useCheckoutAtoms()

  const handleClick = () => {
    setShowEmailTrip(true)
    contactDetailsEmailMeDataLayer()
  }

  return (
    <Button
      asLink
      id="email-trip-checkout"
      pt={2}
      onClick={() => handleClick()}
      fontSize={{ base: 'xs', md: 'sm' }}
      display="flex"
      m="0 auto"
    >
      <Text
        noOfLines={1}
        maxW="70vw"
        display="block"
        notag
        st={'checkout-page.package.email.not.ready'}
      />
    </Button>
  )
}
