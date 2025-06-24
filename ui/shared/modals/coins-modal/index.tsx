import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Heading from 'ui/primitives/Heading'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import CoinIcon from '@/icons/coin.svg'
import DiscountBag from '@/icons/illustrations/discount-bag.svg'
import DiscountTags from '@/icons/illustrations/discount-tags.svg'
import Link from 'ui/primitives/Link'
import { CONFIG_SETTINGS } from 'src/config'
import useCurrency from 'src/hooks/useCurrency'
import { getCoinsAmount } from 'src/utils/getCoinsAmount'

export type CoinsModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function CoinsModal({ isOpen, onClose }: CoinsModalProps) {
  const { getConvertedCurrency } = useCurrency()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalBodyStyle={{ p: 0, overflowX: 'hidden' }}
    >
      <Box overflow="hidden" borderRadius="xl" bg="white">
        <Box
          position="relative"
          height="200px"
          bg="secondary"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundImage={'/static/about/travel-pattern.png'}
            opacity="0.1"
          />
          {/* Foreground illustration */}
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifySelf="center"
            height="100%"
            w="50%"
            m="0 auto"
            backgroundImage={'/static/coins/coins-luggage.png'}
            backgroundRepeat={'no-repeat'}
          />
          {/* Curved bottom white shape */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="100px"
            bg="white"
            borderTopRadius="50% 40%"
            mb="-50px"
            zIndex={1}
          />
        </Box>

        <Box p={6} mt="-40px" pos="relative" zIndex="2">
          <Heading
            as="h2"
            textAlign="center"
            mb="3"
            st="new-trip-page.coins.modal.heading"
          />

          <Box
            bg="_lightorange"
            w="fit-content"
            display="flex"
            justifySelf="center"
            px="5"
            py="2"
            borderRadius="md"
            boxShadow="sm"
            m="0 auto"
          >
            <Heading as="h5" color="_orange">
              100 {CONFIG_SETTINGS.COIN_NAME} ≈{' '}
              {getConvertedCurrency(getCoinsAmount(100))}
            </Heading>
          </Box>

          <VStack justify="flex-start" gap="1rem" my="5">
            <HStack align="flex-start" spacing="1rem">
              <Box>
                <CoinIcon width="35" height="35" />
              </Box>
              <Box>
                <Text
                  fontWeight="medium"
                  fontSize="sm"
                  st="new-trip-page.coins.modal.point.one.heading"
                  sd={{ coin_name: CONFIG_SETTINGS.COIN_NAME }}
                />

                <Text
                  fontSize="xs"
                  st="new-trip-page.coins.modal.point.one.description"
                  sd={{ coin_name: CONFIG_SETTINGS.COIN_NAME }}
                />
              </Box>
            </HStack>
            <HStack align="flex-start" spacing="1rem">
              <Box>
                <DiscountTags width="35" height="35" />
              </Box>
              <Box>
                <Text
                  fontWeight="medium"
                  fontSize="sm"
                  st="new-trip-page.coins.modal.point.two.heading"
                />
                <Text
                  fontSize="xs"
                  st="new-trip-page.coins.modal.point.two.description"
                />
              </Box>
            </HStack>
            <HStack align="flex-start" spacing="1rem">
              <Box>
                <DiscountBag width="35" height="35" />
              </Box>
              <Box>
                <Text
                  fontWeight="medium"
                  fontSize="sm"
                  st="new-trip-page.coins.modal.point.three.heading"
                />
                <Text
                  fontSize="xs"
                  st="new-trip-page.coins.modal.point.three.description"
                />
              </Box>
            </HStack>
          </VStack>

          <Divider m="0 auto" w="80%" />
          <Text color="_gray" fontSize="2xs" textAlign="center" mt="2">
            <Text st="new-trip-page.coins.modal.footer" notag />
            {/* TODO: Should link to a new page /loyalty instead of terms-and-conditions */}
            <Link href="/terms-and-conditions">
              <Button asLink id="coins-see-more" fontSize="inherit" ml="1ch">
                <Text st="common.view.more" />
              </Button>
            </Link>
          </Text>
        </Box>
      </Box>
    </Modal>
  )
}
