import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { Location } from 'src/api/queries/get/locationQuery/location.type'
import useCookie from 'src/hooks/useCookie'

type LocationContextType = [
  Location,
  React.Dispatch<React.SetStateAction<Location>>
]

const LocationContext = createContext<LocationContextType | null>(null)

export default function LocationProvider({
  children,
  location,
}: {
  children: ReactNode
  location: Location
}): JSX.Element {
  const [_, setLocation] = useCookie('selected_location', null)
  const [selectedCity, setSelectedCity] = useState<Location>(location)

  useEffect(() => {
    if (!selectedCity) return
    setLocation(JSON.stringify(selectedCity))
  }, [selectedCity])

  return (
    <LocationContext.Provider value={[selectedCity, setSelectedCity]}>
      {children}
    </LocationContext.Provider>
  )
}

export function useSelectedLocation() {
  const context = useContext(LocationContext)
  if (!context) throw new Error('No LocationProvider found')

  return context
}
