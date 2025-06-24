import { Box, Grid } from '@chakra-ui/react'
import useOnewayEffects from './useOnewayEffects'
import OnewayModificationAlert from './modification-alerts'
import Oneways from './oneways'
import OnewayTrips from './onewayTrips'
import OneWayModals from './modals'
import { useUnmapOnewaySearch } from '../../utils/search/mappers/oneway-search/unmapOnewaySearch'
import OnewayLoading from './one-way-loading'
import OnewayError from './error'

export default function OnewayContent() {
  useUnmapOnewaySearch()
  useOnewayEffects()

  return (
    <>
      <Box>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={4}
          w={'full'}
          mb={10}
        >
          <OnewayModificationAlert />
          <OnewayTrips />
          <Oneways />
          <OnewayLoading />
          <OnewayError />
        </Grid>
      </Box>
      <OneWayModals />
    </>
  )
}
