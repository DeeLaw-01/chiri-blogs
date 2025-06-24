import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from '../../trip-search/inputs/base-input-box'
import CalendarIcon from '@/icons/new/calendar.svg'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'
import getDateText from '../../../search-pill/utils/getDateText'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'

export default function DatesInput() {
  const formatDate = useFormattedDate()
  const { state } = useHomeAtoms()
  const { onewaySearch } = useSearchAtoms()
  const { setShowDates } = useSearchModalsAtoms()
  const { t } = useTranslation()

  return (
    <BaseInputBox
      icon={CalendarIcon}
      label="home-page.desktop.pill1.heading"
      onClick={() => setShowDates(true)}
    >
      <Text>{getDateText(onewaySearch, state, formatDate, t)}</Text>
    </BaseInputBox>
  )
}
