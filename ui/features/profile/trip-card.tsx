import { VStack, HStack, Box, Wrap, Stack, Spacer } from '@chakra-ui/react'
import Tooltip from 'ui/primitives/Tooltip'
import Heading from 'ui/primitives/Heading'

import Text from 'ui/primitives/Text'
import Badge from 'ui/primitives/Badge'
import NextLink from 'next/link'
import Carousel from 'ui/shared/carousel'
import LinedVStack from 'ui/shared/lined-vstack'

import { renderTrimmedString } from 'src/utils/renderUtils'
import { parseISO } from 'date-fns'
import { useFormattedDate } from 'src/hooks/useFormattedDate'

import CalenderIcon from '@/icons/calendar.svg'
import { memo } from 'react'
import { PackageDetails } from 'src/shared-types/package-details.type'
import useAuth from 'src/hooks/useAuth'

const SmallColoredCircle = ({ transparent }: { transparent?: boolean }) => {
  return (
    <Box
      minW="2"
      minH="2"
      bg={transparent ? '_white' : 'primary'}
      border="1px"
      borderColor="primary"
      borderRadius="full"
    />
  )
}

export default memo(function TripCard({
  packageInfo,
}: {
  packageInfo: PackageDetails
}): JSX.Element {
  const formatDate = useFormattedDate()
  const startDate = parseISO(packageInfo?.start_date)
  const endDate = parseISO(packageInfo?.end_date)

  const formattedStartDate = formatDate(startDate, false)
  const formattedEndDate = formatDate(endDate, false)
  const auth = useAuth()

  const initalLocation = packageInfo?.initial_location

  const packageImages = packageInfo.itinerary.map((value) => {
    if (value.picture) return `${value.picture}375160.png`
  })

  return (
    <NextLink
      href={`/manage-booking?email=${auth?.attributes?.email}&bid=${packageInfo?.purchase_id}`}
      passHref
    >
      <Box w="full" pos="relative">
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
        >
          <Stack
            w="full"
            spacing={0}
            align="stretch"
            direction={['column', 'row']}
            mt="-1px"
          >
            {/* CAROUSEL IMAGEs */}
            <HStack
              w="full"
              maxW="30rem"
              h={{ base: '17rem', md: 'auto' }}
              minH={{ base: 'auto', md: '17rem' }}
            >
              <Carousel
                border="0px"
                images={packageImages}
                boxShadow={'none'}
                altText="City image"
                borderBottomRightRadius={'none'}
                borderBottomLeftRadius={{ base: 'none', md: 'lg' }}
                borderTopRightRadius={{ base: 'lg', md: 'none' }}
              />
            </HStack>

            <Box w="full">
              {/* MID INFO */}

              <HStack h="full" justify="space-between" alignItems="stretch">
                <VStack align="flex-start" pl="4" py="4" maxW="70%">
                  <Heading as="h3">{packageInfo?.title}</Heading>
                  <HStack>
                    <CalenderIcon />
                    <Text
                      color="_gray"
                      st="common.package.card.date.from"
                      sd={{
                        start: formattedStartDate,
                        end: formattedEndDate,
                      }}
                    />
                  </HStack>
                  <Wrap>
                    {packageInfo?.tags?.map((tag, index) => {
                      if (packageInfo?.sustainable_trip && index >= 1) return
                      return (
                        <Badge primary key={index} px={5}>
                          <Text
                            notag
                            st={
                              'home-page.advanced.search.category.option.' +
                              tag.toLowerCase()
                            }
                          />
                        </Badge>
                      )
                    })}
                    {packageInfo?.sustainable_trip && (
                      <Tooltip
                        renderOnMobile={false}
                        label={
                          <Text st="home-page.step3.radiogroup.sustainable" />
                        }
                      >
                        <HStack zIndex={1}>
                          <Badge primary color="_green">
                            <Text
                              whiteSpace={'nowrap'}
                              st="home-page.step3.radiogroup.option3"
                            />
                          </Badge>
                        </HStack>
                      </Tooltip>
                    )}
                  </Wrap>
                  <Spacer />
                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    fontSize={{ base: 'md', md: '2xl' }}
                    color={'primary'}
                  >
                    <Text display={'flex'}>
                      <Text st={'common.booking.id'} />
                      {':'}
                    </Text>
                    <Text>{packageInfo?.purchase_id}</Text>
                  </Stack>
                </VStack>

                {/* SIDE LOCATIONS */}
                <LinedVStack
                  pl="4"
                  pr="15px"
                  pt="4"
                  align="flex-end"
                  _before={{
                    right: '1.17rem !important',
                    left: 'initial !important',
                  }}
                >
                  <HStack>
                    <Text color="_black" textAlign="right" fontSize={'sm'}>
                      {initalLocation}
                    </Text>
                    <SmallColoredCircle />
                  </HStack>
                  {packageInfo.itinerary.map((location, index) => (
                    <HStack key={index}>
                      <Text
                        maxW={24}
                        color="_black"
                        textAlign="right"
                        fontSize={'sm'}
                      >
                        {packageInfo.itinerary.length > 5
                          ? renderTrimmedString(location.destination, 9, false)
                          : location.destination}
                      </Text>
                      <SmallColoredCircle transparent={location.is_layover} />
                    </HStack>
                  ))}
                </LinedVStack>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </NextLink>
  )
})
