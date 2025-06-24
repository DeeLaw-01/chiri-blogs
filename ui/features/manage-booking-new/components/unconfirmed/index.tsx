import Container from 'ui/primitives/Container'
import InfoBoxes from './info-boxes'
import SignIn from './sign-in'

export default function UnconfirmedView() {
  return (
    <Container pt={{ base: 0, md: 1 }} my="16">
      <SignIn />
      <InfoBoxes />
    </Container>
  )
}
