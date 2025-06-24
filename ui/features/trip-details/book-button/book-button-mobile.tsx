import { Box, HStack, VStack } from '@chakra-ui/react'
import { TripDetails } from 'src/shared-types/trip-details.type'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'
import ChevronDown from '@/icons/shared/chevron-down-icon.svg'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'
import useCurrency from 'src/hooks/useCurrency'
import BottomSheet from 'ui/primitives/Bottom-sheet'
import TripInfo from './trip-info'
import { MotionBox } from 'ui/primitives/Motion'
import { AnimatePresence } from 'framer-motion'

type BookButtonMobileProps = {
  trip: TripDetails
  totalPrice: number
  discountPrice: number
  handlePurchase: () => void
  isLoading: boolean
  isDisabled: boolean
}

export default function BookButtonMobile({
  trip,
  totalPrice,
  discountPrice,
  handlePurchase,
  isLoading,
  isDisabled,
}: BookButtonMobileProps) {
  const { setShowChangeTravelers } = useTripDetailsAtoms()
  const { getConvertedCurrency } = useCurrency()
  return (
    <>
      <BottomSheet content={<TripInfo trip={trip} price={totalPrice} />}>
        <Box
          position="fixed"
          bottom="0"
          left="0"
          bg="white"
          minH={'4rem'}
          zIndex="sticky"
          p={2}
          px={4}
          borderTop="1px"
          borderColor="_lightgray"
          w="full"
        >
          <HStack justifyContent="space-between">
            <VStack alignItems="flex-start" flex={'1'} gap="0">
              <HStack>
                <AnimatePresence mode="wait">
                  <MotionBox
                    key={trip.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  >
                    <Text fontSize="1.35rem" color="_black" fontWeight="medium">
                      {getConvertedCurrency(totalPrice)}
                    </Text>
                  </MotionBox>
                </AnimatePresence>
                {discountPrice > 0 && (
                  <Text as="s" fontSize="xs" color="primary">
                    <Text color="_gray">
                      {getConvertedCurrency(discountPrice)}
                    </Text>
                  </Text>
                )}
              </HStack>
              <Text fontSize="xs" color="_gray" mt="-5px !important">
                <Text notag st="new-trip-page:total.price.for" />
                <Button
                  variant="unstyled"
                  id="change-passengers"
                  verticalAlign={'top'}
                  fontSize="xs"
                  h="auto"
                  fontWeight="noraml"
                  color="_gray"
                  isDisabled={isDisabled}
                  rightIcon={
                    <ChevronDown
                      width="8"
                      height="8"
                      stroke={theme.colors.primary}
                    />
                  }
                  onClick={() => setShowChangeTravelers(true)}
                >
                  <Text
                    display="inline-block"
                    st="common:travelers"
                    mr="-4px !important"
                    sd={{ count: trip.passengers.total_passengers }}
                  />
                </Button>
              </Text>
            </VStack>
            <Button
              id="book-button"
              primary
              bgGradient={theme.gradients.primary}
              py={'6 !important'}
              isLoading={isLoading}
              onClick={handlePurchase}
              isDisabled={isDisabled}
            >
              <Text>Book Trip</Text>
            </Button>
          </HStack>
        </Box>
      </BottomSheet>
    </>
  )
}
