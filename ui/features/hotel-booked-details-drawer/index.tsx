import {
  Box,
  Divider,
  Grid,
  HStack,
  ListIcon,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
  Wrap,
  useDisclosure,
} from '@chakra-ui/react'

import Image from 'ui/primitives/Image'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Drawer from 'ui/primitives/Drawer'
import Container from 'ui/primitives/Container'
import Link from 'ui/primitives/Link'
import dynamic from 'next/dynamic'
import { MotionBox } from 'ui/primitives/Motion'

import { theme } from 'src/styles/theme'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { useFormattedDate } from 'src/hooks/useFormattedDate'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useSelectedCurrency } from 'src/contexts/currency'
import useCurrency from 'src/hooks/useCurrency'
import useChatBot from 'src/hooks/useChatBot'

import Stars from 'ui/shared/stars'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import FullScreenCarousel from 'ui/features/full-screen-carousel'

import HelpIcon from '@/icons/navbar/help.svg'
import MailIcon from '@/icons/shared/mail.svg'
import PhoneIcon from '@/icons/shared/phone.svg'
import LeftArrow from '@/icons/shared/left-icon.svg'
import SmallCheckIcon from '@/icons/shared/tick-icon.svg'
import useTranslation from 'src/hooks/useTranslation'

import type { HotelContentType } from 'ui/features/manage-booking/types/auth-data.type'
import Badge from 'ui/primitives/Badge'

const DynamicHotelMapDrawer = dynamic(() =>
  import('ui/features/hotel-map-drawer/index.tsx').then(
    (module) => module.default
  )
)

const GridElementWrapper = ({ children }) => {
  const { isMobile } = useResponsiveSizes()

  if (isMobile) return <Box>{children}</Box>

  return <>{children}</>
}

export type HotelBookedDetailsDrawerProps = {
  hotel: HotelContentType
  isOpen: boolean
  onClose: () => void
}

