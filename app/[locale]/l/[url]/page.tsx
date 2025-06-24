import { redirect } from 'next/navigation'
import { RedirectResponse } from 'src/api/queries/get/redirect/redirect.type'
import redirectQuery from 'src/api/queries/get/redirect/redirectQuery'
import { serverFetch } from 'src/api/serverFetch'

type Params = { params: { url: string } }

export default async function ShortUrlPage({ params }: Params) {
  const { data } = await serverFetch<RedirectResponse>(
    redirectQuery(params.url)
  )

  redirect(data.redirect_url)
}
