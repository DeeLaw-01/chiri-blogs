export type BlogType = {
  categories: string[]
  createdBy: string
  creationTime: string
  description: string
  headerImageURL: string
  id: number
  keywords: string[]
  language: string
  locations: string[]
  publishTime: string
  lastUpdateTime: string
  slug: string
  title: string
  content: string
  relatedPosts: RelatedBlog[]
}

export type BlogWithoutContent = Omit<BlogType, 'content'>
export type RelatedBlog = Omit<BlogType, 'relatedPosts'>
