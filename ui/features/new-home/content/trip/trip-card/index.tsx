import { VStack, HStack, Box, Wrap } from '@chakra-ui/react'
import Tooltip from 'ui/primitives/Tooltip'
import Heading from 'ui/primitives/Heading'

import { EecProductClickDataLayer } from 'src/tracking'

import Text from 'ui/primitives/Text'
import Badge from 'ui/primitives/Badge'

import Carousel from 'ui/shared/carousel'
import LinedVStack from 'ui/shared/lined-vstack'

import { renderTrimmedString } from 'src/utils/renderUtils'
import useCurrency from 'src/hooks/useCurrency'
import { parseISO } from 'date-fns'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

import CalenderIcon from '@/icons/calendar.svg'
import { Dispatch, memo, SetStateAction } from 'react'
import { BestSeller, HighDemand, LimitedSeats, PayLessToday } from './urgency'
import { getAverage } from 'src/utils/numberUtils'
import { PackageDetails } from 'src/shared-types/package-details.type'
import { theme } from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import CountryFlag from 'ui/shared/country-flag'
import CurvedSVG from 'ui/shared/curved -svg'
import ExtraOptionsButton from './extra-options-button'
import CustomLink from 'ui/primitives/Link'
import Image from 'ui/primitives/Image'

const SmallColoredCircle = ({ transparent }: { transparent?: boolean }) => {
  return (
    <Box
      minW="2"
      minH="2"
      bg={transparent ? '_white' : '_gray'}
      border="1px"
      borderColor="_gray"
      borderRadius="full"
    />
  )
}

