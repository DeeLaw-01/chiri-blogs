import { HStack, Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Card, { CardProps } from 'ui/primitives/Card'
import useTimer from 'src/hooks/useTimer'
import { HotelDetails } from 'src/shared-types/hotel-details.type'
import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import { addHours, differenceInSeconds, parseISO } from 'date-fns'
import Trans from 'ui/shared/trans'
import { useNavigateToMarketplace } from 'ui/features/manage-booking-new/hooks/useNavigateToMarketplace'

type FlashSaleBannerProps = {
  accommodation: HotelDetails
} & CardProps

export default function FlashSaleBanner({
  accommodation,
  ...rest
}: FlashSaleBannerProps) {
  const { booking } = useManageBookingAtoms()
  const { navigateToMarketplace } = useNavigateToMarketplace()

  const getRemaining = () => {
    if (!booking) return { hours: 0, mins: '0', secs: '0' }
    const purchaseDate = parseISO(booking.trip.purchase_time)
    const endTime = addHours(purchaseDate, 24)
    const now = new Date()

    const totalSecondsLeft = differenceInSeconds(endTime, now)

    const hours = Math.floor(totalSecondsLeft / 3600)
    const mins = Math.floor((totalSecondsLeft % 3600) / 60)
    const secs = totalSecondsLeft % 60

    return { hours: hours, mins: `${mins}`, secs: `${secs}` }
  }

  const { countdown } = useTimer(getRemaining())

  return (
    <Card
      _hover={{ cursor: 'pointer' }}
      onClick={() => navigateToMarketplace('stays')}
      {...rest}
    >
      <Box
        position="relative"
        bgGradient={`linear(to-l, #f6be55, #dd2020)`}
        borderRadius="lg"
        py={{ base: '1', md: '2' }}
        px={{ base: '2', md: '4' }}
        color="white"
        mb="8"
        mt={{ base: -4, md: -2 }}
        zIndex="1"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          backgroundSize: '80%',
          backgroundRepeat: 'repeat',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/static/triangle-pattern.png)',
          opacity: '0.5',
          zIndex: 0,
        }}
      >
        <HStack w="full" justify="space-between">
          <VStack alignItems="flex-start" gap="0.1rem" py={2}>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'lg' }}
              lineHeight={1}
              fontWeight="medium"
              textTransform={'uppercase'}
            >
              <Trans
                st="new-manage-booking-page.accommodation.flash.banner.heading"
                sd={{
                  city: accommodation.city,
                  discount: 15,
                  tos: (chunks) => (
                    <Text fontWeight={'bold'} as={'span'}>
                      {chunks}
                    </Text>
                  ),
                }}
              />
            </Heading>
            <Text
              fontSize={{ base: '2xs', md: 'xs' }}
              noOfLines={1}
              st="new-manage-booking-page.accommodation.flash.banner.subheading"
            />
          </VStack>

          <Box
            bg="_black"
            py="0.5"
            px={{ base: 2, md: 4 }}
            borderRadius="lg"
            minW="fit-content"
          >
            <VStack alignItems="flex-start" gap="0">
              <Text fontSize={{ base: '2xs', md: '2xs' }}>Time left</Text>
              <Text
                mt="-0.5 !important"
                fontSize={{ base: '2xs', md: 'sm' }}
                minW="50px"
              >
                {countdown.hours}h {countdown.mins}m
              </Text>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Card>
  )
}
