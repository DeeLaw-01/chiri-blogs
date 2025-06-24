import { Box, HStack, VStack } from '@chakra-ui/react'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputButton from './base-input-button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import { TripSearch } from '../../../hooks/useSearchAtoms/types/trip.types'
import getDateText from '../../utils/getDateText'
import CalendarIcon from '@/icons/checkout/calendar-icon.svg'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import useTranslation from 'src/hooks/useTranslation'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'

type DatesInputProps = {
  search: TripSearch
}

export default function DatesInput({ search }: DatesInputProps) {
  const { state } = useHomeAtoms()
  const format = useFormattedDate()
  const { setShowDates, resetSearchModals } = useSearchModalsAtoms()
  const { t } = useTranslation()

  const handleClick = () => {
    resetSearchModals()
    setShowDates(true)
  }

  return (
    <BaseInputButton
      id="dates-search-pill"
      onClick={() => handleClick()}
      w="40%"
    >
      <HStack w={'full'} justifyContent="flex-start" fontSize="sm">
        <CalendarIcon
          width="20px"
          height="20px"
          stroke={theme.colors.primary}
        />
        <VStack alignItems={'flex-start'} gap="0.2rem">
          <Box>
            <Text fontWeight="medium" st="home-page.desktop.pill1.heading" />
          </Box>
          <Box noOfLines={1} fontWeight="normal">
            {getDateText(search, state, format, t)}
          </Box>
        </VStack>
      </HStack>
    </BaseInputButton>
  )
}
