import useTranslation from 'src/hooks/useTranslation'
import { getDate, getDay, getMonth, getYear, isDate } from 'date-fns'
import {
  getMonthStringKey,
  getUTCDateTime,
  getWeekDayStringKey,
} from 'src/utils/dateUtils'

const useFormattedDate = () => {
  const { t } = useTranslation()

  return (
    date,
    includeWeekday = true,
    includeDate = true,
    includeMonth = true,
    noSpace = false,
    includeYear = false
  ) => {
    const dateObj = isDate(date) ? date : getUTCDateTime(date)

    if (dateObj) {
      const year = getYear(dateObj)
      const day = getDate(dateObj)
      const weekday = t(getWeekDayStringKey(getDay(dateObj)))
      const month = t(getMonthStringKey(getMonth(dateObj), true))

      return `${includeWeekday ? weekday + ',  ' : ''}${
        includeDate ? day : ''
      }${noSpace ? '' : ' '}${includeMonth ? month : ''} ${
        noSpace ? '' : ' '
      } ${includeYear ? year : ''}`
    }
  }
}

export { useFormattedDate }
