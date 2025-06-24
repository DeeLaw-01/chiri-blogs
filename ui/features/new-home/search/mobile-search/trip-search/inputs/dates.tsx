import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from './base-input-box'
import CalendarIcon from '@/icons/new/calendar.svg'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'

export default function DatesInput() {
  const formatDate = useFormattedDate()
  const { tripSearch } = useSearchAtoms()
  const { setShowDates } = useSearchModalsAtoms()
  const { t } = useTranslation()

  const getDateDisplay = () => {
    if (!tripSearch) return
    const { windowStart, windowEnd } = tripSearch

    if (!windowStart) return t('home-page.search.range.anytime')
    return `${formatDate(windowStart, false)}-${formatDate(windowEnd, false)}`
  }

  return (
    <BaseInputBox
      icon={CalendarIcon}
      label="home-page.desktop.pill1.heading"
      onClick={() => setShowDates(true)}
    >
      <Text>{getDateDisplay()}</Text>
    </BaseInputBox>
  )
}
