import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'

export async function serverFetch<T>(query: Query): Promise<{ data: T }> {
  // Always use English locale
  const locale = 'en'
  const data = await fetcher({ ...query, locale: locale })
  return { data }
}
