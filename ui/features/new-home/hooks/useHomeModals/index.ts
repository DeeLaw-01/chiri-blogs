'use client'

import { atom, useAtom } from 'jotai'
import InitialStates from './initialStates'

const atoms = {
  showFilters: atom<boolean>(InitialStates.showFilters),
  showMobileSearch: atom<boolean>(InitialStates.showMobileSearch),
}

export function useHomeModals() {
  const [showFilters, setShowFilters] = useAtom(atoms.showFilters)
  const [showMobileSearch, setShowMobileSearch] = useAtom(
    atoms.showMobileSearch
  )

  return { showFilters, setShowFilters, showMobileSearch, setShowMobileSearch }
}
