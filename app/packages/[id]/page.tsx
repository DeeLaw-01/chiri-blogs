import Package from './package-page'
import { Metadata } from 'next'
import { IntlProvider } from 'i18n'
import { TripDetailsAtomsProvider } from 'ui/features/trip-details/useTripDetailsAtoms'
import { serverFetch } from 'src/api/serverFetch'
import { PackageMetadataResponse } from 'src/api/queries/get/package/getMetadataQuery/metadata.type'
import getPackageMetadataQuery from 'src/api/queries/get/package/getMetadataQuery/getMetadataQuery'

type Params = {
  params: {
    id: string
    sessionId: string
  }
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const { data } = await serverFetch<PackageMetadataResponse>(
      getPackageMetadataQuery(params.id, params.sessionId, 'en') // Use 'en' as default locale
    )
    return {
      title: data.title,
      openGraph: { images: [{ url: data.photo + '375160.png' }] },
      robots: { index: false },
    }
  } catch (error) {
    return { title: 'Not found' }
  }
}

export default async function TripDetailsPage({ params }: Params) {
  return (
    <IntlProvider page="/packages/[id]">
      <TripDetailsAtomsProvider>
        <Package id={params.id} />
      </TripDetailsAtomsProvider>
    </IntlProvider>
  )
}
