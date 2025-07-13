import { Box, Grid } from '@chakra-ui/react'
import useTripEffects from './useTripEffects'
import { memo } from 'react'
import LoadMore from './load-more'
import TripsModificationAlert from './trips-modification-alert'
import Trips from './trips'
import TripsLoading from './loading'
import EndMessage from './end-message'
import TripsError from './error'
import { useUnmapTripSearch } from '../../utils/search/mappers/trip-search/unmapTripSearch'
import { useUnmapRoundTripSearch } from '../../utils/search/mappers/round-trip-search/unmapRoundTripSearch'
import ActiveFilters from './active-filters'
import { useHomeAtoms } from '../../hooks/useHomeAtoms'
import { HomeState } from '../../hooks/useHomeAtoms/types'

export default memo(function TripContent () {
  const { state } = useHomeAtoms()

  // Use appropriate unmapping function based on state
  useUnmapTripSearch()
  useUnmapRoundTripSearch()
  useTripEffects()

  return (
    <Box>
      <Grid
        templateColumns={'repeat(auto-fill, minmax(19rem, 1fr))'}
        gap={4}
        w={'full'}
      >
        <TripsModificationAlert />
        <ActiveFilters />
        <Trips />
        <TripsLoading />
        <TripsError />
        <LoadMore />
      </Grid>
      <EndMessage />
    </Box>
  )
})
