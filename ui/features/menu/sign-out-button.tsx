import { useState } from 'react'
import useAuth from 'src/hooks/useAuth'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

export default function SignOutButton() {
  const [loading, setLoading] = useState<boolean>(false)
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    setLoading(true)
    await signOut()
    setLoading(false)
  }

  return (
    <Button
      mt="2"
      variant="unstyled"
      border="1px solid"
      borderColor={'_gray'}
      h="3rem"
      id="sign-out-menu"
      w="full"
      isLoading={loading}
      onClick={handleSignOut}
      _hover={{ bg: '_lightestgray' }}
    >
      <Text st="common.sign.out" />
    </Button>
  )
}
