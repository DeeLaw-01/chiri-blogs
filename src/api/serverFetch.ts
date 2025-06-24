import { getLocale } from 'next-intl/server'
import { fetcher } from './fetcher/fetcher'
import { Query } from './fetcher/fetcher.type'

export async function serverFetch<T>(query: Query): Promise<{ data: T }> {
  const locale = await getLocale()
  const data = await fetcher({ ...query, locale: locale })
  return { data }
}
