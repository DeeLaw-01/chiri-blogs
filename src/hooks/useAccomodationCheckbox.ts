import useSessionstorage from 'src/hooks/useSessionStorage'
import useCheckoutObject from './useCheckoutObject'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

interface IUseAccomodationCheckbox {
  isAccomodationChecked: boolean
  setIsAccomodationChecked: (value: boolean) => void
}

const packageIdAtom = atom<string | null>(null)

export default function useAccomodationCheckbox(
  currentPackageId?: string
): IUseAccomodationCheckbox {
  const [packageId, setPackageId] = useAtom(packageIdAtom)
  const { tripCheckoutObject } = useCheckoutObject()
  const tripId = packageId || tripCheckoutObject?.id
  const [accomodationCheckedTrips, setAccomodationCheckedTrips] =
    useSessionstorage('accomodationCheckedTrips', [])

  const isAccomodationChecked = accomodationCheckedTrips.includes(tripId)

  useEffect(() => {
    currentPackageId && setPackageId(currentPackageId)
  }, [currentPackageId])

  const setIsAccomodationChecked = (value: boolean): void => {
    const updatedTrips = value
      ? [...accomodationCheckedTrips, tripId]
      : accomodationCheckedTrips.filter((id) => id !== tripId)

    setAccomodationCheckedTrips(updatedTrips)
  }

  return { isAccomodationChecked, setIsAccomodationChecked }
}
