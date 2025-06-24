import { Box } from '@chakra-ui/react'
import Forgot from './forgot'
import Login from './login'
import Signup from './signup'
import Verify from './verify'
import { AuthState, useAuthAtoms } from './useAuthAtoms'
import ForgotConfirm from './forgot/confirm'

export default function AuthView() {
  const { state } = useAuthAtoms()

  const getView = () => {
    switch (state) {
      case AuthState.LOGIN:
        return <Login />
      case AuthState.SIGNUP:
        return <Signup />
      case AuthState.FORGOT:
        return <Forgot />
      case AuthState.FORGOT_CONFIRM:
        return <ForgotConfirm />
      case AuthState.VERIFY:
        return <Verify />
    }
  }
  return <Box w="full">{getView()}</Box>
}
