import { Icon, MenuDivider, MenuItem, useToast } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth'
import useSearch from 'ui/features/new-home/search/hooks/useSearch'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { mapTripSearch } from 'ui/features/new-home/utils/search/mappers/trip-search/mapTripSearch'
import useBookmarks from 'ui/features/profile/hooks/useBookmarks'

import DislikeIcon from '@/icons/new/editing/thumbs-down.svg'
import HeartIcon from '@/icons/new/editing/heart.svg'
import LikeIcon from '@/icons/new/editing/thumbs-up.svg'
import getLocationQuery from 'src/api/queries/get/locationQuery'
import useMutation from 'src/api/useMutation'
import { PackageDetails } from 'src/shared-types/package-details.type'
import Menu from 'ui/primitives/Menu'
import { useTripAtoms } from '../useTripAtoms'
import useTranslation from 'src/hooks/useTranslation'
import Text from 'ui/primitives/Text'
import useSignedMutation from 'src/api/useSignedMutation'
import addBookmarkQuery from 'src/api/queries/post/addBookmarkQuery'
import deleteBookmarkQuery from 'src/api/queries/delete/deleteBookmarkQuery'
import Button from 'ui/primitives/Button'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

export default function ExtraOptionsButton({ trip }: { trip: PackageDetails }) {
  const toast = useToast()
  const { t } = useTranslation()
  const { makeSearch } = useSearch()
  const { tripSearch, tripFilters, setTripFilters } = useSearchAtoms()
  const { setTrips } = useTripAtoms()
  const { bookmarks } = useBookmarks()
  const { currentUser } = useAuth()
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  const { setShowAuth } = useGlobalAtoms()
  const { trigger } = useMutation((d) => getLocationQuery(d))
  const { trigger: addBookmark } = useSignedMutation((d) => addBookmarkQuery(d))
  const { trigger: removeBookmark } = useSignedMutation((d) =>
    deleteBookmarkQuery(d)
  )

  const handleLikeEvent = () => {
    const query = {
      ...tripSearch,
      ...tripFilters,
      trip_id: [trip.id],
    }

    setTripFilters((prev) => {
      delete prev.trip_id
      return {
        ...prev,
        trip_id: [trip.id],
      }
    })

    makeSearch(mapTripSearch(query))

    toast({
      description: t('home-page.toast.message.like.package'),
      position: 'bottom',
      status: 'success',
      duration: 3000,
    })
  }

  const handleAvoidLocationSuccess = (data: any) => {
    setTripFilters((prev) => {
      return {
        ...prev,
        avoidLocations: [
          ...(prev.avoidLocations || []),
          ...(data.results || []),
        ],
      }
    })
  }

  const handleDisLikeEvent = () => {
    const locodesToAvoid = trip.itinerary
      .slice(0, -1)
      .map((it) => it.destinationLocode)
      .join(',')

    trigger(locodesToAvoid, {
      onSuccess: handleAvoidLocationSuccess,
    })

    setTrips((prevTrips) => prevTrips.filter((t) => t.id !== trip.id))

    toast({
      description: t('home-page.toast.message.dislike.package'),
      position: 'bottom',
      status: 'success',
      duration: 3000,
    })
  }

  const handleBookmarkEvent = () => {
    if (!currentUser) {
      setShowAuth(true)
      return
    }

    setIsBookmarked(!isBookmarked)
    if (!isBookmarked) addBookmark(trip.id)
    if (isBookmarked) removeBookmark(trip.id)

    toast({
      description: t('home-page.toast.message.bookmark.package'),
      position: 'bottom',
      status: 'success',
      duration: 3000,
    })
  }

  useEffect(() => {
    if (!currentUser) return
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === trip.id)
    setIsBookmarked(isBookmarked)
  }, [bookmarks])

  return (
    <Menu>
      <MenuItem
        icon={<Icon as={LikeIcon} w="15px" />}
        onClick={handleLikeEvent}
        id="trip-like-button"
        as={Button}
        fontWeight={'normal'}
      >
        <Text st="home-page.package.menu.option.one.like" notag />
      </MenuItem>
      <MenuDivider m={0} />
      <MenuItem
        icon={<Icon as={DislikeIcon} w="15px" />}
        onClick={handleDisLikeEvent}
        id="trip-dislike-button"
        as={Button}
        fontWeight={'normal'}
      >
        <Text st="home-page.package.menu.option.two.dislike" notag />
      </MenuItem>
      <MenuDivider m={0} />
      <MenuItem
        icon={<Icon as={HeartIcon} w="15px" />}
        onClick={handleBookmarkEvent}
        id="trip-bookmark-button"
        as={Button}
        fontWeight={'normal'}
      >
        <Text
          st={
            isBookmarked
              ? 'home-page.package.menu.option.three.remove.bookmark'
              : 'home-page.package.menu.option.three.add.bookmark'
          }
          notag
        />
      </MenuItem>
    </Menu>
  )
}
