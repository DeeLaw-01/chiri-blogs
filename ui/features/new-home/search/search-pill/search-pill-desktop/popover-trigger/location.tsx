import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputButton from './base-input-button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import getLocationsText from '../../utils/getLocationsText'
import { TripSearch } from '../../../hooks/useSearchAtoms/types/trip.types'
import MapPinIcon from '@/icons/map-pin.svg'
import useTranslation from 'src/hooks/useTranslation'
import { useSelectedLocation } from 'src/contexts/location'
import { useHomeAtoms } from 'ui/features/new-home/hooks/useHomeAtoms'

type LocationInputProps = {
  search: TripSearch
}

export default function LocationInput({ search }: LocationInputProps) {
  const [selected] = useSelectedLocation()
  const { setShowDeparture, resetSearchModals } = useSearchModalsAtoms()
  const { t } = useTranslation()
  const { state } = useHomeAtoms()

  const handleClick = () => {
    resetSearchModals()
    setShowDeparture(true)
  }

  return (
    <BaseInputButton id="locations-pill" onClick={() => handleClick()} w="50%">
      <HStack w={'full'} justifyContent="flex-start" h={'full'}>
        <Box width="20px" height="20px" flexShrink={0}>
          <MapPinIcon
            width="20px"
            height="20px"
            stroke={theme.colors.primary}
            strokeWidth="2"
          />
        </Box>
        <VStack
          align="flex-start"
          fontWeight="normal"
          gap="0.2rem"
          fontSize={'sm'}
        >
          <Box>
            <Text fontWeight="medium" st="home-page.desktop.pill2.heading" />
          </Box>
          <HStack alignItems={'center'} gap={1} fontWeight="normal" w={'full'}>
            {!selected && !search?.initialLocation ? (
              <Skeleton height={'20px'} width={'75px'} endColor="gray.300" />
            ) : (
              <Text
                maxW={'100px'}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {search?.initialLocation?.value ?? selected?.value}
              </Text>
            )}
            <Text>-</Text>
            <Text
              maxW={'80px'}
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              textAlign={'left'}
            >
              {getLocationsText(search, state, t)}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </BaseInputButton>
  )
}
