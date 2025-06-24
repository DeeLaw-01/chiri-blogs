import { Box, HStack, VStack } from '@chakra-ui/react'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputButton from './base-input-button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import { TripSearch } from '../../../hooks/useSearchAtoms/types/trip.types'
import { HomeState } from 'ui/features/new-home/hooks/useHomeAtoms/types'
import PeopleIcon from '@/icons/checkout/people-icon.svg'
import getTravelersText from '../../utils/getTravelersText'
import useTranslation from 'src/hooks/useTranslation'

type TravelersInputProps = {
  search: TripSearch
}

export default function TravelersInput({ search }: TravelersInputProps) {
  const { t } = useTranslation()
  const { setShowTravelers, resetSearchModals } = useSearchModalsAtoms()

  const handleClick = () => {
    resetSearchModals()
    setShowTravelers(true)
  }

  return (
    <BaseInputButton id="travelers-pill" onClick={() => handleClick()} w="40%">
      <HStack
        width={'full'}
        borderRightRadius="full"
        justifyContent={'flex-start'}
        fontSize="sm"
      >
        <PeopleIcon
          width="20px"
          height="20px"
          strokeWidth="1.5"
          stroke={theme.colors.primary}
        />
        <VStack align="flex-start" gap="0.2rem">
          <Text fontWeight="medium" st="home-page.desktop.pill3.heading" />
          <Box fontWeight="normal">
            {getTravelersText(search, HomeState.TRIP, t)}
          </Box>
        </VStack>
      </HStack>
    </BaseInputButton>
  )
}
