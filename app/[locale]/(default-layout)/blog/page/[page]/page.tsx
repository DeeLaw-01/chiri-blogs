import { Metadata } from 'next'
import getServerTranslations from 'src/utils/getServerTranslations'
import { serverFetch } from 'src/api/serverFetch'
import { notFound, redirect } from 'next/navigation'
import { BlogsResponse } from 'src/api/queries/get/blogs/getBlogsQuery/blogs.type'
import getBlogsQuery from 'src/api/queries/get/blogs/getBlogsQuery'
import { IntlProvider } from 'i18n'
import Blog from '../../blog-page'

type Params = { params: { locale: string; page: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = await getBlogPosts(+params.page)
  const { t } = await getServerTranslations({ locale: params.locale })

  return {
    title: t('blog-page.metadata.title'),
    description: t('blog-page.metadata.description'),
    keywords: t('blog-page.metadata.keywords'),
    robots: { index: data ? true : false },
  }
}

export const revalidate = 3600

async function getBlogPosts(page: number) {
  try {
    const { data } = await serverFetch<BlogsResponse>(getBlogsQuery(page))
    return data
  } catch (error) {
    return
  }
}

export default async function BlogPage({ params }: Params) {
  const data = await getBlogPosts(+params.page)
  if (!data) notFound()
  if (params.page === '1') redirect('/blog')

  return (
    <IntlProvider page={'/blog'}>
      <Blog data={data} page={params.page} />
    </IntlProvider>
  )
}
