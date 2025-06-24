import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from '../../trip-search/inputs/base-input-box'
import PinIcon from '@/icons/map-pin.svg'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useSelectedLocation } from 'src/contexts/location'

export default function DepartureInput() {
  const { setShowDeparture } = useSearchModalsAtoms()
  const { onewaySearch } = useSearchAtoms()
  const [selected] = useSelectedLocation()

  return (
    <BaseInputBox
      icon={PinIcon}
      label="home-page.departure.from"
      onClick={() => setShowDeparture(true)}
    >
      {onewaySearch?.initialLocation?.value ?? selected?.value}
    </BaseInputBox>
  )
}
