'use client'

import { atom, useAtom } from 'jotai'
import { ScopeProvider } from 'jotai-scope'

const atoms = {
  showCurrency: atom<boolean>(false),
  showLanguage: atom<boolean>(false),
}

export function useMenuAtoms() {
  const [showCurrency, setShowCurrency] = useAtom(atoms.showCurrency)
  const [showLanguage, setShowLanguage] = useAtom(atoms.showLanguage)

  return {
    showCurrency,
    setShowCurrency,
    showLanguage,
    setShowLanguage,
  }
}

export function MenuAtomsProvider({ children }: { children: JSX.Element }) {
  return (
    <ScopeProvider atoms={[...Object.values(atoms)]}>{children}</ScopeProvider>
  )
}
