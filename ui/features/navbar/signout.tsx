import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Text from 'ui/primitives/Text'
import useAuth from 'src/hooks/useAuth'
import LogoutIcon from 'ui/icons/navbar/logout.svg'
import { useRouter } from 'src/i18n/router'

const Signout = (): JSX.Element => {
  const { signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async (): Promise<void> => {
    await signOut()
    router.push('/auth')
  }

  return (
    <Box
      _hover={{
        cursor: 'pointer',
        textDecoration: 'underline',
      }}
      onClick={() => handleSignOut()}
    >
      <HStack gap={1}>
        <LogoutIcon />
        <Text st="common.sign.out" />
      </HStack>
    </Box>
  )
}

export default Signout
