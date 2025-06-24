import { HStack, Box } from '@chakra-ui/react'
import useCookie from 'src/hooks/useCookie'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { NotificationType } from '../../notification.type'
import NotificationLayout from '../../base-layout'
import { useNotification } from 'src/contexts/notification'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'app/router'
import { removeLocaleFromFullPathname } from 'src/utils/languageUtils'
import { isEqual } from 'lodash'
import useSessionStorage from 'src/hooks/useSessionStorage'

type ContinueSearchProps = {
  notification: NotificationType
}

const normalizeQuery = (query) => {
  return {
    ...query,
    flexibleDates: query.flexibleDates === 'true' ? true : query.flexibleDates,
    exactDates: query.exactDates === 'true' ? true : query.exactDates,
  }
}

export function useShouldSendContinueSearch(
  path: string,
  notifications: NotificationType[]
): boolean {
  const router = useRouter()
  const [lastSearchAtoms] = useCookie('lastSearchAtoms', null, true)
  const [lastSearchQuery] = useCookie('lastSearchQuery', null, true)
  const isContinueSearchPresent = notifications.some(
    (notification) => notification.type === 'continue-search'
  )
  const [hasShownContinueSearch] = useSessionStorage(
    'has-shown-continue-search',
    false
  )

  if (
    lastSearchAtoms &&
    path === '/' &&
    !isContinueSearchPresent &&
    !hasShownContinueSearch &&
    !isEqual(normalizeQuery(lastSearchQuery), normalizeQuery(router.query))
  ) {
    return true
  }
  return false
}

export default function ContinueSearch({ notification }: ContinueSearchProps) {
  const path = usePathname()
  const [, setHasShownContinueSearch] = useSessionStorage(
    'has-shown-continue-search',
    false
  )
  const [lastSearchAtoms] = useCookie('lastSearchAtoms', null, true)
  const [lastSearchQuery] = useCookie('lastSearchQuery', null, true)
  const { closeNotification } = useNotification()

  const { makeSearch } = useSearch()
  const { setQueryParam } = usePackagesAtom()

  const makeTheSearch = () => {
    setQueryParam(lastSearchQuery)
    makeSearch(lastSearchQuery)
    closeNotification(notification.id)
  }

  useEffect(() => {
    return () => {
      setHasShownContinueSearch(true)
    }
  }, [])

  useEffect(() => {
    if (removeLocaleFromFullPathname(path) !== '/')
      closeNotification(notification.id)
  }, [path])

  const getDescription = () => {
    return (
      <Box>
        {lastSearchAtoms?.locationsTitle?.values?.locations && (
          <Text as="span" pr="3">
            {lastSearchAtoms.locationsTitle.values.locations}
          </Text>
        )}
        {lastSearchAtoms?.dateRangeTitle?.values?.start && (
          <Text as="span" pr="3">
            {lastSearchAtoms.dateRangeTitle.values.start}-
            {lastSearchAtoms.dateRangeTitle.values.end}
          </Text>
        )}
        {lastSearchAtoms.totalPeople && (
          <Text
            as="span"
            st="common.travelers"
            sd={{ count: lastSearchAtoms.totalPeople }}
          />
        )}
      </Box>
    )
  }

  return (
    <NotificationLayout
      id={notification.id}
      header={<Text st="notifications:continue.search.heading" />}
      description={getDescription()}
      content={
        <HStack w="full" justify="right" mt="1">
          <Button
            asLink
            role="group"
            id="search"
            fontWeight="normal"
            fontSize="sm"
            onClick={makeTheSearch}
            arrow
          >
            <Text st="common.general.continue" />
          </Button>
        </HStack>
      }
    />
  )
}
