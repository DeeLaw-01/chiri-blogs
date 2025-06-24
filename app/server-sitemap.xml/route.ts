import { getServerSideSitemap } from 'next-sitemap'
import getBlogsQuery from 'src/api/queries/get/blogs/getBlogsQuery'
import { BlogsResponse } from 'src/api/queries/get/blogs/getBlogsQuery/blogs.type'
import { serverFetch } from 'src/api/serverFetch'
import { CONFIG_SITE } from 'src/config'

export async function GET() {
  const { data } = await serverFetch<BlogsResponse>(getBlogsQuery(0, 500))

  const blogs = data.blogs.map((blog) => {
    return {
      loc: `${CONFIG_SITE.BASE_LINK}/en/blog/${blog.slug}`,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${CONFIG_SITE.BASE_LINK}/blog/${blog.slug}`,
          hreflang: 'x-default',
        },
      ],
    }
  })

  return getServerSideSitemap(blogs)
}
