import { Box, Divider, HStack, useToast } from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Modal from 'ui/primitives/Modal'

import { useState } from 'react'
import useTranslation from 'src/hooks/useTranslation'
import useTravelersData from './atoms/useTravelersData'

import { getSignedDeletePassengerDataQuery } from 'src/api/queries/post/userProfileTravelerQuery'

export default function RemoveTravelerModal({
  isOpenRemoveTravelerModal,
  onCloseRemoveTravelerModal,
  passengerId,
  onCloseEditDrawer,
}: {
  passengerId: string
  onCloseEditDrawer: () => void
  isOpenRemoveTravelerModal: boolean
  onCloseRemoveTravelerModal: () => void
}) {
  const toast = useToast()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { setPassengerSavedDataArray } = useTravelersData()

  const handleRemoveTraveler = () => {
    setIsLoading(true)

    getSignedDeletePassengerDataQuery(passengerId).then(async (res) => {
      const data = await fetch(res.url, {
        method: res.method,
        headers: res.headers,
      })

      if (data.ok) {
        onCloseRemoveTravelerModal()
        onCloseEditDrawer()

        setPassengerSavedDataArray((passengerArray) => {
          const newPassengerArray = passengerArray.filter(
            (p) => p.id !== passengerId
          )

          return newPassengerArray
        })

        toast({
          title: t('profile-page.settings.travelers.field.removed'),
          status: 'success',
          duration: 4000,
          isClosable: false,
        })
      } else {
        toast({
          title: t('common.error.general'),
          status: 'error',
          duration: 4000,
          isClosable: false,
        })
      }

      setIsLoading(false) // reset loading state
    })
  }

  return (
    <>
      <Modal
        size="xl"
        isOpen={isOpenRemoveTravelerModal}
        onClose={onCloseRemoveTravelerModal}
        modalBodyStyle={{ padding: 0 }}
      >
        <Box w="full">
          <Box pt={8} px={5} pb={5}>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              st="profile-page.settings.travelers.remove.modal.heading"
            />

            <Text
              color="_gray"
              st="profile-page.settings.travelers.remove.modal.subheading"
            />
          </Box>

          <Divider />
          <HStack w="full" py="3" justify="space-between" px="6">
            <Button
              px="6"
              py="3.5"
              h="auto"
              secondary
              fontWeight="medium"
              onClick={onCloseRemoveTravelerModal}
            >
              <Text notag st="common.general.back" />
            </Button>
            <Button
              primary
              px="20"
              py="3.5"
              h="auto"
              fontWeight="medium"
              isLoading={isLoading}
              onClick={handleRemoveTraveler}
            >
              <Text notag st="common.general.continue" />
            </Button>
          </HStack>
        </Box>
      </Modal>
    </>
  )
}