export default function HotelBookedDetailsDrawer({
  hotel,
  isOpen,
  onClose,
}: HotelBookedDetailsDrawerProps) {
  const { t } = useTranslation()
  const { showAndOpen } = useChatBot()

  const formatDate = useFormattedDate()
  const { getConvertedCurrency } = useCurrency()
  const { selectedCurrency } = useSelectedCurrency()

  const {
    isOpen: isOpenHotelMapDrawer,
    onOpen: onOpenHotelMapDrawer,
    onClose: onCloseHotelMapDrawer,
  } = useDisclosure()

  return (
    <>
      <Drawer
        p="0"
        header={false}
        isOpen={isOpen}
        onClose={onClose}
        contentStyle={{
          maxW: '100vw',
          motionProps: { initial: false, animate: false },
        }}
      >
        <MotionBox
          pb="32"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, type: 'tween' },
          }}
        >
          <Container>
            <HStack pt="6">
              <CircleIconWrapper onClick={onClose} w="fit-content">
                <LeftArrow
                  width="13"
                  height="13"
                  stroke={theme.colors._black}
                />
              </CircleIconWrapper>

              <Heading
                as="h3"
                fontWeight="normal"
                st="hotel-manage-booking.drawer.close.header"
              />
            </HStack>

            <Box
              mt="8"
              borderRadius="lg"
              border="1px solid"
              p={{ base: 4, md: 8 }}
              borderColor="_lightgray"
            >
              <Heading
                as="h2"
                fontWeight="normal"
                fontSize={{ base: 'lg', md: 'xl' }}
                st="hotel-manage-booking.section.one.header"
                sd={{ name: hotel.name }}
              />

              <Stack
                mt="4"
                align="center"
                spacing={{ base: 8, md: 40 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <UnorderedList mt="3" listStyleType="none" ml="0">
                  <ListItem as={HStack}>
                    <ListIcon as={SmallCheckIcon} color="_black" />
                    <Wrap>
                      <Text st="hotel-manage-booking.section.one.subheading.one" />
                    </Wrap>
                  </ListItem>
                  <ListItem mt="4" as={HStack}>
                    <ListIcon as={SmallCheckIcon} color="_black" />
                    <Text st="hotel-manage-booking.section.one.subheading.two" />
                  </ListItem>
                </UnorderedList>

                {hotel.confirmation_pdf && (
                  <Link
                    isExternal
                    href={hotel.confirmation_pdf}
                    minW={{ base: 'full', md: '16rem' }}
                  >
                    <Button
                      mb="4"
                      primary
                      px="4"
                      py="3.5"
                      h="auto"
                      id="hotel-room-info"
                      minW={{ base: 'full', md: '16rem' }}
                    >
                      <Text st="common.download.confirmation" />
                    </Button>
                  </Link>
                )}
              </Stack>
            </Box>

            <Box
              mt="8"
              overflow="hidden"
              borderRadius="lg"
              border="1px solid"
              borderColor="_lightgray"
            >
              <Stack
                w="full"
                spacing={{ base: 6, md: 16 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <Box w="full" p={{ base: 4, md: 8 }}>
                  <FullScreenCarousel h="15rem" images={hotel.photos}>
                    <Box
                      w="full"
                      h="15rem"
                      overflow="hidden"
                      pos="relative"
                      bg="_lightestgray"
                      borderRadius="lg"
                    >
                      {hotel.photo_url && (
                        <Image
                          fill
                          alt="Hotel Image"
                          src={hotel.photo_url}
                          style={{ objectFit: 'cover' }}
                        />
                      )}

                      <Button
                        secondary
                        right={0}
                        bottom={0}
                        bg="_white"
                        pos="absolute"
                        borderRadius="none"
                        fontWeight="normal"
                        borderTopLeftRadius="lg"
                        id="hotel-see-all-photos"
                        _hover={{ textDecoration: 'underline' }}
                        arrow
                      >
                        <Text
                          color="primary"
                          fontSize="sm"
                          st="common.hotel.photos.show.button"
                        />
                      </Button>
                    </Box>
                  </FullScreenCarousel>

                  <HStack
                    mt="6"
                    w="full"
                    align="flex-start"
                    justify="space-between"
                  >
                    <Text maxW="12rem" color="_darkgray">
                      {hotel.address}
                    </Text>

                    <Button
                      asLink
                      fontWeight="normal"
                      id="show-map-link"
                      onClick={onOpenHotelMapDrawer}
                    >
                      <Text st="common.view.map" />
                    </Button>
                  </HStack>

                  <VStack mt="10" w="full" align="flex-start" spacing={5}>
                    {hotel.confirmation_pdf && (
                      <Link isExternal href={hotel.confirmation_pdf}>
                        <Button asLink id="download-confirmation">
                          <Text st="common.download.confirmation" />
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </Box>

                <Box px="4" py="8" minW="24rem" bg="" alignSelf="stretch">
                  <VStack w="full" align="flex-start" spacing={4}>
                    {(hotel.confirmation_number || hotel.pin_code) && (
                      <Box>
                        {hotel.confirmation_number && (
                          <HStack spacing={1}>
                            <Text
                              fontSize="sm"
                              color="_gray"
                              st="manage-booking-page.confirmation.number"
                            />

                            <Text fontSize="sm" color="_darkgray">
                              {hotel.confirmation_number}
                            </Text>
                          </HStack>
                        )}

                        {hotel.pin_code && hotel.pin_code !== '0000' && (
                          <HStack spacing={1}>
                            <Text
                              fontSize="sm"
                              color="_gray"
                              st="manage-booking-page:pincode"
                            />

                            <Text fontSize="sm" color="_darkgray">
                              {hotel.pin_code}
                            </Text>
                          </HStack>
                        )}
                      </Box>
                    )}

                    <Box>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="common.price.breakdown.check.in"
                      />

                      <Text color="_darkgray" fontWeight="medium">
                        {formatDate(hotel.check_in_date)}
                      </Text>
                      {hotel.checkin_checkout_times && (
                        <Text
                          fontSize="sm"
                          color="_gray"
                          st="hotel-manage-booking.section.two.checkin"
                          sd={{
                            checkin_from:
                              hotel.checkin_checkout_times.checkin_from,
                            checkin_to: hotel.checkin_checkout_times.checkin_to
                              ? hotel.checkin_checkout_times.checkin_to
                              : hotel.checkin_checkout_times.checkin_from,
                          }}
                        />
                      )}
                    </Box>

                    <Box>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="common.price.breakdown.check.out"
                      />

                      <Text color="_darkgray" fontWeight="medium">
                        {formatDate(hotel.check_out_date)}
                      </Text>

                      {hotel.checkin_checkout_times && (
                        <Text
                          fontSize="sm"
                          color="_gray"
                          st="hotel-manage-booking.section.two.checkout"
                          sd={{
                            checkout_from: hotel.checkin_checkout_times
                              .checkout_from
                              ? hotel.checkin_checkout_times.checkout_from
                              : hotel.checkin_checkout_times.checkout_to,
                            checkout_to:
                              hotel.checkin_checkout_times.checkout_to,
                          }}
                        />
                      )}
                    </Box>
                  </VStack>

                  <Box mt="8">
                    {!hotel.pay_now && (
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="common.general.price"
                      />
                    )}

                    <Text
                      fontSize="sm"
                      color="_gray"
                      st="common.nights"
                      sd={{ count: hotel.nights_at }}
                    />

                    <Wrap align="center">
                      {!hotel.pay_now && (
                        <Text
                          fontSize="2xl"
                          fontWeight="medium"
                          color="_darkgray"
                        >
                          {getConvertedCurrency(hotel.price_hotel)}
                        </Text>
                      )}

                      {!hotel.pay_now && (
                        <Badge
                          bg="_lightgray"
                          color="_black"
                          textTransform="initial"
                        >
                          <Text st="hotel-info.hotel.pay.later" notag />
                        </Badge>
                      )}
                    </Wrap>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box
              mt="8"
              overflow="hidden"
              borderRadius="lg"
              border="1px solid"
              borderColor="_lightgray"
            >
              <Stack
                w="full"
                spacing={{ base: 0, md: 16 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <Box w="full">
                  <Box p={{ base: 4, md: 8 }}>
                    <Heading
                      as="h2"
                      fontWeight="normal"
                      st="hotel-manage-booking.section.three.header"
                    />

                    <HStack mt="5">
                      <Text>{renderTrimmedString(hotel.name, 32)}</Text>
                      <Stars amount={hotel.stars} size="lg" />
                    </HStack>

                    <Grid
                      mt="6"
                      gap={2}
                      templateColumns={{ base: '1fr', md: '16rem 1fr' }}
                    >
                      {hotel.confirmation_number && (
                        <GridElementWrapper>
                          <Text
                            fontSize="sm"
                            color="_gray"
                            st="manage-booking-page.confirmation.number"
                          />

                          <Text fontSize="sm" color="_darkgray">
                            {hotel.confirmation_number}
                          </Text>
                        </GridElementWrapper>
                      )}

                      {hotel.pin_code && hotel.pin_code !== '0000' && (
                        <GridElementWrapper>
                          <Text
                            fontSize="sm"
                            color="_gray"
                            st="manage-booking-page.pincode"
                          />
                          <Text fontSize="sm" color="_darkgray">
                            {hotel.pin_code}
                          </Text>
                        </GridElementWrapper>
                      )}

                      <GridElementWrapper>
                        <Text
                          fontSize="sm"
                          color="_gray"
                          st="hotel-manage-booking.booking.details"
                        />

                        <Text
                          fontSize="sm"
                          color="_darkgray"
                          st="common.nights"
                          sd={{ count: hotel.nights_at }}
                        />
                      </GridElementWrapper>

                      <GridElementWrapper>
                        <Text
                          fontSize="sm"
                          color="_gray"
                          st="common.price.breakdown.check.in"
                        />

                        <Text fontSize="sm" color="_darkgray">
                          {formatDate(hotel.check_in_date)}{' '}
                          {hotel.checkin_checkout_times && (
                            <>({hotel.checkin_checkout_times.checkin_from})</>
                          )}
                        </Text>
                      </GridElementWrapper>

                      <GridElementWrapper>
                        <Text
                          fontSize="sm"
                          color="_gray"
                          st="common.price.breakdown.check.out"
                        />

                        <Text fontSize="sm" color="_darkgray">
                          {formatDate(hotel.check_out_date)}{' '}
                          {hotel.checkin_checkout_times && (
                            <>({hotel.checkin_checkout_times?.checkout_to})</>
                          )}
                        </Text>
                      </GridElementWrapper>
                    </Grid>
                  </Box>

                  <Box
                    overflow="hidden"
                    my={{ base: 4, md: 10 }}
                    mx={{ base: 0, md: 8 }}
                    borderRadius={{ base: 'none', md: '2xl' }}
                    border={{ base: 'none', md: '1px solid' }}
                    borderColor={{ base: 'transparent', md: '_lightgray' }}
                  >
                    {!hotel.pay_now && (
                      <>
                        <Box p="4">
                          <HStack
                            w="full"
                            color="_darkgray"
                            justify="space-between"
                          >
                            <Text fontSize="xl" display={'flex'} gap={2}>
                              <Text st="common.general.total" />
                              <Text st="common.general.price" />
                            </Text>
                            <HStack spacing={1}>
                              <Text fontSize="xl">
                                {getConvertedCurrency(hotel.price_hotel)}
                              </Text>
                            </HStack>
                          </HStack>
                        </Box>
                        <Divider display={{ base: 'none', md: 'block' }} />
                      </>
                    )}

                    <VStack p="4" bg="_lightestgray">
                      {!hotel.pay_now && (
                        <>
                          <Box w="full">
                            <Text
                              color="_darkgray"
                              st="hotel-manage-booking.section.three.subheading.one"
                            />

                            <Text
                              fontSize="sm"
                              color="_gray"
                              maxW={{ base: 'full', md: '75%' }}
                              st="hotel-manage-booking.section.three.description.one"
                            />
                          </Box>

                          <Divider />

                          <Box w="full">
                            <Text
                              color="_darkgray"
                              st="hotel-manage-booking.section.three.subheading.two"
                            />
                            <Text
                              fontSize="sm"
                              color="_gray"
                              maxW={{ base: 'full', md: '75%' }}
                              st="hotel-manage-booking.section.three.description.two"
                              sd={{
                                paymentProviders:
                                  'American Express, Visa, Mastercard, JCB.',
                              }}
                            />
                          </Box>

                          <Divider />

                          <Box w="full">
                            <Text
                              color="_darkgray"
                              st="hotel-manage-booking.section.three.subheading.three"
                            />
                            <Text
                              fontSize="sm"
                              color="_gray"
                              maxW={{ base: 'full', md: '75%' }}
                              sd={{
                                currencyName1: selectedCurrency.code,
                                currencyName2: hotel.currency,
                              }}
                              st="hotel-manage-booking.section.three.description.three"
                            />
                          </Box>

                          <Divider />
                        </>
                      )}

                      <Box w="full">
                        <Text
                          color="_darkgray"
                          st="hotel-manage-booking.section.three.subheading.four"
                        />
                        <Text
                          fontSize="sm"
                          color="_gray"
                          maxW={{ base: 'full', md: '75%' }}
                          st="hotel-manage-booking.section.three.description.four"
                        />
                      </Box>

                      <Divider display={{ base: 'none', md: 'block' }} />
                    </VStack>
                  </Box>
                </Box>

                <Box
                  px="4"
                  py="8"
                  alignSelf="stretch"
                  maxW={{ base: 'full', md: '12rem' }}
                  bg={{ base: '_white', md: '_lightestgray' }}
                >
                  <Text
                    color="_darkgray"
                    st="hotel-manage-booking.section.three.subheading.five"
                  />

                  <Text
                    fontSize="xs"
                    mt="4"
                    color="_darkgray"
                    st="hotel-manage-booking.section.three.description.five"
                  />

                  {!!hotel.hotel_contact && (
                    <HStack mt="6" align="flex-start">
                      <Box mt="1">
                        <PhoneIcon width="18" height="18" />
                      </Box>

                      <VStack align="flex-start">
                        <Text
                          color="_darkgray"
                          st="hotel-manage-booking.contact.hotel"
                          fontSize="sm"
                        />
                        <Button
                          as="a"
                          asLink
                          fontWeight="normal"
                          id="contact-property-link"
                          href={`tel:${hotel.hotel_contact}`}
                        >
                          {hotel.hotel_contact}
                        </Button>
                      </VStack>
                    </HStack>
                  )}
                </Box>
              </Stack>
            </Box>

            <Box
              mt="8"
              overflow="hidden"
              borderRadius="lg"
              border="1px solid"
              borderColor="_lightgray"
            >
              <Box p={{ base: 4, md: 8 }}>
                <Heading
                  as="h2"
                  fontWeight="normal"
                  st="hotel-manage-booking.section.four.heading"
                />

                <Grid
                  mt="6"
                  gap={4}
                  templateColumns={{ base: '1fr', md: '18rem 24rem' }}
                >
                  <GridElementWrapper>
                    <Text
                      fontSize="sm"
                      color="_gray"
                      st="common.general.address"
                    />

                    <Text fontSize="sm" color="_darkgray">
                      {hotel.address}
                    </Text>
                  </GridElementWrapper>

                  <GridElementWrapper>
                    <Text
                      fontSize="sm"
                      color="_gray"
                      st="common.general.gps.coordinates"
                    />

                    <Text fontSize="sm" color="_darkgray">
                      {hotel.location.latitude}, {hotel.location.longitude}
                    </Text>
                  </GridElementWrapper>

                  <Box />
                  <Button
                    asLink
                    fontWeight="normal"
                    id="show-directions"
                    justifySelf="flex-start"
                    onClick={onOpenHotelMapDrawer}
                  >
                    <Text fontSize="sm" st="common.view.map" />
                  </Button>
                </Grid>
              </Box>

              {hotel.rooms.map((room, index) => (
                <Box
                  key={index}
                  py="6"
                  bg="_lightestgray"
                  px={{ base: 4, md: 8 }}
                >
                  <Text fontSize="lg" color="_darkgray">
                    {room.name}
                  </Text>

                  <Grid
                    mt="6"
                    rowGap={4}
                    columnGap={6}
                    templateColumns={{ base: '1fr', md: '18rem 1fr' }}
                  >
                    <GridElementWrapper>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="common.general.facilities"
                      />

                      {room.facilities && (
                        <Wrap>
                          {room.facilities.map((facility, idx) => {
                            return (
                              <Text key={idx} fontSize="sm" color="_darkgray">
                                {facility.name}
                                {', '}
                              </Text>
                            )
                          })}
                        </Wrap>
                      )}
                    </GridElementWrapper>
                    <GridElementWrapper>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="hotel-manage-booking.section.four.subheading.one"
                      />

                      <Box>
                        <Text
                          fontSize="sm"
                          color="_darkgray"
                          st="hotel-manage-booking.guest.number"
                          sd={{ count: room.max_n_people }}
                        />
                      </Box>
                    </GridElementWrapper>
                    <GridElementWrapper>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="hotel-info.hotel.modal.mealplan.title"
                      />

                      {room.all_inclusive ? (
                        <Text notag st="hotel-info:tag.allinclusive" />
                      ) : room.full_board ? (
                        <Text notag st="hotel-info:tag.fullboard" />
                      ) : room.half_board ? (
                        <Text notag st="hotel-info:tag.halfboard" />
                      ) : room.breakfast_included ? (
                        <Text notag st="hotel-info:tag.breakfast" />
                      ) : (
                        <Text
                          fontSize="sm"
                          color="_darkgray"
                          st="hotel-manage-booking.meal.plan.description"
                        />
                      )}
                    </GridElementWrapper>
                    <GridElementWrapper>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="hotel-manage-booking.section.four.subheading.four"
                      />

                      {hotel.pay_now ? (
                        <Text
                          fontSize="sm"
                          color="_darkgray"
                          st="hotel-manage-booking.prepayment.not.required"
                        />
                      ) : (
                        <Text
                          fontSize="sm"
                          color="_darkgray"
                          st="hotel-manage-booking.prepayment.required"
                        />
                      )}
                    </GridElementWrapper>
                    <GridElementWrapper>
                      <Text
                        fontSize="sm"
                        color="_gray"
                        st="common.general.cancellation.policy"
                      />

                      <Text
                        fontSize="sm"
                        color="_darkgray"
                        st="hotel-manage-booking.cancel.description"
                      />
                    </GridElementWrapper>
                  </Grid>
                </Box>
              ))}
            </Box>

            <Box mt="8">
              <Text
                fontSize="xl"
                color="_darkgray"
                st="hotel-manage-booking.contact.hotel"
              />

              <Text
                color="_gray"
                maxW="22rem"
                st="hotel-manage-booking.section.five.subheading.one"
              />

              <HStack w="full" mt="6" align="flex-start">
                <Box mt="0.5">
                  <MailIcon width="20" height="20" />
                </Box>

                <VStack w="full" align="flex-start">
                  <Text
                    color="_darkgray"
                    st="hotel-manage-booking.section.five.heading.two"
                  />
                  <Text
                    color="_darkgray"
                    st="hotel-manage-booking.section.five.subheading.two"
                  />

                  <Button
                    as="a"
                    asLink
                    fontWeight="normal"
                    id="send-an-email"
                    href="mailto:info@tryp.com"
                  >
                    <Text
                      fontSize={'sm'}
                      st="hotel-manage-booking.send.email"
                    />
                  </Button>
                </VStack>
              </HStack>

              <HStack w="full" mt="6" align="flex-start">
                <Box mt="1">
                  <PhoneIcon width="18" height="18" />
                </Box>

                <VStack w="full" align="flex-start">
                  <Text
                    color="_darkgray"
                    st="hotel-manage-booking.contact.hotel"
                  />
                  <Button
                    as="a"
                    asLink
                    fontWeight="normal"
                    id="contact-property-link"
                    href={`tel:${
                      hotel.hotel_contact ?? t('footer.contact.phone')
                    }`}
                  >
                    {hotel.hotel_contact ?? t('footer.contact.phone')}
                  </Button>
                </VStack>
              </HStack>

              <Text
                mt="12"
                fontSize="xl"
                color="_darkgray"
                st="common.need.help"
              />

              <HStack w="full" mt="6" align="flex-start">
                <Box minW="4">
                  <HelpIcon />
                </Box>

                <VStack w="full" align="flex-start">
                  <Text
                    color="_darkgray"
                    st="hotel-manage-booking.help.description"
                  />

                  <Button
                    asLink
                    fontWeight="normal"
                    onClick={showAndOpen}
                    id="contact-customer-service-hotel-page"
                  >
                    <Text
                      fontSize={'sm'}
                      st="hotel-manage-booking.contact.support"
                    />
                  </Button>
                </VStack>
              </HStack>
            </Box>
          </Container>
        </MotionBox>
      </Drawer>

      <DynamicHotelMapDrawer
        hotel={hotel}
        onClose={onCloseHotelMapDrawer}
        onOpenHotelViewOverride={onCloseHotelMapDrawer}
        isHotelMapOpen={isOpenHotelMapDrawer}
      />
    </>
  )
}
