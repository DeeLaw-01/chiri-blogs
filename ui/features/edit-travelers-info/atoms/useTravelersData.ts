import { atom, useAtom } from 'jotai'

const atoms = {
  passengerSavedDataArray: atom([]),
}

export default function useTravelersData() {
  const [passengerSavedDataArray, setPassengerSavedDataArray] = useAtom(
    atoms.passengerSavedDataArray
  )

  return {
    passengerSavedDataArray,
    setPassengerSavedDataArray,
  }
}
