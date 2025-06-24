import { HStack, Box, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { TripDetails } from 'src/shared-types/trip-details.type'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Counter from './counter'
import { TravelerForm } from '../modals/change-travelers-modal/change-travelers.type'

interface TravelersSelectorProps {
  trip: TripDetails
  callback: (travelers: TravelerForm) => Promise<void>
}

export default function TravelerSelector({
  trip,
  callback,
}: TravelersSelectorProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [travelers, setTravelers] = useState<TravelerForm>({
    adults: trip.passengers.n_adults,
    children: trip.passengers.n_children,
    infants: trip.passengers.n_babies,
  })

  const handleChange = (category, value): void => {
    setTravelers((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    setLoading(true)
    await callback(travelers)
    setLoading(false)
  }

  return (
    <Box>
      {Object.entries(travelers).map(([category, value]) => (
        <HStack
          key={category}
          py="2"
          justifyContent={'space-between'}
          borderBottom="1px solid"
          borderColor="_lightgray"
        >
          <VStack spacing={0} alignItems={'flex-start'}>
            <Text st={`common:${category}`} />
            {category != 'adults' && (
              <Text
                st={`common:${category}.ages`}
                fontSize={'xs'}
                color={'_gray'}
              />
            )}
          </VStack>
          <Counter
            value={value}
            maxVal={9}
            onIncrement={() => handleChange(category, value + 1)}
            onDecrement={() => handleChange(category, value - 1)}
            minVal={category == 'adults' ? 1 : 0}
          />
        </HStack>
      ))}

      <HStack justify={'flex-end'} w={'full'} py="4">
        <Button
          primary
          px="5"
          onClick={handleSubmit}
          id="save-button"
          isLoading={loading}
        >
          <Text notag st="common:general.save" />
        </Button>
      </HStack>
    </Box>
  )
}
