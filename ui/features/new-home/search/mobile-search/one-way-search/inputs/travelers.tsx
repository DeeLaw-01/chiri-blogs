import { getTotalTravellers } from 'ui/features/new-home/utils/getTotalTravelers'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from '../../trip-search/inputs/base-input-box'
import PeopleIcon from '@/icons/new/users.svg'
import Text from 'ui/primitives/Text'

export default function TravelersInput() {
  const { onewaySearch } = useSearchAtoms()
  const { setShowTravelers } = useSearchModalsAtoms()

  const getTotal = () => {
    return getTotalTravellers(
      onewaySearch?.n_adults,
      onewaySearch?.n_children,
      onewaySearch?.n_babies
    )
  }

  return (
    <BaseInputBox
      icon={PeopleIcon}
      label="home-page.desktop.pill3.heading"
      onClick={() => setShowTravelers(true)}
    >
      <Text st="common.travelers" sd={{ count: getTotal() }} />
    </BaseInputBox>
  )
}
