import { HStack, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { TripDetails } from 'src/shared-types/trip-details.type'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { TravelerCategory, TravelerForm } from './change-travelers.type'
import useMutation from 'src/api/useMutation'
import { useToast } from '@chakra-ui/react'
import useTranslation from 'src/hooks/useTranslation'
import { EditTravelersResponse } from 'src/api/queries/post/edit-travelers/edit-travelers.type'
import editTravelersQuery from 'src/api/queries/post/edit-travelers/editTravelersQuery'
import CategoryItem from './category-item'
import { useRouter } from 'src/i18n/router'

type ChangeTravelersViewProps = {
  trip: TripDetails
  onClose: () => void
}

export default function ChangeTravelersView({
  trip,
  onClose,
}: ChangeTravelersViewProps) {
  const router = useRouter()
  const toast = useToast()
  const { t } = useTranslation()
  const { trigger, isMutating } = useMutation<EditTravelersResponse>((data) =>
    editTravelersQuery(trip.id, data)
  )

  const [travelers, setTravelers] = useState<TravelerForm>({
    adults: trip.passengers.n_adults,
    children: trip.passengers.n_children,
    infants: trip.passengers.n_babies,
  })

  const handleSubmit = async (): Promise<void> => {
    await trigger(travelers, {
      onSuccess: handleSuccess,
      onError: handleError,
    })
  }

  const handleSuccess = (res: EditTravelersResponse): void => {
    // TODO: Backend should send an error code instead, so we don't need to check.
    if (res.tripID !== trip.id) router.push(`/packages/${res.tripID}`)
    else handleError()
  }

  const handleError = (): void => {
    toast({
      title: t('new-trip-page.toast.error.title'),
      description: t('new-trip-page.toast.error.description'),
      status: 'error',
    })
    onClose()
  }

  const handleChange = (category, value): void => {
    setTravelers((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  return (
    <Box>
      {Object.entries(travelers).map(([key, value]) => {
        const category = key as TravelerCategory
        return (
          <CategoryItem
            key={category}
            category={category}
            value={value}
            handleChange={handleChange}
          />
        )
      })}

      <HStack justify={'flex-end'} w={'full'} py="4">
        <Button
          primary
          px="5"
          onClick={handleSubmit}
          id="save-button"
          isLoading={isMutating}
        >
          <Text notag st="common:general.save" />
        </Button>
      </HStack>
    </Box>
  )
}
