import { formatISO, parseISO, isValid } from 'date-fns'
import { format } from 'date-fns'
import { monthNames, weekdays } from 'src/data/dates'

export const isValidDate = (date: Date): boolean => {
  return !isNaN(date.getTime())
}

export const getUTCDateTime = (input: string | Date): Date | undefined => {
  const date = typeof input === 'string' ? parseISO(input) : input

  if (isValid(date)) {
    return new Date(formatISO(date, { representation: 'complete' }))
  }
  return undefined
}

export function getShortDate(date: Date): string {
  //using pad-start to add 0 to single digits
  const dd = date.getDate().toString().padStart(2, '0')
  const mm = (date.getMonth() + 1).toString().padStart(2, '0')
  const yyyy = date.getFullYear()
  const fullDate = yyyy + '-' + mm + '-' + dd

  return fullDate
}

export const getWeekDayStringKey = (day: number): string => {
  return `data.weekday.${weekdays[day]}`
}

export const getMonthStringKey = (
  month: number,
  isShort: boolean = false
): string => {
  const monthName = monthNames[month]
  const suffix = isShort ? '.short' : ''
  return `data.month.${monthName}${suffix}`
}

export const getBritishDateFromISO = (date: string): string => {
  if (!date) return ''
  return format(parseISO(date), 'dd/MM/yyyy')
}

export const getFormattedISODateForBackend = (
  year: number,
  month: number,
  day: number
): string => {
  const dateString = formatISO(new Date(year, month, day), {
    representation: 'date',
  })

  return dateString
}
