import { differenceInHours, parseISO } from 'date-fns'

export default function getHoursFromPurchaseTime(purchaseTime) {
  const purchaseDate = parseISO(purchaseTime)
  const now = new Date()
  const hoursDifference = differenceInHours(now, purchaseDate)

  return hoursDifference
}
