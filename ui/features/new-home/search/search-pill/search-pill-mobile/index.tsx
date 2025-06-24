import { Box, HStack, Icon } from '@chakra-ui/react'
import { useSearchAtoms } from '../../hooks/useSearchAtoms/useSearchAtoms'
import { useHomeModals } from 'ui/features/new-home/hooks/useHomeModals'
import SearchIcon from '@/icons/new/search.svg'
import CalendarIcon from '@/icons/new/calendar.svg'
import UsersIcon from '@/icons/new/users.svg'
import FiltersButton from 'ui/features/new-home/components/filters-button'
import getLocationsText from '../utils/getLocationsText'
import getStateSearch from 'ui/features/new-home/utils/search/getStateSearch'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'
import { TripSearch } from '../../hooks/useSearchAtoms/types/trip.types'
import getDateText from '../utils/getDateText'
import getTravelersText from '../utils/getTravelersText'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import Text from 'ui/primitives/Text'
import useTranslation from 'src/hooks/useTranslation'
import { useSelectedLocation } from 'src/contexts/location'

export default function SearchPillMobile() {
  const [selected] = useSelectedLocation()
  const { search } = useSearchAtoms()
  const { setShowMobileSearch } = useHomeModals()
  const { state } = useHomeAtoms()
  const format = useFormattedDate()
  const { t } = useTranslation()
  const currentSearch = getStateSearch(state, search) as TripSearch

  return (
    <HStack
      display="flex"
      alignItems="stretch"
      w="full"
      gap="0.2rem"
      zIndex={'10'}
    >
      <Box
        bg="_white"
        borderRadius="full"
        px="4"
        py={2}
        onClick={() => setShowMobileSearch(true)}
        fontSize="2xs"
        textAlign="left"
        w="full"
      >
        <Box fontSize="sm" mb="0.5">
          <Text
            st="home-page.search.pill.mobile.trip.heading"
            sd={{
              location:
                currentSearch?.initialLocation?.value ?? selected?.value,
            }}
          />
        </Box>
        <HStack w="full" justify="space-evenly">
          <HStack
            w="33%"
            gap="0.3rem"
            borderRight="1px solid"
            borderColor="_lightgray"
          >
            <Icon as={SearchIcon} w="10px" stroke="primary" />
            <Box noOfLines={1}>{getLocationsText(currentSearch, state, t)}</Box>
          </HStack>
          <HStack
            w="33%"
            gap="0.3rem"
            borderRight="1px solid"
            borderColor="_lightgray"
          >
            <Icon as={CalendarIcon} w="10px" color="primary" />
            <Box noOfLines={1}>
              {getDateText(currentSearch, state, format, t)}
            </Box>
          </HStack>
          <HStack w="33%" gap="0.3rem">
            <Icon as={UsersIcon} w="10px" stroke="primary" />
            <Box noOfLines={1}>{getTravelersText(currentSearch, state, t)}</Box>
          </HStack>
        </HStack>
      </Box>
      <FiltersButton />
    </HStack>
  )
}
