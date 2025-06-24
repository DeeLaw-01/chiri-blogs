import { Box, Center, Grid } from '@chakra-ui/react'
import getSavedPassengersQuery from 'src/api/queries/get/checkout/getSavedPassengersQuery'
import { SavedPassengersResponse } from 'src/api/queries/get/checkout/getSavedPassengersQuery/passenger.type'
import { useSignedFetch } from 'src/api/useSignedFetch'
import SavedPassengerCard from './saved-passenger-card'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { SavedPassenger } from 'ui/features/new-checkout/checkout.type'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import SavedPassengersLoading from './loading'

export const LOAD_MORE_COUNT = 2
const THRESHOLD = LOAD_MORE_COUNT - 1

// UPDATE THESE FIELD VALUES ONCE BE UPDATES PASSENGER FIELDS
const RESET_VALUES = {
  firstname: '',
  surname: '',
  gender: '',
  birthday: '',
  nationality: '',
  phone_number: '',
}

export default function SavedPassengers() {
  const [selected, setSelected] = useState<string>()
  const [count, setCount] = useState<number>(THRESHOLD)
  const { reset } = useFormContext()
  const { data, isLoading } = useSignedFetch<SavedPassengersResponse>(
    getSavedPassengersQuery()
  )

  const isSelected = (passenger: SavedPassenger) => {
    return passenger.traveler_id === selected
  }

  const handleShowMore = () => {
    setCount((prev) => prev + LOAD_MORE_COUNT)
  }

  const handleSelect = (passenger: SavedPassenger) => {
    if (passenger.traveler_id === selected) reset(RESET_VALUES)
    else reset(passenger)
    setSelected(isSelected(passenger) ? undefined : passenger.traveler_id)
  }

  if (isLoading) return <SavedPassengersLoading />
  if (!data) return <></>

  return (
    <Box w="full" mt="5">
      <Grid
        gap={4}
        w="full"
        templateColumns={'repeat(auto-fit, minmax(18rem, 1fr))'}
      >
        {data.map((passenger, index) => {
          if (index > count) return
          return (
            <SavedPassengerCard
              key={index}
              passenger={passenger}
              isSelected={isSelected(passenger)}
              onClick={() => handleSelect(passenger)}
            />
          )
        })}
      </Grid>
      {count < data.length && (
        <Center>
          <Button
            fontSize={'sm'}
            asLink
            id="show-more-saved-passengers"
            onClick={handleShowMore}
            mt="2"
          >
            <Text st="common.load.more" />
          </Button>
        </Center>
      )}
    </Box>
  )
}
