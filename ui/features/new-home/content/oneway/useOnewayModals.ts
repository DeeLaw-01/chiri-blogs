'use client'

import { atom, useAtom } from 'jotai'
import { Transport } from 'src/shared-types/transport.type'

type TransportDetailsAtom = {
  transport?: Transport
}

const atoms = {
  showTransportDetails: atom<TransportDetailsAtom>({}),
}

export function useOnewayModalsAtoms() {
  const [showTransportDetails, setShowTransportDetails] = useAtom(
    atoms.showTransportDetails
  )

  const resetSearchModals = () => {
    setShowTransportDetails({})
  }

  return {
    showTransportDetails,
    setShowTransportDetails,
    resetSearchModals,
  }
}
