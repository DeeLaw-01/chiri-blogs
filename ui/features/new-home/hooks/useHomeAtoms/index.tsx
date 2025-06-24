'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'
import { HomeState } from './types'

const atoms = {
  state: atom<HomeState | undefined>(undefined),
  forceSearch: atom<boolean>(true),
}

export function useHomeAtoms() {
  const [state, setState] = useAtom(atoms.state)
  const [forceSearch, setForceSearch] = useAtom(atoms.forceSearch)

  return { state, setState, forceSearch, setForceSearch }
}

export function HomeAtomsProvider({ children }: { children: JSX.Element }) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
