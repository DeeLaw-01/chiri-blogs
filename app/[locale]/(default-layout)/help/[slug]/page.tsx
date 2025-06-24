import { articles } from 'ui/features/help/help-data'
import HelpArticle from './article-page'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IntlProvider } from 'i18n'

type Params = { params: { locale: string; slug: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params
  const article = await getHelpArticle(slug)

  return {
    title: article?.title ?? 'Not found',
    description: article?.description,
    robots: { index: article ? true : false },
  }
}

async function getHelpArticle(slug: string) {
  if (!slug) return
  return articles.find((a) => a.slug === slug) || null
}

export const revalidate = 3600

export default async function ArticlePage({ params }: Params) {
  const article = await getHelpArticle(params.slug)

  if (!article) notFound()

  return (
    <IntlProvider page={'/help/[article]'}>
      <HelpArticle article={article} />
    </IntlProvider>
  )
}
