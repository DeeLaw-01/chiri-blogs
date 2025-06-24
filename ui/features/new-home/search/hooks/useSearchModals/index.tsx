'use client'

import { atom, useAtom } from 'jotai'
import { Dates, Staylength } from '../useSearchAtoms/types/trip.types'

type stayLengthModalAtomProps = {
  handleSelect: (v: Staylength) => void
  dates: Dates
}

const atoms = {
  showDeparture: atom<boolean>(false),
  showArrival: atom<boolean>(false),
  showDates: atom<boolean>(false),
  showTravelers: atom<boolean>(false),
  showStaylength: atom<stayLengthModalAtomProps | null>(null),
}

export function useSearchModalsAtoms() {
  const [showDeparture, setShowDeparture] = useAtom(atoms.showDeparture)
  const [showArrival, setShowArrival] = useAtom(atoms.showArrival)
  const [showDates, setShowDates] = useAtom(atoms.showDates)
  const [showTravelers, setShowTravelers] = useAtom(atoms.showTravelers)
  const [showStaylength, setShowStaylength] = useAtom(atoms.showStaylength)

  const resetSearchModals = () => {
    setShowDeparture(false)
    setShowArrival(false)
    setShowDates(false)
    setShowTravelers(false)
    setShowStaylength(null)
  }

  return {
    showDeparture,
    setShowDeparture,
    showArrival,
    setShowArrival,
    showDates,
    setShowDates,
    setShowTravelers,
    showTravelers,
    showStaylength,
    setShowStaylength,
    resetSearchModals,
  }
}
