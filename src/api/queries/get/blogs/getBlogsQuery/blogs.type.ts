import { BlogWithoutContent } from 'ui/features/blog/types/blog.type'

export type BlogsResponse = {
  blogs: BlogWithoutContent[]
  total: number
}
