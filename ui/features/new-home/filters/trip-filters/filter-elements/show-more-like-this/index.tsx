import { Divider } from '@chakra-ui/react'
import { useTripAtoms } from 'ui/features/new-home/content/trip/useTripAtoms'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import Heading from 'ui/primitives/Heading'
import Select from 'ui/primitives/Select'
import Option from './option'
import { PackageDetails } from 'src/shared-types/package-details.type'

export default function ShowMoreLikeThisPackage() {
  const { trips, tripsLoading } = useTripAtoms()
  const { setTripFilters, tripFilters } = useSearchAtoms()

  const handleRemoveSimilarTrip = (trips: PackageDetails[]) => {
    setTripFilters((prev) => {
      delete prev.trip_id
      return {
        ...prev,
        ...(trips && { trip_id: trips.map((trip) => trip.id) }),
      }
    })
  }

  if (!tripFilters.trip_id) return <></>

  return (
    <>
      <Heading as="h5" st="home-page.home-page.similar.packages.header" />
      <Select
        isMulti
        isLoading={trips.length === 0 && tripsLoading}
        defaultValue={tripFilters.trip_id}
        value={tripFilters?.trip_id || ([] as number[])}
        options={trips}
        onChange={(e) => handleRemoveSimilarTrip(e as PackageDetails[])}
        getOptionLabel={(e) => `${e}`}
        components={{ Option: Option }}
      />
      <Divider w="80%" alignSelf="center" py={2} />
    </>
  )
}
