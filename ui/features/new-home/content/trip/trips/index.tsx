import Heading from 'ui/primitives/Heading'
import TripCard from '../trip-card'
import { useTripAtoms } from '../useTripAtoms'
import { Divider, GridItem } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { Fragment, useState } from 'react'
import { Banners } from '../banners'

export default function Trips() {
  const { trips } = useTripAtoms()
  const exact = trips?.filter((p) => p.exact_query_match)
  const nonExact = trips?.filter((p) => !p.exact_query_match)

  const [currentPackageLoading, setCurrentPackageLoading] = useState<
    number | null
  >(null)

  return (
    <>
      {/* EXACT TRIPS */}
      {exact.map((trip, index) => (
        <Fragment key={index}>
          <TripCard
            trip={trip}
            currentPackageLoading={currentPackageLoading}
            setCurrentPackageLoading={setCurrentPackageLoading}
          />
          <Banners currentIndex={index} />
        </Fragment>
      ))}

      {/* NON EXACT TRIPS */}
      {nonExact.length > 0 && (
        <GridItem gridColumn={'1 / -1'}>
          <Divider my={10} />
          <Heading
            as="h1"
            fontWeight={'normal'}
            st="home-page.similar.heading"
          />

          <Text
            color="_gray"
            fontSize="sm"
            mt="2"
            st="home-page.similar.description"
          />
        </GridItem>
      )}
      {nonExact.map((trip) => (
        <TripCard
          trip={trip}
          key={trip.id}
          currentPackageLoading={currentPackageLoading}
          setCurrentPackageLoading={setCurrentPackageLoading}
        />
      ))}
    </>
  )
}
