import { API_URL_EMAIL } from 'src/api/baseUrls'
import { Method } from 'src/api/fetcher/fetcher.type'

export type FeedbackQueryBody = {
  email: string
  message: string
  stars: number
}
export default function postFeedbackQuery(body: FeedbackQueryBody) {
  const url = API_URL_EMAIL + '/feedback'

  return { url, method: Method.POST, body }
}
