import CalenderIcon from '@/icons/new/calendar.svg'
import { Box, HStack, VStack } from '@chakra-ui/react'
import { parseISO } from 'date-fns'
import useCurrency from 'src/hooks/useCurrency'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { usePathname } from 'src/i18n/router'
import { OnewayTripDetails } from 'src/shared-types/oneway-response-type'
import { theme } from 'src/styles/theme'
import { sanitizeQueryParams } from 'src/utils/urlUtils'
import { useSearchAtoms } from 'ui/features/new-home/search/hooks/useSearchAtoms/useSearchAtoms'
import { mapOnewaySearch } from 'ui/features/new-home/utils/search/mappers/oneway-search/mapOnewaySearch'
import Card from 'ui/primitives/Card'
import Image from 'ui/primitives/Image'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'

type TripSearchCardProps = {
  trip: OnewayTripDetails
}

export default function TripSearchCard({ trip }: TripSearchCardProps) {
  const pathname = usePathname()
  const { onewaySearch, setOnewaySearch } = useSearchAtoms()
  const { getConvertedCurrency } = useCurrency()
  const formatDate = useFormattedDate()

  const query = {
    ...onewaySearch,
    includeLocations: [
      {
        locode: trip.itinerary[0].destinationLocode,
        value: trip.itinerary[0].destination,
        isCity: true,
      },
    ],
    windowStart: new Date(trip.start_date),
    windowEnd: new Date(trip.start_date),
  }

  const href = {
    pathname,
    query: sanitizeQueryParams(mapOnewaySearch(query)),
  }

  const handleSearchClick = () => {
    setOnewaySearch((prev) => {
      const query = {
        ...prev,
        includeLocations: [
          {
            locode: trip.itinerary[0].destinationLocode,
            value: trip.itinerary[0].destination,
            isCity: true,
          },
        ],
        windowStart: new Date(trip.start_date),
        windowEnd: new Date(trip.start_date),
      }

      return query
    })
  }

  return (
    <Link href={href} _hover={{}}>
      <Card
        cursor={'pointer'}
        onClick={handleSearchClick}
        overflow={'hidden'}
        transition="all .2s"
        _hover={{
          md: {
            boxShadow: 'xl',
            borderColor: '_lightgray',
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box
          w={'full'}
          bg="_lightgray"
          borderRadius={'lg'}
          overflow="hidden"
          position={'relative'}
          borderBottomRadius={0}
        >
          <Box w="full" h="10rem" position={'relative'}>
            <Image
              fill
              alt={trip.title}
              sizes="(max-width: 420px) 100vw"
              src={`${trip.trip_photo}375160.png`}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>

        <HStack px="2" py="4" width={'full'} justify="space-between">
          <VStack align="flex-start" gap={0}>
            <Text fontWeight={'medium'} fontSize="lg" w="full">
              {trip.locations[0]}
            </Text>

            <HStack w="full" gap={1.5}>
              <Box pos="relative" top="-1.5px">
                <CalenderIcon height="1rem" color={theme.colors._gray} />
              </Box>
              <Text color="_gray" fontSize="sm">
                {formatDate(parseISO(trip.start_date), true)}
              </Text>
            </HStack>
          </VStack>

          <VStack align="flex-start" gap={0}>
            <Text
              st="common.from"
              fontSize="sm"
              color="_gray"
              alignSelf="flex-end"
              textTransform="lowercase"
            />
            <Text lineHeight="1" whiteSpace={'nowrap'} fontWeight={'medium'}>
              {getConvertedCurrency(trip.price.price_transports)}
            </Text>
          </VStack>
        </HStack>
      </Card>
    </Link>
  )
}