// TODO: Redo all of this...
export default memo(function PackageCardDesktop({
  trip,
  currentPackageLoading,
  setCurrentPackageLoading,
}: {
  trip: PackageDetails
  currentPackageLoading: number | null
  setCurrentPackageLoading: Dispatch<SetStateAction<number | null>>
}): JSX.Element {
  const formatDate = useFormattedDate()
  const startDate = parseISO(trip?.start_date)
  const endDate = parseISO(trip?.end_date)
  const { getConvertedCurrency } = useCurrency()

  const formattedStartDate = formatDate(startDate, false)
  const formattedEndDate = formatDate(endDate, false)

  if (!trip || Object.keys(trip).length === 0) return <></>

  const initalLocation = trip?.itinerary[trip?.itinerary.length - 1].destination

  const packageImages = trip?.itinerary
    .filter((_, idx) => idx !== trip?.itinerary.length - 1)
    .filter((location) => location.picture !== undefined)
    .map((location) => location.picture + '375160.png')

  const handleProductClickEvent = (): void => {
    // datalayers stuff
    sessionStorage.setItem('triprmation', JSON.stringify(trip))
    EecProductClickDataLayer(trip)
  }

  const handleViewTrip = (id: number): void => {
    setCurrentPackageLoading(id)
    handleProductClickEvent()
  }

  const getUrgencyTag = () => {
    if (!trip.urgency) return <></>

    let disc = getAverage(trip?.avg_price, trip?.price.price_transports)

    if (trip.urgency.trending) return <HighDemand />
    else if (trip.urgency.best_seller) return <BestSeller />
    else if (trip.urgency.packages_sold > 0)
      return <LimitedSeats count={trip.urgency.packages_sold} />
    else if (disc > 10 && disc < 50 && Math.random() >= 0.5)
      return <PayLessToday discount={disc} />
  }

  return (
    <CustomLink href={`/packages/${trip?.id}`} _hover={{}}>
      <Box
        as="article"
        bg="_white"
        role="group"
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        border="1px solid"
        borderColor="_lightgray"
        transition="all .2s"
        _hover={{
          md: {
            boxShadow: 'xl',
            borderColor: '_lightgray',
            transform: 'scale(1.02)',
          },
        }}
        onClick={() => handleViewTrip(trip?.id)}
        position={'relative'}
        display={'flex'}
        flexDirection={'column'}
        h="100%"
      >
        <Box
          zIndex="1"
          display="flex"
          position={'absolute'}
          flexDirection={'column'}
        >
          {getUrgencyTag()}
        </Box>
        <Box
          top={2}
          right={2}
          zIndex="2"
          pos="absolute"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <ExtraOptionsButton trip={trip} />
        </Box>

        <Box h="full" display="flex" flexDirection="column">
          {/* CAROUSEL IMAGEs */}
          <HStack w="full" h="14rem" position={'relative'}>
            <Carousel
              border="0px"
              boxShadow={'none'}
              altText="City image"
              images={packageImages}
              borderBottomRightRadius={'none'}
              sizes="(max-width: 120ch) 100vw, 19rem"
            />
            {trip.featured_location?.country_code === 'TH' && (
              <Box
                pos="absolute"
                bottom="3.3rem"
                right="0.5rem"
                bg="_white"
                borderRadius="md"
                p="2"
              >
                <Box width="70px" height="35px" p="2" pos="relative">
                  <Image
                    fill
                    alt="Thailand Partnership"
                    src="/static/partnership/thailand.png"
                  />
                </Box>
              </Box>
            )}

            <CurvedSVG bottom={-0.5} />
          </HStack>

          {/* MID INFO */}
          <HStack
            alignItems="stretch"
            justify="space-between"
            flex={'1'}
            position="relative"
            pl={2}
          >
            <VStack align="flex-start" h={'min'} pb={2} w={'full'}>
              <VStack alignItems={'flex-start'}>
                <Heading
                  as="h3"
                  fontSize={{ base: 'lg', md: 'md' }}
                  mr={{ base: 0, md: 4 }}
                >
                  {trip?.title}
                </Heading>
                <HStack>
                  <CalenderIcon />
                  <Text
                    color="_gray"
                    st="common.package.card.date.from"
                    sd={{
                      start: formattedStartDate,
                      end: formattedEndDate,
                    }}
                    fontSize={{ base: 'lg', md: 'md' }}
                  />
                </HStack>
              </VStack>

              {trip.featured_location && (
                <Box>
                  <HStack
                    fontSize={'xs'}
                    borderRadius={'full'}
                    border={'1px solid'}
                    borderColor={theme.colors._lightgray}
                    alignItems={'center'}
                    p={1}
                  >
                    <CountryFlag
                      country={trip.featured_location?.country_code}
                    />
                    <Text
                      st="home-page.partner.with"
                      sd={{
                        countryName: 'Amazing Thailand',
                      }}
                    />
                  </HStack>
                </Box>
              )}

              <Wrap>
                {trip?.tags?.map((tag, index) => {
                  if (trip?.sustainable_trip && index >= 1) return
                  return (
                    <Badge primary key={index} px={5}>
                      <Text
                        notag
                        fontSize="xs"
                        st={
                          'home-page.advanced.search.category.option.' +
                          tag.toLowerCase()
                        }
                      />
                    </Badge>
                  )
                })}
                {trip?.sustainable_trip && (
                  <Tooltip
                    renderOnMobile={false}
                    label={<Text st="home-page.step3.radiogroup.sustainable" />}
                  >
                    <HStack zIndex={1}>
                      <Badge primary color="_green">
                        <Text
                          fontSize="xs"
                          whiteSpace={'nowrap'}
                          st="home-page.step3.radiogroup.option3"
                        />
                      </Badge>
                    </HStack>
                  </Tooltip>
                )}
              </Wrap>
            </VStack>

            {/* SIDE LOCATIONS */}
            <LinedVStack
              pr="16.5px"
              pt={{ base: '2', md: '4' }}
              align="flex-end"
              minW={'40%'}
              _before={{
                right: '1.17rem !important',
                left: 'initial !important',
              }}
              mt={-10}
              pb={6}
            >
              <HStack>
                <Text color="_black" textAlign="right" fontSize={'sm'}>
                  {trip.itinerary.length > 5
                    ? renderTrimmedString(initalLocation, 9, false)
                    : initalLocation}
                </Text>
                <SmallColoredCircle />
              </HStack>
              {trip.itinerary.map((location, index) => (
                <HStack key={index}>
                  <Text
                    maxW={{ md: 'full', base: '90%' }}
                    color="_black"
                    textAlign="right"
                    fontSize={'sm'}
                  >
                    {trip.itinerary.length > 5
                      ? renderTrimmedString(location.destination, 9, false)
                      : location.destination}
                  </Text>
                  <SmallColoredCircle transparent={location.is_layover} />
                </HStack>
              ))}
            </LinedVStack>
          </HStack>
          <HStack
            id="package-card-price-section"
            bgColor={theme.colors._lightestgray}
            p={2}
            pr="16.5px"
            zIndex={1}
            justifyContent={'space-between'}
          >
            <VStack align={'flex-start'} spacing={0}>
              <Text
                color={'primary'}
                fontSize={{ base: '2xl', md: '3xl' }}
                lineHeight="1"
                whiteSpace={'nowrap'}
                fontWeight={'medium'}
              >
                {getConvertedCurrency(trip?.price.price_transports, {
                  nearestOne: true,
                  includeCommaValues: false,
                })}
              </Text>
              <Text
                whiteSpace={'nowrap'}
                fontSize="xs"
                lineHeight="1"
                st="common.price.description"
                sd={{ count: trip?.passengers?.total_passengers }}
              />
            </VStack>
            <Button
              py={'1.5rem'}
              primary
              id="view-deal"
              onClick={() => handleViewTrip(trip?.id)}
              isLoading={currentPackageLoading === trip?.id}
            >
              <Text notag st="common.link.view.trip" />
            </Button>
          </HStack>
        </Box>
      </Box>
    </CustomLink>
  )
})
