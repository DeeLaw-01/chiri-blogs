'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { AlertStatus } from './login/alerts'

export enum AuthState {
  LOGIN,
  SIGNUP,
  FORGOT,
  FORGOT_CONFIRM,
  VERIFY,
}

const atoms = {
  email: atom<string>(''),
  status: atom<AlertStatus | undefined>(undefined),
  state: atom<AuthState>(AuthState.LOGIN),
}

export function useAuthAtoms() {
  const [email, setEmail] = useAtom(atoms.email)
  const [status, setStatus] = useAtom(atoms.status)
  const [state, setState] = useAtom(atoms.state)

  return {
    email,
    setEmail,
    status,
    setStatus,
    state,
    setState,
  }
}

export function AuthAtomsProvider({ children }: { children: JSX.Element }) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
