'use client'

import {
  VStack,
  Center,
  Spinner,
  Box,
  HStack,
  Skeleton,
  useDisclosure,
} from '@chakra-ui/react'
import useAuth from 'src/hooks/useAuth'
import CamelBackground from 'ui/features/profile/camel-background'
import UnsubscribeView from 'ui/features/unsubscribe/unsubscribe'

import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import { useEffect } from 'react'

import TravelersButton from 'ui/features/edit-travelers-info/travelers-button'

import dynamic from 'next/dynamic'
import useTravelersData from 'ui/features/edit-travelers-info/atoms/useTravelersData'

import getSignedUserProfileTravelersDataQuery from 'src/api/queries/get/userProfileTravelersQuery'
import useSignedMutation from 'src/api/useSignedMutation'
import { DeleteProfileModalProps } from 'ui/features/profile/delete-profile-modal'

const DynamicAddTravelerDrawer = dynamic(
  () => import('ui/features/edit-travelers-info/add-traveler-drawer')
)

const DynamicDeleteProfile = dynamic<DeleteProfileModalProps>(
  () => import('ui/features/profile/delete-profile-modal')
)

export default function Settings() {
  const { isUserLoggedIn } = useAuth()
  const { attributes } = useAuth()
  const { trigger, isMutating: passengerSavedDataLoading } = useSignedMutation(
    getSignedUserProfileTravelersDataQuery()
  )

  const { passengerSavedDataArray, setPassengerSavedDataArray } =
    useTravelersData()

  const {
    isOpen: isOpenAddTravelerDrawer,
    onOpen: onOpenAddTravelerDrawer,
    onClose: onCloseAddTravelerDrawer,
  } = useDisclosure()

  const {
    isOpen: isOpenDeleteProfileModal,
    onOpen: onOpenDeleteProfileModal,
    onClose: onCloseDeleteProfileModal,
  } = useDisclosure()

  useEffect(() => {
    if (isUserLoggedIn) {
      trigger(null, { onSuccess: handleTravelersDataSuccess })
    }
  }, [isUserLoggedIn])

  const handleTravelersDataSuccess = (res) => {
    setPassengerSavedDataArray(res)
  }

  if (isUserLoggedIn === undefined) {
    return (
      <Center mt="10vh">
        <Spinner size="xl" color="primary" />
      </Center>
    )
  }

  if (isUserLoggedIn === false) {
    return <CamelBackground />
  }

  return (
    <>
      <VStack gap={10}>
        <Box w="full">
          <Heading
            fontWeight="normal"
            st="profile-page.settings.travelers.heading"
          />
          <Text
            mt="3"
            color="_darkgray"
            fontSize="sm"
            st="profile-page.settings.travelers.subheading"
          />

          <VStack spacing={2} mt="6">
            {passengerSavedDataLoading ? (
              <>
                <Skeleton
                  w="8rem"
                  h="1rem"
                  borderRadius="md"
                  endColor="gray.300"
                  alignSelf="flex-start"
                />
                <Skeleton
                  w="full"
                  h="4rem"
                  endColor="gray.300"
                  borderRadius="lg"
                />
                <Skeleton
                  w="full"
                  h="4rem"
                  endColor="gray.300"
                  borderRadius="lg"
                />
              </>
            ) : (
              <>
                <Box w="full">
                  <Text st="profile-page.settings.travelers.contacts.subheading" />
                </Box>

                {passengerSavedDataArray?.length > 0 &&
                  passengerSavedDataArray.map((item) => (
                    <TravelersButton passenger={item} key={item.id} />
                  ))}
              </>
            )}
          </VStack>

          <HStack mt="4" justify="flex-end">
            <Button
              secondary
              px="16"
              py="3.5"
              h="auto"
              onClick={onOpenAddTravelerDrawer}
              w={{ base: 'full', md: 'auto' }}
            >
              <Text notag st="profile-page.settings.traveler.add.traveler" />
            </Button>
          </HStack>
        </Box>

        <UnsubscribeView email={attributes.email} />
        <Button
          id="delete-profile-button"
          secondary
          w={'full'}
          mt={-6}
          onClick={onOpenDeleteProfileModal}
        >
          <Text notag st="profile-page.settings.delete.profile.heading" />
        </Button>
      </VStack>

      <DynamicAddTravelerDrawer
        isOpen={isOpenAddTravelerDrawer}
        onClose={onCloseAddTravelerDrawer}
      />
      <DynamicDeleteProfile
        isOpen={isOpenDeleteProfileModal}
        onClose={onCloseDeleteProfileModal}
      />
    </>
  )
}
