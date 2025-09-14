import { IntlProvider } from 'i18n'
import getBlogsQuery from 'src/api/queries/get/blogs/getBlogsQuery'
import { BlogsResponse } from 'src/api/queries/get/blogs/getBlogsQuery/blogs.type'
import { serverFetch } from 'src/api/serverFetch'
import getServerTranslations from 'src/utils/getServerTranslations'
import NewHome from 'ui/features/new-home'
import { HomeAtomsProvider } from 'ui/features/new-home/hooks/useHomeAtoms'

export const revalidate = 86400

async function getBlogs() {
  const { data } = await serverFetch<BlogsResponse>(getBlogsQuery(0, 9))
  return data
}

export default async function HomePage() {
  const blogsData = await getBlogs()
  // Use English locale by default
  const { t } = await getServerTranslations({ locale: 'en' })

  const data = {
    title: t('home-page.main.header'),
    subtitle: t('home-page.main.subheader'),
    image: '/static/b2b/chiri/herosection.webp',
    imageSmall: '/static/b2b/chiri/herosection.webp',
    blurImage:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB+ALgDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AN1RKok05acsuWvITXlpyy5rTmpNYuM5VygLhplPSjIAoiplSE0jpJAAImAGSZkYIAALxFRCpW2WnNac1jK05oTbmtOaw5rSUJvKuVjKqVJtKes5TlKaaWp09IMhpEAAIkYCQADLRgAEwQCeHpyo09bDSVcrGVcoTaVc6YSrnQL6J0qdMJ0udAN50qVjOlSlNZT1nKqUhehMp60FAgkYABAABAIMkwWhF4OnqNGtBpKcrPTlBayrnTGVUoTadLnTCVc6SbzpcrCVcqDeVUrGVcrTLWVUrOVUpS9NEp6QoFo0EwWjQ0BpaNZJgtCTntGp0a0V6eo05QlyqlZyqlZTWVcrKVcqDWVcrKVcpDaVcrGVcpDWVcrKVUrQaSnqJT1JejU6NRVo1OjQVaWlpaCrQnQC53T1GjWi0lOVEqoEuKiYqMhcXERcQXFxEXCFxcrOKhDSVUrOU5SGkqtZ6ekr09Z6ehL0ajRqK9LS0aCegtATm9VKz1ULo0i4zjTlMri4nlcAVFwoqRMqioUOIKhxJlK09SNKXp6jRqS9PUaNRaaNRp6krT1OgJWggi5tURFxOrTlpyy5a8pmtOWnLPlryGKuKiYuJk4ooaRgAgAEiY0gUrT1JoqNJpKBGEYIJP/Z',
  }

  return (
    <IntlProvider page="/">
      <HomeAtomsProvider>
        <NewHome data={data} blogs={blogsData?.blogs} />
      </HomeAtomsProvider>
    </IntlProvider>
  )
}
