import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import UserIcon from '@/icons/profile/user-icon.svg'
import useCurrency from 'src/hooks/useCurrency'
import NextImage from 'next/image'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import Tooltip from 'ui/primitives/Tooltip'
import { parseISO } from 'date-fns'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import CalenderIcon from '@/icons/checkout/calendar-icon.svg'
import { theme } from 'src/styles/theme'
import { renderTrimmedString } from 'src/utils/renderUtils'
import NextLink from 'next/link'
import { TripDetails } from 'src/shared-types/trip-details.type'

type CommonCardProps = {
  trip: TripDetails
}

const CommonCard: React.FC<CommonCardProps> = ({ trip }): JSX.Element => {
  const { getConvertedCurrency } = useCurrency()
  const formatDate = useFormattedDate()

  if (!trip) return <></>

  const departureLocation =
    trip.itinerary[trip.itinerary.length - 1].destination

  const getLocationsList = (): JSX.Element => {
    const seeMoreLocations = trip.itinerary.filter((l, idx) => idx > 1)

    return (
      <HStack fontSize="xs">
        {trip.itinerary.map((loc, idx: number) => {
          return (
            <HStack key={idx}>
              {idx === 0 && (
                <>
                  <Text whiteSpace={'nowrap'}>{departureLocation}</Text>{' '}
                  <ArrowRightIcon
                    stroke="black"
                    width="10"
                    height="8"
                    viewBox="0 0 19 14"
                  />
                </>
              )}
              {idx < 2 && (
                <Text whiteSpace={'nowrap'}>
                  {renderTrimmedString(loc.destination, 10)}
                </Text>
              )}
              {idx < 1 && idx !== trip.locations.length - 1 && (
                <ArrowRightIcon
                  stroke="black"
                  width="10"
                  height="8"
                  viewBox="0 0 19 14"
                />
              )}
              {idx === 2 && trip.locations.length > 3 ? (
                <Tooltip
                  label={
                    <Text>
                      {seeMoreLocations?.map((l) => l.destination).join(', ')}
                    </Text>
                  }
                >
                  <span>
                    <Text
                      color="primary"
                      whiteSpace={'nowrap'}
                      st={'common.more'}
                      sd={{ count: trip.locations.length - 2 }}
                    />
                  </span>
                </Tooltip>
              ) : (
                ''
              )}
            </HStack>
          )
        })}
      </HStack>
    )
  }

  return (
    <NextLink href={`/packages/${trip?.id}`} passHref>
      <VStack
        role="group"
        align={'flex-start'}
        border="1px solid"
        borderColor="_lightgray"
        bg="_white"
        borderRadius={'lg'}
        cursor="pointer"
        transition="all .2s"
        _hover={{
          md: {
            boxShadow: 'md',
          },
        }}
      >
        <Box
          h={'150px'}
          w={'full'}
          bg="_lightgray"
          borderRadius={'lg'}
          overflow="hidden"
          position={'relative'}
          borderBottomRadius={0}
        >
          <Box
            w="full"
            h="full"
            transition=".3s ease"
            _groupHover={{
              md: {
                transform: 'scale(1.02)',
              },
            }}
          >
            <NextImage
              fill
              sizes="(max-width: 420px) 100vw"
              src={trip.trip_photo + '375160.png'}
              alt={trip.title}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
        <Box p="2" width={'max-content'}>
          <Text fontWeight={'medium'}>
            {renderTrimmedString(trip.title, 31)}
          </Text>
          {getLocationsList()}
          <HStack color={'_darkgray'} spacing={4} fontSize="xs" mt="2">
            <Text>{getConvertedCurrency(trip.price.price_transports)}</Text>
            <HStack>
              <UserIcon />
              <Text
                st="common.travelers"
                sd={{ count: trip.passengers.total_passengers }}
              />
            </HStack>
            <HStack>
              <CalenderIcon
                stroke={theme.colors._gray}
                width="18"
                height="18"
              />
              <Text>{formatDate(parseISO(trip.start_date), true)}</Text>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </NextLink>
  )
}

export default CommonCard
