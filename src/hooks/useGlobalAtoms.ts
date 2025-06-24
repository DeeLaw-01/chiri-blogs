'use client'

import { atom, useAtom } from 'jotai'

const atoms = {
  showAuth: atom<boolean>(false),
}

export function useGlobalAtoms() {
  const [showAuth, setShowAuth] = useAtom(atoms.showAuth)

  return {
    showAuth,
    setShowAuth,
  }
}
