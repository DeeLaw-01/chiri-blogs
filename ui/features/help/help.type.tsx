export type Article = {
  title: string
  description: string
  slug: string
  relatedArticles: RelatedArticle[]
  content: string
}

type RelatedArticle = {
  title: string
  description: string
  slug: string
}
